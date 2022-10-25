import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import Img1 from '../assets/template5/background.png';
import pic1 from '../assets/template5/pic1.png';
import pic2 from '../assets/template5/pic2.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={20}
            height={20}
            border="5px solid white"
            borderRadius={100}
          >
            <Heading fontSize={32} fontFamily="serif" pt={4} color="white">
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
      <Box position="absolute" top="300" left="500">
        <MovingComponent
          type="popOut"
          duration="1000ms"
          delay="0.2s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={pic2} w={450} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="290" left="520">
        <MovingComponent
          type="popOut"
          duration="1000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="5"
          fillMode="none"
        >
          <Image src={pic1} w={450} />
        </MovingComponent>
      </Box>
      <VStack pt={2} pl={600} mt={100} position="relative">
        <Grid templateColumns="repeat(1, 1fr)" gap={6}>
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
      </VStack>
    </VStack>
  );
};

export default ShowCounter;
