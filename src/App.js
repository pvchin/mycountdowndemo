import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import {
  Button,
  Box,
  Grid,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import '@fontsource/dancing-script';
import '@fontsource/old-standard-tt';
import '@fontsource/orbitron/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/400.css';

import Appbanner from './components/Appbanner';
import ShowCounter1 from './components/ShowCounterTemplate1';
import ShowCounter2 from './components/ShowCounterTemplate2.js';
import ShowCounter3 from './components/ShowCounterTemplate3';
import ShowCounter4 from './components/ShowCounterTemplate4';
import ShowCounter5 from './components/ShowCounterTemplate5';
import ShowCounter6 from './components/ShowCounterTemplate6';
import ShowCounter7 from './components/ShowCounterTemplate7';
import ShowCounter8 from './components/ShowCounterTemplate8';
import ShowCounter9 from './components/ShowCounterTemplate9';
import ShowCounter10 from './components/ShowCounterTemplate10';
import ShowCounter11 from './components/ShowCounterTemplate11';
import ShowCounter12 from './components/ShowCounterTemplate12';
import ShowCounter13 from './components/ShowCounterTemplate13';
import ShowCounter14 from './components/ShowCounterTemplate14';
import ShowCounter15 from './components/ShowCounterTemplate15';
import TimeUpTemplate from './components/TImeUpTemplate';

const zeroPad = (num, places) => String(num).padStart(places, '0');

const calculateTimeLeft = targetDateString => {
  const difference = +new Date(targetDateString) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)) - 1,
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [selectedoption, setSelectedOption] = useState('1');
  const tDate = dayjs().add(18, 'day').format('YYYY-MM-DD');
  const [deadlinedate, setDeadlineDate] = useState(tDate);
  const {
    isOpen: isSettingOpen,
    onOpen: onSettingOpen,
    onClose: onSettingClose,
  } = useDisclosure();
  console.log('Date', dayjs().add(1, 'day').format('YYYY-MM-DD'));
  console.log('tdate', typeof tDate, tDate);
  console.log('deadline', deadlinedate);

  const getTimeLeft = tDate => {
    const targetDate = dayjs(tDate).$d;
    const targetDateString = `${targetDate.getFullYear(targetDate)}-${
      targetDate.getMonth(targetDate) + 1
    }-${zeroPad(targetDate.getDate(targetDate), 2)}T23:59:00`;
    setTimeLeft(calculateTimeLeft(targetDateString));
  };

  const handleOpenSetting = () => {
    onSettingOpen();
  };

  const handleSaveSetting = e => {
    setDeadlineDate(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getTimeLeft(deadlinedate);
    });
  });

  return (
    <>
      <Appbanner
        selectedoption={selectedoption}
        setSelectedOption={setSelectedOption}
        deadlinedate={deadlinedate}
        setDeadlineDate={setDeadlineDate}
        handleOpenSetting={handleOpenSetting}
      />
      <Box textAlign="center" fontSize="xl">
        <Grid p={5}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <VStack spacing={8} p={5}>
            <Box>
              {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
                (() => {
                  switch (selectedoption) {
                    case '1':
                      return (
                        <ShowCounter1
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );

                    case '2':
                      return (
                        <ShowCounter2
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );

                    case '3':
                      return (
                        <ShowCounter3
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '4':
                      return (
                        <ShowCounter4
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '5':
                      return (
                        <ShowCounter5
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '6':
                      return (
                        <ShowCounter6
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '7':
                      return (
                        <ShowCounter7
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '8':
                      return (
                        <ShowCounter8
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '9':
                      return (
                        <ShowCounter9
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '10':
                      return (
                        <ShowCounter10
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '11':
                      return (
                        <ShowCounter11
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '12':
                      return (
                        <ShowCounter12
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '13':
                      return (
                        <ShowCounter13
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '14':
                      return (
                        <ShowCounter14
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    case '15':
                      return (
                        <ShowCounter15
                          days={timeLeft.days}
                          hours={timeLeft.hours}
                          minutes={timeLeft.minutes}
                          seconds={timeLeft.seconds}
                        />
                      );
                    default:
                      return null;
                  }
                })()
              ) : (
                <TimeUpTemplate deadlinedate={deadlinedate} />

                //<p>Time is up 🔥</p>
              )}
            </Box>
          </VStack>
        </Grid>
        <Modal isOpen={isSettingOpen} onClose={onSettingClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Deadline Date Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                placeholder="Select Deadline Date"
                size="md"
                type="date"
                defaultValue={deadlinedate}
                value={deadlinedate}
                onChange={handleSaveSetting}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onSettingClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
}

export default App;
