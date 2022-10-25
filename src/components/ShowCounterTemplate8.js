import React from 'react';
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
import { MovingComponent } from 'react-moving-text';
import Img1 from '../assets/template8/background8.png';
import Img2 from '../assets/template8/comingsoon.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={150}
            height={100}
            //border="5px solid white"
            borderRadius={10}
          >
            <Heading fontSize={58} fontFamily="cursive" pt={2} color="white">
              {value}
            </Heading>
          </Box>
          <Divider px={2} width="full" />
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
      <Box position="relative">
        <MovingComponent
          type="spin"
          duration="1000ms"
          delay="0s"
          direction="reverse"
          timing="ease-in"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img2} w={400} />
        </MovingComponent>
      </Box>
      <Box position="relative" top={150}>
        <MovingComponent
          type="fadeInFromLeft"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Heading>coming soon new products launch</Heading>
        </MovingComponent>
      </Box>
      <HStack pt={2} top={190} position="relative">
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
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
