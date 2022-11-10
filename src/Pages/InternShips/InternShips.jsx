import {
  Box,
  Button,
  Flex,
  Input,
  List,
  ListItem,
  Spacer,
  Text,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import {
  SearchFailure,
  SearchRequest,
  SearchSuccess,
} from "../../Redux/AppReducer/action";
import IntenShipResults from "./IntenShipResults";

function InternShips(props) {
  const dispatch = useDispatch();
  let FilterResult = useSelector((state) => state.AppReducer);
  // console.log("FilterResult:", FilterResult);
  const [pop, setPopup] = useState(false);
  const [city, setCity] = useState([]);
  console.log("cliocked");
  // city avilable in our site get req
  const handleCatchCitiys = () => {
    setPopup(!pop);
    axios
      .get(`http://localhost:8080/cities`)
      .then((res) => setCity(res.data))
      .catch((err) => {
        console.log("err", err);
      });
  };

  // city getrequest
  const handleResultList = (Citys) => {
    console.log("Citys:", Citys);
    setPopup(!pop);
    dispatch(SearchRequest());
    axios
      .get(`http://localhost:8080/intership/${city}`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });
  };
  // console.log("city:", city);
  return (
    <Box>
      <Box
        display={"flex"}
        width={"80%"}
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        gap="4"
        // bg=" rgb(255, 255, 255)"
        bg="rgb(255, 255, 255)"
        boxShadow="xs"
        p="30px"
        position={"sticky"}
        top="30px"
        fontFamily={`font-family: "Roboto", "Helvetica", "Arial", sans-serif`}
      >
        <Box
          width={"100%"}
          display="flex"
          flexDirection="column"
          justifyContent={"space-between"}
          position={"relative"}
        >
          <Input
            variant="flushed"
            placeholder="Citys"
            onClick={handleCatchCitiys}
          />
          {pop && (
            <List
              top="40px"
              pos={"absolute"}
              bg="rgb(255, 255, 255)"
              boxShadow="base"
              p="3"
              width={"100%"}
              rounded="md"
              fontSize={"sm"}
              height="200px"
              overflow={"hidden"}
              scrollBehavior="smooth"
              overflowY="auto"
              textAlign="left"
              spacing={3}
              cursor="pointer"
            >
              {city.length > 0 &&
                city.map((el) => {
                  return (
                    <ListItem
                      _hover={{
                        background: "gray.50",
                        width: "auto",
                        color: "teal.500",
                      }}
                      onClick={() => handleResultList(el)}
                    >
                      {el}
                    </ListItem>
                  );
                })}
            </List>
          )}
        </Box>
        <Box width={"100%"} display="flex" flexDirection="column">
          <Input variant="flushed" placeholder="Types" />
        </Box>
        <Input variant="flushed" placeholder="Preferances" />
        <Text>OR</Text>
        <Input variant="flushed" placeholder="Search by preferance" />
        <Box>
          <Button colorScheme="blue" size="sm">
            SEARCH
          </Button>
        </Box>
      </Box>
      <Box marginTop={"30px"}>
        {FilterResult.isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        <Text
          textAlign={"center"}
          fontFamily={`font-family: "Roboto", "Helvetica", "Arial", sans-serif`}
          fontSize={"xl"}
          fontWeight="600"
        >
          All Internships
        </Text>
        <IntenShipResults />
      </Box>
    </Box>
    // jdjssd
  );
}

export default InternShips;
