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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";
export default function Add() {
  const navigate = useNavigate();
  const [image, setimage] = useState("");
  const [courseName, setcourseName] = useState("");
  const [title, setProviderName] = useState("");
  const [Timing, setAvailability] = useState("");
  const [type, settype] = useState("");
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stipend, setStippend] = useState("");
  const [idesc, setIdesc] = useState("");
  const [skills, setSkills] = useState("");
  const [companyDesc, setCompanyDesc] = useState("");
  const [location, setLocation] = useState("");
  const [remain, setRemining] = useState("");
  const [location_1, setaddress] = useState("");
  const handleAdd = () => {
    if (
      image &&
      courseName &&
      title &&
      Timing &&
      type &&
      quantity &&
      duration &&
      startDate &&
      deadline &&
      stipend &&
      idesc &&
      skills &&
      companyDesc &&
      location &&
      remain &&
      location_1
    ) {
      const data = {
        image,
        courseName,
        title,
        Timing,
        type,
        quantity,
        duration,
        startDate,
        deadline,
        stipend,
        idesc,
        skills,
        companyDesc,
        location,
        remain,
        location_1,
      };
      console.log("data:", data);
      axios
        .post("https://intertheory.onrender.com/interships", data)
        .then((res) => {
          setimage("");
          setcourseName("");
          setProviderName("");
          setAvailability("");
          settype("");
          setQuantity("");
          setDuration("");
          setStartDate("");
          setDeadline("");
          setStippend("");
          setIdesc("");
          setSkills("");
          setCompanyDesc("");
          setLocation("");
          setRemining("");
          setaddress("");
          navigate("/Admin/inerndatas");
        })
        .catch((er) => {
          console.log(er);
        });
    } else {
      alert("Please Add The Product");
    }
  };
  return (
    <>
      <Text
        fontSize="xl"
        textAlign={"center"}
        color="tomato"
        marginTop={"10px"}
      >
        Add Internship Details
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
            onChange={(e) => setimage(e.target.value)}
            value={image}
            type={"url"}
            placeholder="Enter Url"
          />
          <Input
            value={courseName}
            type={"text"}
            onChange={(e) => setcourseName(e.target.value)}
            placeholder="Enter Course Name"
          />
          <Input
            value={title}
            type={"text"}
            onChange={(e) => setProviderName(e.target.value)}
            placeholder="Enter Provider Name"
          />
          <Select
            value={Timing}
            placeholder="internship Timing"
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="Full Time Internship">Full Time</option>
            <option value="Work From Home">work from home</option>
          </Select>
          <Input
            value={type}
            type={"text"}
            onChange={(e) => settype(e.target.value)}
            placeholder="Enter Internship type"
          />
          <Input
            value={quantity}
            type={"number"}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Intern Count"
          />
          <Input
            value={duration}
            type={"text"}
            placeholder="Enter duration"
            onChange={(e) => setDuration(e.target.value)}
          />
          <Input
            type={"date"}
            value={startDate}
            placeholder="Enter Start Date"
            onChange={(e) => setStartDate(e.target.value)}
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
            value={deadline}
            type={"date"}
            placeholder="Enter End Date"
            onChange={(e) => setDeadline(e.target.value)}
          />
          <Input
            value={stipend}
            type={"text"}
            placeholder="Enter Stippend"
            onChange={(e) => setStippend(e.target.value)}
          />

          <Input
            value={idesc}
            type={"text"}
            onChange={(e) => setIdesc(e.target.value)}
            placeholder="Enter internship description"
          />

          <Input
            value={skills}
            type={"text"}
            placeholder="Enter Prefered Skills"
            onChange={(e) => setSkills(e.target.value)}
          />
          <Input
            value={companyDesc}
            type={"text"}
            placeholder="Enter Company description"
            onChange={(e) => setCompanyDesc(e.target.value)}
          />
          <Input
            value={remain}
            onChange={(e) => setRemining(e.target.value)}
            type={"text"}
            placeholder="Enter Remaining Weeks"
          />
          <Input
            value={location}
            type={"text"}
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            value={location_1}
            type={"text"}
            placeholder="Enter Address"
            onChange={(e) => setaddress(e.target.value)}
          />
          <Button
            onClick={handleAdd}
            loadingText="Loading"
            colorScheme="teal"
            variant="outline"
            spinnerPlacement="start"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
}
