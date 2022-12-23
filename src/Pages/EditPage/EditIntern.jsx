import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./AddProduct.css";
import {
  getCourseFailure,
  getCourseRequest,
  getCourseSuccess,
  SearchFailure,
  SearchRequest,
  SearchSuccess,
} from "../../Redux/AppReducer/action";
import { useNavigate } from "react-router-dom";

export default function EditIntern() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    image: "",
    courseName: "",
    title: "",
    remain: "",
    Timing: "",
    type: "",
    quantity: "",
    duration: "",
    startDate: "",
    deadline: "",
    stippend: "",
    idesc: "",
    skills: "",
    companyDesc: "",
    location: "",
    location_1: "",
  });
  // console.log("id:", id);
  //   let data = useSelector((state) => state.AppReducer);
  const {
    image,
    courseName,
    title,
    Timing,
    type,
    quantity,
    duration,
    startDate,
    deadline,
    stippend,
    idesc,
    skills,
    companyDesc,
    remain,
    location,
    location_1,
  } = product;
  const editIntern = () => {
    axios
      .get(`https://intertheory.onrender.com/interships/${id}`)
      .then((res) =>
        setProduct({
          image: res.data.image,
          courseName: res.data.courseName,
          title: res.data.title,
          Timing: res.data.Timing,
          type: res.data.type,
          remain: res.data.remain,
          quantity: res.data.quantity,
          duration: res.data.duration,
          startDate: res.data.startDate,
          deadline: res.data.deadline,
          stippend: res.data.stipend,
          idesc: res.data.idesc,
          skills: res.data.skills,
          companyDesc: res.data.companyDesc,
          location: res.data.location,
          location_1: res.data.location_1,
        })
      )
      .catch((err) => {
        console.log("err:", err);
      });
  };
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
  const handleCatchinput = (e) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };
  // console.log("courseName:", courseName);
  const handleEdit = () => {
    // console.log("id:", id);
    // console.log("product:", product);
    axios
      .patch(`https://intertheory.onrender.com/interships/${id}`, product)
      .then((res) => {
        getIntern();
      })

      .catch((err) => {
        console.log("err", err);
      });

    navigate("/Admin/inerndatas");
  };

  useEffect(() => {
    editIntern();
  }, []);
  //   console.log("data_id", data.searchData);
  return (
    <>
      <Text
        fontSize="xl"
        textAlign={"center"}
        color="tomato"
        marginTop={"10px"}
      >
        Update Internship Details
      </Text>
      <Box
        w="80%"
        border="1px"
        margin={"auto"}
        alignItems="center"
        display="flex"
        justifyContent={"space-between"}
        marginBottom={"100px"}
        marginTop={"50px"}
        py="30px"
        shadow={"md"}
        borderRadius={"15px"}
      >
        <Box
          w={"40%"}
          margin="auto"
          alignItems="center"
          display={"flex"}
          flexDirection="column"
          gap={"10px"}
          justifyItems={"center"}
          height="500px"
        >
          <Input
            onChange={handleCatchinput}
            defaultValue={image}
            name="image"
            type={"url"}
            placeholder="Enter Url"
          />
          <Input
            defaultValue={courseName}
            type={"text"}
            name="courseName"
            onChange={handleCatchinput}
            placeholder="Enter Course Name"
          />
          <Input
            defaultValue={title}
            type={"text"}
            name="title"
            onChange={handleCatchinput}
            placeholder="Enter Provider Name"
          />
          <Select
            defaultValue={Timing}
            name="Timing"
            placeholder="internship Timing"
            onChange={handleCatchinput}
          >
            <option defaultValue="Full Time Internship">Full Time</option>
            <option defaultValue="Work From Home">work from home</option>
          </Select>
          <Input
            defaultValue={type}
            name="type"
            type={"text"}
            onChange={handleCatchinput}
            placeholder="Enter Internship type"
          />
          <Input
            defaultValue={quantity}
            type={"number"}
            name="quantity"
            onChange={handleCatchinput}
            placeholder="Enter Intern Count"
          />
          <Input
            defaultValue={duration}
            name="duration"
            type={"text"}
            placeholder="Enter duration"
            onChange={handleCatchinput}
          />
          <Input
            type={"date"}
            defaultValue={startDate}
            name="startDate"
            placeholder="Enter Start Date"
            onChange={handleCatchinput}
          />
        </Box>
        <Box
          w={"40%"}
          margin="auto"
          display={"flex"}
          flexDirection="column"
          gap={"10px"}
          alignItems="center"
          justifyItems={"center"}
          height="500px"
        >
          <Input
            defaultValue={deadline}
            name="startDate"
            type={"date"}
            placeholder="Enter End Date"
            onChange={handleCatchinput}
          />
          <Input
            defaultValue={stippend}
            name="stippend"
            type={"text"}
            placeholder="Enter Stippend"
            onChange={handleCatchinput}
          />

          <Input
            defaultValue={idesc}
            name="idesc"
            type={"text"}
            onChange={handleCatchinput}
            placeholder="Enter internship description"
          />

          <Input
            defaultValue={skills}
            name="skills"
            type={"text"}
            placeholder="Enter Prefered Skills"
            onChange={handleCatchinput}
          />
          <Input
            defaultValue={companyDesc}
            name="companyDesc"
            type={"text"}
            placeholder="Enter Company description"
            onChange={handleCatchinput}
          />
          <Input
            defaultValue={remain}
            name="remain"
            onChange={handleCatchinput}
            type={"text"}
            placeholder="Enter Remaining Weeks"
          />
          <Input
            defaultValue={location}
            name="location"
            type={"text"}
            placeholder="Enter Location"
            onChange={handleCatchinput}
          />
          <Input
            defaultValue={location_1}
            name="location_1"
            type={"text"}
            placeholder="Enter Address"
            onChange={handleCatchinput}
          />
          <Button
            onClick={handleEdit}
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          >
            Update
          </Button>
        </Box>
      </Box>
    </>
  );
}
