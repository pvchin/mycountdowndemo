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
    <VStack
      backgroundImage={Img1}
      backgroundSize="cover"
      minW="800"
      maxW="800"
      minH="800"
      maxH="800"
    >
      <Box position="absolute" left={510} top={590}>
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
      <Box position="absolute" top="350">
        <Heading color="orange" fontFamily="sans-serif" fontSize={52}>
          GRAND
        </Heading>
      </Box>
      <Box position="absolute" top="350">
        <Image src={Text1} w={500} />
      </Box>
      <Box position="absolute" top="250">
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic2} w={800} />
        </MovingComponent>
      </Box>
      <HStack top={150} left={300} position="absolute">
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
