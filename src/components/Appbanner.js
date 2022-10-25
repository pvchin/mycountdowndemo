import React from 'react';
import {
  Box,
  Flex,
  FormControl,
  Text,
  IconButton,
  Image,
  Heading,
  Select,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../assets/logo.png';

export default function Appbanner({
  selectedoption,
  setSelectedOption,
  deadlinedate,
  setDeadlineDate,
  handleOpenSetting,
}) {
  const { isOpen, onToggle } = useDisclosure();

  const handleIconClick = () => {
    handleOpenSetting();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('teal.500', 'gray.800')}
        color={useColorModeValue('gray.200', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontStyle={'oblique'}
            fontWeight={'bold'}
            color={useColorModeValue('black', 'white')}
          >
            <Image src={Logo} size="sm" maxH="50" />
          </Text>
          <Box mt="4">
            <Heading fontSize="18">Deadline Date: {deadlinedate} </Heading>
          </Box>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            {/* <DesktopNav /> */}
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <FormControl>
            <Select
              name="template"
              value={selectedoption}
              //width="50%"
              onChange={e => setSelectedOption(e.target.value)}
              borderColor="black.400"
              w={150}
              color="black"
              bgColor="white"
            >
              <option style={{ Color: 'inherit' }} value="1">
                Template 1
              </option>
              <option style={{ bgColor: 'teal' }} value="2">
                Template 2
              </option>
              <option style={{ bgColor: 'teal' }} value="3">
                Template 3
              </option>
              <option style={{ bgColor: 'teal' }} value="4">
                Template 4
              </option>
              <option style={{ bgColor: 'teal' }} value="5">
                Template 5
              </option>
              <option style={{ bgColor: 'teal' }} value="6">
                Template 6
              </option>
              <option style={{ bgColor: 'teal' }} value="7">
                Template 7
              </option>
              <option style={{ bgColor: 'teal' }} value="8">
                Template 8
              </option>
              <option style={{ bgColor: 'teal' }} value="9">
                Template 9
              </option>
              <option style={{ bgColor: 'teal' }} value="10">
                Template 10
              </option>
              <option style={{ bgColor: 'teal' }} value="11">
                Template 11
              </option>
              <option style={{ bgColor: 'teal' }} value="12">
                Template 12
              </option>
              <option style={{ bgColor: 'teal' }} value="13">
                Template 13
              </option>
              <option style={{ bgColor: 'teal' }} value="14">
                Template 14
              </option>
              <option style={{ bgColor: 'teal' }} value="15">
                Template 15
              </option>
            </Select>
          </FormControl>
          <IconButton
            variant="solid"
            colorScheme="white"
            aria-label="Search database"
            size="lg"
            icon={<HamburgerIcon color="black" />}
            onClick={handleIconClick}
          />
        </Stack>
      </Flex>
    </Box>
  );
}
