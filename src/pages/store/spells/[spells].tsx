import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import SchoolList from '../../../components/store/spells/school-list';
import SpellListing from '../../../components/store/spells/spell-listing';
import schoolList from '../../../lib/common/school-list';

// Dynamically render spells
const Spell = ({ listing }) => {
  const router = useRouter();
  const { spells } = router.query;
  return (
    <Flex justifyContent='center'>
      <Flex
        direction='column'
        gap='3rem'
        w='full'
        maxW='container.xl'
        py={{ base: '5rem', lg: '5rem' }}
        fontFamily='normal'
      >
        <SchoolList active={spells} />
        <SpellListing listing={listing} />
      </Flex>
    </Flex>
  );
};

// Paths for dynamic spells
// export const getStaticPaths: GetStaticPaths = async () => {
//   const schoolPaths = schoolList.map((school: string) => ({
//     params: { spells: school },
//   }));
//   return {
//     paths: [{ params: { spells: 'all' } }, ...schoolPaths],
//     fallback: false,
//   };
// };

// // Fetch props
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { data: listing } = await axios.get(
//     `http://localhost:3000/api/store/spells/${params.spells}`
//   );
//   return {
//     props: {
//       listing,
//     },
//   };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { spells } = query;
  const { data: listing } = await axios.get(
    `http://localhost:3000/api/store/spells/${spells}`
  );

  return {
    props: { listing },
  };
};
export default Spell;
