import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchFailure,
  SearchRequest,
  SearchSuccess,
} from "../../Redux/AppReducer/action";
import axios from "axios";
import { Box, GridItem, Text } from "@chakra-ui/react";
function AvilableInter(props) {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.AppReducer.searchData);
  console.log("data-top", data);
  const getIntern = () => {
    axios
      .get(`http://localhost:8080/interships`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });
  };
  useEffect(() => {
    getIntern();
  }, [data.length]);
  console.log("data-bottom", data);
  return (
    <Box>
      <Text textAlign={"center"} color="tomato">
        All Internship
      </Text>
      <GridItem></GridItem>
    </Box>
  );
}

export default AvilableInter;
