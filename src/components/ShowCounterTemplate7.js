import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';

import Img1 from '../assets/template7/background7.png';
import Img2 from '../assets/template7/blackcircle.png';
import Img3 from '../assets/template7/logo.png';
import Img4 from '../assets/template7/openingsoon.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="5px solid white"
            borderRadius={10}
          >
            <Heading fontSize={38} fontFamily="cursive" pt={2} color="white">
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
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="800" minH="800">
      <Box position="absolute">
        <MovingComponent
          type="fadeOut"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img2} w={850} opacity={0.7} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="250">
        <MovingComponent
          type="rotateSlowDown"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img3} w={90} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="320">
        <Heading color="white">LITTLE KITCHEN</Heading>
      </Box>
      <Box position="absolute" top="260">
        <MovingComponent
          type="zoomOut"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img4} w={500} />
        </MovingComponent>
      </Box>
      <HStack pt={2} top={500} position="relative">
        <Divider />
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
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
