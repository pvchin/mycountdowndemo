import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Img1 from '../assets/template1/background.png';
import Img2 from '../assets/template1/lamp.png';
import Img3 from '../assets/template1/lighting.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Heading fontSize={48} fontFamily="" color="white">
            {value}
          </Heading>

          <Heading size="md" color="white">
            {type}
          </Heading>
        </VStack>
      </Center>
    </Box>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  const Letters1 = ['C', 'O', 'M', 'I', 'N', 'G'];
  const Letters2 = ['S', 'O', 'O', 'N'];
  return (
    <Container>
      <VStack backgroundImage={Img1} minW="800" minH="600">
        <Box position="absolute" top="180" left="520">
          <MovingComponent
            type="flash"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="5"
            fillMode="none"
          >
            <Image src={Img3} w={500} />
          </MovingComponent>
        </Box>
        <Box position="absolute" top="100" left="700">
          <Image src={Img2} w={150} />
        </Box>
        <Box position="absolute" top={340}>
          <HStack>
            {Letters1.map((letter, index) => (
              <MovingComponent
                key={index}
                type="spin"
                duration="1000ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease"
                iteration="5"
                fillMode="none"
              >
                <Heading fontSize="62" color="white" fontFamily="serif">
                  {letter}
                </Heading>
              </MovingComponent>
            ))}
          </HStack>
          <HStack ml={55}>
            {Letters2.map((letter, index) => (
              <MovingComponent
                key={index}
                type="spin"
                duration="1000ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease"
                iteration="5"
                fillMode="none"
              >
                <Heading fontSize={62} color="white" fontFamily="serif">
                  {letter}
                </Heading>
              </MovingComponent>
            ))}
          </HStack>
        </Box>
        <HStack top={550} position="absolute">
          <Grid templateColumns="repeat(11, 1fr)" gap={0} pl={14} mt={2}>
            <GridItem colSpan={2}>
              <DateTimeDisplay
                value={days}
                type={'DAYS'}
                isDanger={days <= 3}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Heading>:</Heading>
            </GridItem>
            <GridItem colSpan={2}>
              <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
            </GridItem>
            <GridItem colSpan={1}>
              <Heading>:</Heading>
            </GridItem>
            <GridItem colSpan={2}>
              <DateTimeDisplay
                value={minutes}
                type={'MINUTES'}
                isDanger={false}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Heading>:</Heading>
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
    </Container>
  );
};

export default ShowCounter;
