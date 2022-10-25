import React from 'react';
import { MovingComponent } from 'react-moving-text';
import { Box, Heading, Image, HStack, VStack } from '@chakra-ui/react';

import Img1 from '../assets/timeuptemplate/background.png';
import Pic1 from '../assets/timeuptemplate/lights.png';

const ShowCounter = ({ deadlinedate }) => {
  const Letter1 = ['T', 'I', 'M', 'E', "'", 'S', ' ', 'U', 'P', '!'];
  const Letter2 = ['W', 'E', 'L', 'C', 'O', 'M', 'E'];

  return (
    <VStack
      backgroundImage={Img1}
      backgroundSize="cover"
      minW="800"
      maxW="800"
      minH="800"
      maxH="800"
    >
      <Box position="absolute" left={300} top={250}>
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic1} w={800} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="290">
        <HStack>
          {Letter1.map((letter, index) => (
            <MovingComponent
              key={index}
              type="spin"
              duration="1000ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="5"
              fillMode="none"
            >
              <Heading color="white" fontSize={72}>
                {letter}
              </Heading>
            </MovingComponent>
          ))}
        </HStack>
      </Box>

      <Box position="absolute" top="360">
        <HStack>
          {Letter2.map((letter, index) => (
            <MovingComponent
              key={index}
              type="flash"
              duration="1000ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="5"
              fillMode="none"
            >
              <Heading color="white" fontFamily="" fontSize={72}>
                {letter}
              </Heading>
            </MovingComponent>
          ))}
        </HStack>
      </Box>

      <Box position="absolute" top="480">
        <MovingComponent
          type="zoomOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Heading color="white">{deadlinedate}</Heading>
        </MovingComponent>
      </Box>
      <Box position="absolute" top="150">
        <MovingComponent
          type="spin"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Heading color="white" fontSize="82">
            🔥
          </Heading>
        </MovingComponent>
      </Box>
    </VStack>
  );
};

export default ShowCounter;
