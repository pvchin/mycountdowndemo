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

import Img1 from '../assets/template13/background.png';
import Pic1 from '../assets/template13/box.png';
import Text1 from '../assets/template13/somethingiscoming.png';
import Text2 from '../assets/template13/bigis.png';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Box>
      <Center>
        <VStack>
          <Box
            width={100}
            height={70}
            border="5px solid black"
            borderRadius={10}
          >
            <Heading fontSize={38} pt={3} color="black">
              {value}
            </Heading>
          </Box>
       
          <Heading size="md" color="black">
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
      <Box position="absolute" left={550} top={520}>
        <MovingComponent
          type="fadeOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Pic1} w={300} />
        </MovingComponent>
      </Box>
      <Box position="absolute" top="200">
        <Image src={Text1} w={300} />
      </Box>
      <Box position="absolute" top="250">
        <MovingComponent
          type="zoomOut"
          duration="1000ms"
          delay="0s"
          direction="alternate-reverse"
          timing="ease"
          iteration="15"
          fillMode="none"
        >
          <Image src={Text2} w={300} />
        </MovingComponent>
      </Box>
      <HStack top={780} left={300} position="absolute">
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
