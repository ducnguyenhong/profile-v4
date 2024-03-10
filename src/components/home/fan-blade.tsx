import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';

interface FanBladeProps {
  fullBladeHeight: number; // px
  bgImage?: string;
  className?: string;
  zIndex?: number;
  isCenter?: boolean;
  connectClassName?: string;
}

export const FanBlade: React.FC<FanBladeProps> = (props) => {
  const { bgImage = '/images/blade-1.png', className, zIndex, isCenter, fullBladeHeight, connectClassName } = props;
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
      opacity={0}
      visibility="hidden"
      align="center"
      w={isCenter ? '1px' : `${bladeWidth}px`}
      h={`${fullBladeHeight}px`}
    >
      <Box w="full" h={bladeHeight} pos="relative">
        <Box
          clipPath="polygon(0% 0%, 100% 0%, 62% 100%, 38% 100%)"
          w="full"
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
        <Box
          zIndex={1}
          opacity={isCenter ? 0 : 1}
          visibility={isCenter ? 'hidden' : 'visible'}
          w={isCenter ? '1px' : '10px'}
          className={connectClassName}
          h={`${connectHeight}px`}
          bgColor="#3d1010"
          mx="auto"
        />
      </Flex>
    </Flex>
  );
};

export default memo(FanBlade);
