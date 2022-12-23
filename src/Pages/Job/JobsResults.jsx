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
import NodataImage from "../../Images/NoData.png";
import { extendTheme } from "@chakra-ui/react";
import {
  AiOutlineShareAlt,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    heading: `'Heading Font Name', Roboto", "Helvetica", "Arial", sans-serif`,
    body: `'Body Font Name', sans-serif`,
  },
});
function JobsResults() {
  const [icons, showIcons] = useState(false);
  let FilterResult = useSelector((state) => state.AppReducer);
  // console.log("FilterResult:", FilterResult.isLoading);
  const handleShow = () => {
    showIcons(!icons);
  };
  return (
    <ChakraProvider theme={theme}>
      <Box
        width={{ base: "95%", lg: "80%" }}
        display="flex"
        gap="4"
        margin={"auto"}
        marginBottom={"10px"}
      >
        <Box
          display={{ lg: "block", base: "none" }}
          width={"25%"}
          shadow="xs"
          _hover={{ background: "gray.50" }}
        >
          <Image
            width={"300px"}
            height={"300px"}
            src={interImage}
            alt="left_image"
          />
        </Box>

        <Box
          width={{ base: "90%", lg: "80%" }}
          bg="rgb(255, 255, 255)"
          shadow="md"
          flexDirection={"row"}
          p={"10px"}
          margin="0 auto"
          display="flex"
          // alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} width={{ lg: "50%", base: "85%" }}>
            <Box
              width={{ lg: "33%", base: "28%" }}
              display={{ lg: "block", md: "block", base: "none" }}
            >
              <Image
                src="https://assets.interntheory.com/creative/logo.png"
                width={"100%"}
              />
            </Box>
            <Box
              display={"flex"}
              width={{ lg: "60%", base: "80%" }}
              flexDirection="column"
              marginLeft="20px"
            >
              <Text fontSize={"lg"} width="100%" color="#3C4858">
                Develop Your Skillset
              </Text>
              <Text fontSize={"15px"} width="100%" color="#3C4858">
                Online Skill Development Programs
              </Text>
              <Text fontSize={"15px"} width="100%" color="rgba(0, 0, 0, 0.54)">
                Taught by Industry Experts Internship
              </Text>
              <Text fontSize={"15px"} width="100%" color="rgba(0, 0, 0, 0.54)">
                Certified Courses
              </Text>
              <Text fontSize={"15px"} width="100%" color="rgba(0, 0, 0, 0.54)">
                Guaranteed Internship Opportunities
              </Text>
              <Text
                fontSize={"15px"}
                width="100%"
                fontWeight="bold"
                color="rgba(0, 0, 0, 0.54)"
              >
                TaLearn Industry-Demanded Skills
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection="column"
            gap={"6"}
            alignItems="flex-end"
            textAlign="right"
            width={{ base: "40%", lg: "auto", md: "auto" }}
          >
            <Text color={"#3C4858"}> 2-4 Weeks</Text>
            <Box
              fontSize={"3xl"}
              display={{ lg: "block", md: "block", base: "none" }}
              color="rgba(0, 0, 0, 0.54)"
            >
              <Center />
              <AiOutlineShareAlt onClick={handleShow} />
            </Box>
            <Box
              display={{ lg: "none", md: "none", base: "flex" }}
              width={"100px"}
              justifyContent={"flex-end"}
            >
              <Image
                src="https://assets.interntheory.com/creative/logo.png"
                width={"100%"}
              />
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
          {/* </>
              );
            })} */}
        </Box>
      </Box>
      {/* {!FilterResult.isLoading && FilterResult.searchData.length == 0 && (
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          width={"60%"}
          margin={"auto"}
          textAlign={"center"}
        >
          <Text fontSize={"lg"} color="red.500">
            No Data Found
          </Text>
          <Image src={NodataImage} alt="No Data" width={"30%"} />
        </Box>
      )} */}

      {FilterResult.searchData.length > 0 &&
        FilterResult.searchData.map((el, i) => {
          return (
            <Box
              key={i + 1}
              width={{ base: "95%", lg: "80%" }}
              display="flex"
              // justifyContent="space-between"
              gap="4"
              margin={"auto"}
              marginBottom={"10px"}
            >
              <Box width={"25%"} display={{ lg: "block", base: "none" }}>
                {/* <Image src={interImage} alt="left_image" /> */}
              </Box>

              <Box
                width={{ base: "90%", lg: "80%" }}
                bg="rgb(255, 255, 255)"
                shadow="md"
                flexDirection={"row"}
                p={"10px"}
                display="flex"
                margin={"auto"}
                // alignItems={"center"}
                justifyContent={"space-between"}
              >
                {/* {FilterResult.length > 0 &&
                FilterResult.map((el) => {
                  return ( */}
                {/* <> */}
                <Box display={"flex"} width={{ lg: "50%", base: "60%" }}>
                  <Box
                    width={{ lg: "33%", base: "28%" }}
                    display={{ lg: "block", md: "block", base: "none" }}
                  >
                    <Image src={el.image} width={"100%"} />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    marginLeft="20px"
                    width={{ lg: "60%", base: "80%" }}
                  >
                    <Text fontSize={"lg"} color="#3C4858">
                      {el.courseName}
                    </Text>
                    <Text fontSize={"15px"} color="#3C4858">
                      {el.title}
                    </Text>
                    <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                      {el.type}
                    </Text>
                    <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                      {el.Timing}
                    </Text>
                    <Text fontSize={"15px"} color="rgba(0, 0, 0, 0.54)">
                      {el.location}
                    </Text>
                    <Text
                      fontSize={"15px"}
                      fontWeight="bold"
                      color="rgba(0, 0, 0, 0.54)"
                    >
                      {el.stipend}
                    </Text>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection="column"
                  alignItems="flex-end"
                  textAlign="right"
                  gap={"6"}
                  width={{ base: "40%", lg: "auto", md: "auto" }}
                >
                  <Text color={"#3C4858"}> {el.remain}</Text>
                  <Box
                    fontSize={"3xl"}
                    color="rgba(0, 0, 0, 0.54)"
                    display={{ lg: "block", md: "block", base: "none" }}
                  >
                    <Center />
                    <AiOutlineShareAlt />
                  </Box>
                  <Box
                    display={{ lg: "none", md: "none", base: "flex" }}
                    width={"100px"}
                    // border={"1px"}
                    justifyContent={"flex-end"}
                  >
                    <Image src={el.image} width="100%" />
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
                  <Link to={`/viewandaplly/${el.id}`}>
                    <Text fontSize={"15px"} color={"#087CDD"} fontWeight="bold">
                      VIEW AND APPLY
                    </Text>
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
    </ChakraProvider>
  );
}

export default JobsResults;
