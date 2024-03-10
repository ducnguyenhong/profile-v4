import FanBlade from '@/components/home/fan-blade';
import { Flex } from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const fullBladeHeight = 600; // px

  const BLADE_LIST = [
    {
      bgImage: '/images/blade-1.png',
      className: 'paper-fan-blade-1',
      zIndex: 1,
      isCenter: false
    },
    {
      bgImage: '/images/blade-2.png',
      className: 'paper-fan-blade-2',
      zIndex: 2,
      isCenter: false
    },
    {
      bgImage: '/images/blade-3.png',
      className: 'paper-fan-blade-3',
      zIndex: 3,
      isCenter: false
    },
    {
      bgImage: '/images/blade-4.png',
      className: 'paper-fan-blade-4',
      zIndex: 4,
      isCenter: false
    },
    {
      bgImage: '/images/blade-5.png',
      className: 'paper-fan-blade-5',
      zIndex: 5,
      isCenter: true
    },
    {
      bgImage: '/images/blade-6.png',
      className: 'paper-fan-blade-6',
      zIndex: 4,
      isCenter: false
    },
    {
      bgImage: '/images/blade-7.png',
      className: 'paper-fan-blade-7',
      zIndex: 3,
      isCenter: false
    },
    {
      bgImage: '/images/blade-8.png',
      className: 'paper-fan-blade-8',
      zIndex: 2,
      isCenter: false
    },
    {
      bgImage: '/images/blade-9.png',
      className: 'paper-fan-blade-9',
      zIndex: 1,
      isCenter: false
    }
  ];

  return (
    <Flex
      bgSize="cover"
      bgRepeat="no-repeat"
      // bgImage="https://img.freepik.com/free-vector/gradient-landing-page-template-mid-autumn-festival-celebration_23-2149554686.jpg?w=1380&t=st=1708857826~exp=1708858426~hmac=dfb6cf6ee6e85fe73e50b959d1b0ba49a75a6b753a222149e14f72acdc5c4e83"
      bgColor="#ffe0b3"
      justify="center"
      align="center"
      // gap="135px"
      direction="column"
      w="100%"
      h="100vh"
      overflow="hidden"
    >
      <Flex pos="relative" w="100%" h={fullBladeHeight} align="center" justify="center">
        {BLADE_LIST.map((item) => {
          const { className, bgImage, zIndex, isCenter } = item;

          return (
            <FanBlade
              key={className}
              bgImage={bgImage}
              className={className}
              zIndex={zIndex}
              isCenter={isCenter}
              fullBladeHeight={fullBladeHeight}
            />
          );
        })}
      </Flex>
      {/* <Flex align="center">
        <Box
          clipPath="circle(50% at 50% 50%)"
          w="50px"
          h="50px"
          bgImage="https://img.freepik.com/premium-vector/hand-drawn-mid-autumn-festival_23-2148649148.jpg?w=740"
        />
      </Flex> */}
    </Flex>
  );
};

export default Home;
