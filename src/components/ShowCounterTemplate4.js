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
import Img1 from '../assets/template4/background.png';
import Img2 from '../assets/template4/shading.png';
import pic1 from '../assets/template4/comingsoon5.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="5px solid orange"
            borderRadius={100}
          >
            <Heading fontSize={48} pt={2} fontFamily="serif" color="orange">
              {value}
            </Heading>
          </Box>
          <Heading size="md" color="orange">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="850" minH="800">
      <Box position="absolute" top="200" left="380">
        <MovingComponent
          type="fadeOut"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img2} w={650} opacity={0.3} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="240" left="500">
        <MovingComponent
          type="shakeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={pic1} w={350} />
        </MovingComponent>
      </Box>
      <HStack top={650} position="absolute">
        {/* <Divider /> */}
        <Grid templateColumns="repeat(11, 1fr)" gap={0}>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1} pt={3}>
            <Heading color="black">:</Heading>
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
