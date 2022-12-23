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
  Toast,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import {
  SearchFailure,
  SearchRequest,
  SearchSuccess,
} from "../../Redux/AppReducer/action";

import { useSearchParams } from "react-router-dom";
import JobsResults from "./JobsResults";

function JobsPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  let FilterResult = useSelector((state) => state.AppReducer);
  // console.log("FilterResult:", FilterResult);
  const [citiypop, setcitiypopup] = useState(false);
  const [city, setCity] = useState(searchParams.getAll("citiys") || []);
  const [citiyselected, setselectedcitiy] = useState("");
  const [type, setType] = useState([]);
  const [typeselected, setselectedtype] = useState("");
  const [typepop, settypepopup] = useState(false);
  const [preferance, setpreferance] = useState([]);
  const [preferanceselected, setpreferanceselected] = useState("");
  const [preferancepop, setpreferancepop] = useState(false);
  const [search, setSearch] = useState("");

  const toast = useToast();

  // city avilable in our site get req
  const handleCatchCitiys = () => {
    settypepopup(false);
    setpreferancepop(false);
    setcitiypopup(!citiypop);
    axios
      .get(`https://intertheory.onrender.com/cities`)
      .then((res) => {
        setCity(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  // console.log("type:", type);
  // city getrequest
  const handleResultList = (Citys) => {
    let converlowercase = Citys.toLowerCase();
    // console.log("converlowercase:", converlowercase);
    setcitiypopup(!citiypop);
    dispatch(SearchRequest());
    axios
      .get(
        `https://intertheory.onrender.com/interships?location=${converlowercase}`
      )
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });

    setselectedcitiy(Citys);
  };
  //type avilabe
  const handleCatchTypes = () => {
    setcitiypopup(false);
    setpreferancepop(false);

    settypepopup(!typepop);
    axios
      .get(`https://intertheory.onrender.com/Types`)
      .then((res) => {
        setType(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  //type get request

  const handleTypeResultList = (type) => {
    let converlowercase = type.toLowerCase();
    settypepopup(!typepop);

    dispatch(SearchRequest());
    axios
      .get(`https://intertheory.onrender.com/interships?q=${converlowercase}`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });

    setselectedtype(type);
  };

  //preferance avilabe
  const handleCatchPreferance = () => {
    // console.log("preferance");
    setcitiypopup(false);
    settypepopup(false);
    setpreferancepop(!preferancepop);

    axios
      .get(`https://intertheory.onrender.com/preferance`)
      .then((res) => {
        setpreferance(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  //type get request
  const handlePreferanceResultList = (preferance) => {
    let converlowercase = preferance.toLowerCase();
    // console.log("converlowercase:", citiyselected, converlowercase);
    setpreferancepop(!preferancepop);
    dispatch(SearchRequest());
    if (citiyselected) {
      axios
        .get(
          `https://intertheory.onrender.com/interships?location=${citiyselected.toLowerCase()}&type=${converlowercase}`
        )
        .then((res) => dispatch(SearchSuccess(res.data)))
        .catch((err) => {
          console.log("err:", err);
          dispatch(SearchFailure());
        });
    } else if (citiyselected && typeselected) {
      axios
        .get(
          `https://intertheory.onrender.com/interships?location=${citiyselected.toLowerCase()}&type=${converlowercase}&Timing=${typeselected.toLowerCase()}`
        )
        .then((res) => dispatch(SearchSuccess(res.data)))
        .catch((err) => {
          console.log("err:", err);
          dispatch(SearchFailure());
        });
    } else {
      axios
        .get(`https://intertheory.onrender.com/interships?q=${converlowercase}`)
        .then((res) => dispatch(SearchSuccess(res.data)))
        .catch((err) => {
          console.log("err:", err);
          dispatch(SearchFailure());
        });
    }

    setpreferanceselected(preferance);
  };

  const handleClear = () => {
    setselectedtype("");
    setpreferanceselected("");
    setselectedcitiy("");
  };

  //search Result

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchResultList = () => {
    setpreferanceselected("");
    setselectedtype("");
    setselectedcitiy("");

    if (search) {
      let converlowercase = search.toLowerCase();
      dispatch(SearchRequest());
      axios
        .get(`https://intertheory.onrender.com/interships?q=${converlowercase}`)
        .then((res) => dispatch(SearchSuccess(res.data)))
        .catch((err) => {
          console.log("err:", err);
          dispatch(SearchFailure());
        });
    } else {
      toast({
        position: "top",
        title: "please fill the input field",
        description: "Search Agin",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  // console.log("citiyselected:", citiyselected);
  useEffect(() => {}, []);

  const getData = () => {
    setpreferanceselected("");
    setselectedtype("");
    setselectedcitiy("");
    // console.log("search:", search);

    dispatch(SearchRequest());
    axios
      .get(`https://intertheory.onrender.com/interships?q=mumbai`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        width={"80%"}
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        gap="4"
        bg="rgb(255, 255, 255)"
        boxShadow="xs"
        marginTop={"15px"}
        p="30px"
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
            value={citiyselected}
            readOnly
          />
          {citiypop && (
            <List
              top="40px"
              pos={"absolute"}
              bg={{ lg: "rgb(255, 255, 255)", base: "gray.600" }}
              color={{ base: "white", lg: "black" }}
              zIndex={{ base: 1, lg: -1 }}
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
                city.map((el, i) => {
                  return (
                    <ListItem
                      key={i + 1}
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
        {/* //types input */}
        <Box
          width={"100%"}
          display="flex"
          flexDirection="column"
          position={"relative"}
        >
          <Input
            variant="flushed"
            onClick={handleCatchTypes}
            value={typeselected}
            placeholder="Types"
            readOnly
          />
          {typepop && (
            <List
              top="40px"
              pos={"absolute"}
              bg={{ lg: "rgb(255, 255, 255)", base: "gray.600" }}
              color={{ base: "white", lg: "black" }}
              zIndex={{ base: 1, lg: -1 }}
              boxShadow="base"
              p="3"
              width={"100%"}
              rounded="md"
              fontSize={"sm"}
              height="120px"
              overflow={"hidden"}
              scrollBehavior="smooth"
              overflowY="auto"
              textAlign="left"
              spacing={3}
              cursor="pointer"
            >
              {type.length > 0 &&
                type.map((el, i) => {
                  return (
                    <ListItem
                      key={i + 1}
                      _hover={{
                        background: "gray.50",
                        width: "auto",
                        color: "teal.500",
                      }}
                      onClick={() => handleTypeResultList(el)}
                    >
                      {el}
                    </ListItem>
                  );
                })}
            </List>
          )}
        </Box>

        {/* //preferance input */}
        <Box
          width={"100%"}
          display="flex"
          flexDirection="column"
          position={"relative"}
        >
          <Input
            variant="flushed"
            onClick={handleCatchPreferance}
            value={preferanceselected}
            placeholder="Preferance"
            readOnly
          />
          {preferancepop && (
            <List
              top="40px"
              pos={"absolute"}
              bg={{ lg: "rgb(255, 255, 255)", base: "gray.600" }}
              color={{ base: "white", lg: "black" }}
              zIndex={{ base: 1, lg: -1 }}
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
              {preferance.length > 0 &&
                preferance.map((el, i) => {
                  return (
                    <ListItem
                      key={i + 1}
                      _hover={{
                        background: "gray.50",
                        width: "auto",
                        color: "teal.500",
                      }}
                      onClick={() => handlePreferanceResultList(el)}
                    >
                      {el}
                    </ListItem>
                  );
                })}
            </List>
          )}
        </Box>

        <Text>OR</Text>
        <Input
          variant="flushed"
          placeholder="Search by preferance"
          value={search}
          onChange={handleSearch}
          onClick={handleClear}
        />
        <Box>
          <Button colorScheme="blue" size="sm" onClick={handleSearchResultList}>
            SEARCH
          </Button>
        </Box>
      </Box>
      <Box marginTop={"30px"} margin="auto">
        {FilterResult.isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            duration="10000"
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
        <JobsResults />
      </Box>
    </Box>
    // jdjssd
  );
}

export default JobsPage;
