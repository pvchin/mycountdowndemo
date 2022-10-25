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

import Img1 from '../assets/template9/background.png';
import Img2 from '../assets/template9/comingsoon.png';
import Pic1 from '../assets/template9/shoes.png';

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
            <Heading fontSize={42} fontFamily="serif" pt={2} color="white">
              {value}
            </Heading>
          </Box>
          {/* <Divider px={2} width="full"/> */}
          <Heading size="md" color="white">
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
      <Box position="absolute" left={400} top={250}>
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Img2} w={450} />
        </MovingComponent>
      </Box>
      <Box position="absolute" left={400} top={450}>
        <MovingComponent
          type="unfold"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic1} w={450} />
        </MovingComponent>
      </Box>
      <HStack pt={2} top={120} left={150} position="absolute">
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
