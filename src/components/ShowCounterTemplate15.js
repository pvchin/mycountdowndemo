import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';

import Img1 from '../assets/template15/background.png';
import Pic1 from '../assets/template15/stars.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={100}
            height={70}
            border="5px solid white"
            borderRadius={10}
          >
            <Heading fontSize={38} pt={3} color="white">
              {value}
            </Heading>
          </Box>
      
          <Heading size="md" color="white">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const LComing = ['C', 'O', 'M', 'I', 'N', 'G'];
  const LSoon = ['S', 'O', 'O', 'N'];

  return (
    <VStack
      backgroundImage={Img1}
      backgroundSize="cover"
      minW="800"
      maxW="800"
      minH="800"
      maxH="800"
    >
      <Box position="absolute" left={300} top={110}>
        <MovingComponent
          type="fadeOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic1} w={700} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="390">
        <HStack>
          {LComing.map((letter, index) => (
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
              <Heading color="white" fontSize={82}>
                {letter}
              </Heading>
            </MovingComponent>
          ))}
       
        </HStack>
      </Box>

      <Box position="absolute" top="460">
        <HStack>
          {LSoon.map((letter, index) => (
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
              <Heading color="white" fontFamily="" fontSize={82}>
                {letter}
              </Heading>
            </MovingComponent>
          ))}
        
        </HStack>
      </Box>

      <Box position="absolute" top="560">
        <Heading color="white" fontSize={24} fontFamily="">
          STAY TUNED
        </Heading>
      </Box>
      <Box position="absolute" top="250">
        <MovingComponent
          type="zoomOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        ></MovingComponent>
      </Box>
      <HStack top={200} left={300} position="absolute">
        <Grid templateColumns="repeat(11, 1fr)" gap={5}>
          <GridItem colSpan={3} pt={3}>
            <Heading color="black"></Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
       
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
       
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
      
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={seconds}
              type={'SECONDS'}
              isDanger={false}
            />
          </GridItem>
        </Grid>
      </HStack>
    </VStack>
  );
};

export default ShowCounter;
