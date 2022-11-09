import {
  Box,
  Center,
  ChakraProvider,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import interImage from "../../Images/Internship_left_course_add_02.png";
import { extendTheme } from "@chakra-ui/react";
import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const theme = extendTheme({
  fonts: {
    heading: `'Heading Font Name', Roboto", "Helvetica", "Arial", sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
});

function IntenShipResults({ image }) {
  console.log("image:", image);
  const [icons, showIcons] = useState(false);
  let FilterResult = useSelector((state) => state.AppReducer);
  const handleShow = () => {
    showIcons(!icons);
  };
  return (
    <ChakraProvider theme={theme}>
      <Box
        width="80%"
        display="flex"
        justifyContent="space-between"
        gap="4"
        height={"auto"}
        margin={"auto"}
      >
        <Box width={"25%"} shadow="xs" _hover={{ background: "gray.50" }}>
          <Image src={interImage} alt="left_image" />
        </Box>
        <Box
          width={"80%"}
          bg="rgb(255, 255, 255)"
          shadow="md"
          p={"10px"}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} width={"50%"}>
            <Box width={"33%"}>
              <Image
                src="https://assets.interntheory.com/creative/logo.png"
                width={"90%"}
              />
            </Box>
            <Box display={"flex"} flexDirection="column" textAlign={"left"}>
              <Text fontSize={"lg"} color="#3C4858">
                Develop Your Skillset
              </Text>
              <Text fontSize={"15px"} color="#3C4858">
                Taught by Industry Experts Internship
              </Text>
              <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                Taught by Industry Experts Internship
              </Text>
              <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                Taught by Industry Experts Internship
              </Text>
              <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                Taught by Industry Experts Internship
              </Text>
              <Text
                fontSize={"15px"}
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.54)"
              >
                Taught by Industry Experts Internship
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection="column" gap={"6"}>
            <Text color={"#3C4858"}> 2-4 Weeks</Text>
            <Box fontSize={"3xl"} color="rgba(0, 0, 0, 0.54)">
              <Center />
              <AiOutlineShareAlt onClick={handleShow} />
            </Box>
            {icons && (
              <Box
                display={"flex"}
                justifyContent="space-between"
                fontSize={"3xl"}
                color={"blue.500"}
              >
                <AiFillFacebook />
                <AiFillInstagram />
                <AiFillTwitterSquare />
                <AiFillLinkedin />
                <AiOutlineWhatsApp />
              </Box>
            )}

            <Text fontSize={"15px"} color={"#087CDD"} fontWeight="bold">
              UpgradeSkills
            </Text>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default IntenShipResults;
// Taught by Industry Experts Internship

// Certified Courses

// Guaranteed Internship Opportunities

// Learn Industry-Demanded Skills
