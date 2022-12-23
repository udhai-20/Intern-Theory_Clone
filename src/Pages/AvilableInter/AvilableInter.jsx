import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchFailure,
  SearchRequest,
  SearchSuccess,
  deletedetailsRequest,
  deletedetailsSuccess,
  deletedetailsFailure,
} from "../../Redux/AppReducer/action";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Box, Button, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AvilableInter(props) {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.AppReducer.searchData);
  // console.log("data-top", data);
  const getIntern = () => {
    dispatch(SearchRequest());
    axios
      .get(`https://intertheory.onrender.com/interships`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        // console.log("err:", err);
        dispatch(SearchFailure());
      });
  };

  // console.log(" data.length:", data.length);
  const handleDelete = (id) => {
    dispatch(deletedetailsRequest());
    axios
      .delete(`https://intertheory.onrender.com/interships/${id}`)
      .then((res) => {
        // console.log("res:", res.data);
        dispatch(deletedetailsSuccess());
        getIntern();
      })
      .catch((err) => {
        dispatch(deletedetailsFailure());
        console.log("err:", err);
      });
  };
  // console.log(" data.length:", data.length);
  useEffect(() => {
    getIntern();
  }, []);
  // console.log("data-bottom", data);
  return (
    <Box>
      <Text
        textAlign={"center"}
        color="blue.200"
        marginTop={"20px"}
        fontWeight="600"
        textTransform="uppercase"
      >
        All Internship Details
      </Text>
      <Grid
        w="80%"
        margin={"auto"}
        marginTop={"30px"}
        marginBottom={"30px"}
        // borderRadius={"1rem"}
        // shadow="base"
        // templateColumns="repeat(5, 1fr)"
        gap={10}
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
        }}
      >
        {data.length > 0 &&
          data.map((el, i) => {
            return (
              <GridItem
                w="100%"
                shadow={"md"}
                padding=".4rem"
                borderRadius={"1rem"}
                key={i + 1}
                textAlign="center"
              >
                <Img src={el.image} w="100%" h={"200px"} />
                <Text fontSize={{ sm: "sm", md: "md" }}>{el.courseName}</Text>
                <Text fontSize={{ sm: "sm", md: "md" }}>{el.Timing}</Text>
                <Text fontSize={{ sm: "sm", md: "md" }}>{el.location}</Text>
                <Box
                  fontSize={"xl"}
                  display="flex"
                  color={"blue.400"}
                  justifyContent={"space-between"}
                >
                  <AiFillDelete onClick={() => handleDelete(el.id)} />
                  <Link to={`/admin/editintern/${el.id}`}>
                    <AiFillEdit />
                  </Link>
                </Box>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}

export default AvilableInter;
