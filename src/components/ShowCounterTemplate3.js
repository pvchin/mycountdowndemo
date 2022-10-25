import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Img1 from '../assets/template3/background.png';
import Img2 from '../assets/template3/comingsoon.png';
import Img3 from '../assets/template3/calendar.png';
const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="5px solid black"
            borderRadius={100}
          >
            <Heading fontSize={48} fontFamily="" pt={2}>
              {value}
            </Heading>
          </Box>
          <Heading size="md">{type}</Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="800" minH="800">
      <Box position="absolute" top="120" left="800">
        <Image src={Img3} w={150} />
      </Box>
      <Box position="absolute" top="160" left="830">
        <MovingComponent
          type="flash"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Text fontSize={16} fontWeight={'bold'}>
            December
          </Text>
          <Text fontSize={25} fontWeight={'bold'}>
            31st
          </Text>
        </MovingComponent>
      </Box>
      <Box position="absolute" top="320" left="480">
        <MovingComponent
          type="zoomOut"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img2} w={450} />
        </MovingComponent>
      </Box>
      <HStack top={590} left={0} position="relative">
        <Divider />
        <Grid templateColumns="repeat(11, 1fr)" gap={8}>
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
