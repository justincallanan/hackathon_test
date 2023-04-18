import { Alert, Flex, Spinner } from '@chakra-ui/react';

interface FallbackProps {
  isLoading: boolean;
}

const Fallback: React.FC<FallbackProps> = ({ isLoading }) => {
  return isLoading ? (
    <>
      <Flex justifyContent={'center'}>
        <Spinner />
      </Flex>
    </>
  ) : (
    <Alert>Error: failed to load skills data.</Alert>
  );
};

export default Fallback;
