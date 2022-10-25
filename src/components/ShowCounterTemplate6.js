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

import Img1 from '../assets/template6/background.png';
import Img2 from '../assets/template6/comingsoon4.png';
import pic1 from '../assets/template6/fashion1.jpg';
import pic2 from '../assets/template6/fashion2.jpg';
import pic3 from '../assets/template6/fashion3.jpg';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box width={20} height={20} border="5px solid grey" borderRadius={10}>
            <Heading fontSize={38} fontFamily="cursive" pt={2}>
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
    <Box position="relative" backgroundImage={Img1} h="800px" w="800px">
      <Box position="relative" top="170" left="250">
        <MovingComponent
          type="unfold"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={Img2} w={325} />
        </MovingComponent>
      </Box>
      <Box position="relative" top="200" left="350">
        <MovingComponent
          type="squeezeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >
          <Image src={pic3} w={325} />
        </MovingComponent>
      </Box>
      <Box position="relative" top="150" left="300">
        <MovingComponent
          type="squeezeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >
          <Image src={pic2} w={250} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="350" left="140">
        <MovingComponent
          type="squeezeMix"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="3"
          fillMode="none"
        >
          <Image src={pic1} w={200} />
        </MovingComponent>
      </Box>
      <HStack top={50} left={150} position="absolute">
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
    </Box>
  );
};

export default ShowCounter;
