import { ColorRing } from 'react-loader-spinner';
import { Center } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Center h="100vh">
      <ColorRing
        visible={true}
        height={80}
        width={80}
        ariaLabel="loading-indicator"
        colors={['#4A90E2', '#50E3C2', '#F5A623', '#F8E71C', '#7ED321']}
      />
    </Center>
  );
};

export default Loader;
