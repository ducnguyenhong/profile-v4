import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';

interface FanBladeProps {
  fullBladeHeight: number; // px
  bgImage?: string;
  className?: string;
  zIndex?: number;
  isCenter?: boolean;
}

export const FanBlade: React.FC<FanBladeProps> = (props) => {
  const { bgImage = '/images/blade-1.png', className, zIndex, isCenter, fullBladeHeight } = props;
  const connectHeight = (fullBladeHeight / 4) * 1;
  const bladeHeight = (fullBladeHeight / 4) * 3;
  const bladeWidth = 200;

  return (
    <Flex
      zIndex={zIndex}
      direction="column"
      top={isCenter ? undefined : 0}
      left={isCenter ? undefined : 0}
      right={isCenter ? undefined : 0}
      mx="auto"
      pos="absolute"
      className={className}
      align="center"
      w={`${bladeWidth}px`}
      h={`${fullBladeHeight}px`}
    >
      <Box w={bladeWidth} h={bladeHeight} pos="relative">
        <Box
          clipPath="polygon(0% 0%, 100% 0%, 62% 100%, 38% 100%)"
          w={bladeWidth}
          h={bladeHeight}
          bgSize="cover"
          bgRepeat="no-repeat"
          bgImage={bgImage}
          overflow="hidden"
          cursor="pointer"
          transitionDuration="250ms"
          _hover={{ transform: 'scale(1.025)' }}
          zIndex={5}
        />
      </Box>

      <Flex justify="center" align="center">
        <Box zIndex={1} w="10px" h={`${connectHeight}px`} bgColor="#3d1010" mx="auto" />
      </Flex>
    </Flex>
  );
};

export default memo(FanBlade);
