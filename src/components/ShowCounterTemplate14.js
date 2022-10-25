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

import Img1 from '../assets/template14/background.png';
import Pic1 from '../assets/template14/scissor.png';
import Pic2 from '../assets/template14/lights.png';
import Text1 from '../assets/template14/opening.png';

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
  return (
   <Box
      position="relative"
      backgroundImage={Img1}
      backgroundSize="cover"
      h="900px"
      w="900px"
    >
      <Box position="absolute" right={0} top={585}>
        <MovingComponent
          type="shadow"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic1} w={600} />
        </MovingComponent>
      </Box>
      <Box position="relative" top="350">
        <Heading color="orange" fontFamily="sans-serif" fontSize={52}>
          GRAND
        </Heading>
      </Box>
      <Box position="absolute" top="350" left="200">
        <Image src={Text1} w={500} />
      </Box>
      <Box position="absolute" top="300">
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic2} w="full" />
        </MovingComponent>
      </Box>
      <HStack top={50} left={10} position="relative">
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
    </Box>
  );
};

export default ShowCounter;
