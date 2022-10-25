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

import Img1 from '../assets/template10/background10.png';
import Img2 from '../assets/template10/comingsoon.png';
import Img3 from '../assets/template10/splash.png';
import Img4 from '../assets/template10/trump.png';

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
            <Heading fontSize={38} pt={3} color="black">
              {value}
            </Heading>
          </Box>

          <Heading size="md" color="black">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack
      backgroundImage={Img1}
      backgroundSize="cover"
      minW="800"
      maxW="800"
      minH="800"
      maxH="800"
    >
      <Box position="relative" left={150}>
        <Image src={Img3} w={500} />

        <Box position="absolute" left={200} top={12}>
          <MovingComponent
            type="unfold"
            duration="1000ms"
            delay="0s"
            direction="alternate-reverse"
            timing="ease"
            iteration="15"
            fillMode="none"
          >
            <Image src={Img2} w={290} />
          </MovingComponent>
        </Box>
      </Box>
      <Box position="absolute" left={295} top={12}>
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease-in-out"
          iteration="15"
          fillMode="none"
        >
          <Image src={Img4} w={350} />
        </MovingComponent>
      </Box>
      <HStack top={750} left={450} position="absolute">
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
