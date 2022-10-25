import React from 'react';
import { MovingComponent } from 'react-moving-text';
import {
  Box,
  Center,
  Heading,
  Grid,
  GridItem,
  HStack,
  VStack,
} from '@chakra-ui/react';

import Img1 from '../assets/template2/background.jpg';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box width={20} border="1px solid white" borderRadius={10}>
            <Heading fontSize={48} fontFamily="" color="white">
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
  const Letters = ['O', 'P', 'E', 'N', 'I', 'N', 'G', ' ', 'S', 'O', 'O', 'N'];
  return (
    <VStack backgroundImage={Img1} backgroundSize="cover" minW="600" minH="800">
      <Box position="absolute" top={140}>
        <HStack>
          {Letters.map((letter, index) => (
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
              <Heading size="xl" color="white" fontFamily="serif">
                {letter}
              </Heading>
            </MovingComponent>
          ))}
        </HStack>
      </Box>
      <HStack top={180} position="absolute">
        <Grid templateColumns="repeat(11, 1fr)" gap={0} pt={5}>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay value={hours} type={'HOURS'} isDanger={false} />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
          </GridItem>
          <GridItem colSpan={2}>
            <DateTimeDisplay
              value={minutes}
              type={'MINUTES'}
              isDanger={false}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Heading color="white">:</Heading>
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
