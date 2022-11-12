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

const initial = {
  image: "",
  courseName: "",
  title: "",
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
  image: "",
};
export default function EditIntern() {
  const { id } = useParams();
  const [image, setimage] = useState("");
  const [courseName, setcourseName] = useState("");
  const [title, setProviderName] = useState("");
  const [Timing, setAvailability] = useState("Full Time Internship");
  const [type, settype] = useState("");
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [stippend, setStippend] = useState("");
  const [idesc, setIdesc] = useState("");
  const [skills, setSkills] = useState("");
  const [companyDesc, setCompanyDesc] = useState("");
  const [location, setLocation] = useState("");
  const [remining, setRemining] = useState("");
  const [location_1, setaddress] = useState("");
  //   const [product, setProduct] = useState(initial);

  console.log("id:", id);
  const dispatch = useDispatch();
  let data = useSelector((state) => state.AppReducer);
  //   const {
  //     image,
  //     courseName,
  //     title,
  //     Timing,
  //     type,
  //     quantity,
  //     duration,
  //     startDate,
  //     deadline,
  //     stippend,
  //     idesc,
  //     skills,
  //     companyDesc,
  //     remining,
  //     location_1,
  //   } = product;
  const editIntern = () => {
    dispatch(SearchRequest());
    axios
      .get(`http://localhost:8080/interships/${id}`)
      .then((res) => dispatch(SearchSuccess(res.data)))
      .catch((err) => {
        console.log("err:", err);
        dispatch(SearchFailure());
      });
  };
  console.log("courseName:", courseName);
  const handleEdit = () => {
    console.log("edit");
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
      stippend &&
      idesc &&
      skills &&
      companyDesc &&
      location &&
      remining &&
      location_1
    ) {
      console.log("edit-1");
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
        stippend,
        idesc,
        skills,
        companyDesc,
        location,
        remining,
        location_1,
      };
      console.log("data:", data);
      axios
        .patch("http://localhost:8080/interships", data)
        .then((res) => {
          console.log(res.data);
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
        })
        .catch((er) => {
          console.log(er);
        });
    }
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
            value={data.searchData.image}
            type={"url"}
            placeholder="Enter Url"
          />
          <Input
            value={data.searchData.courseName}
            type={"text"}
            onChange={(e) => setcourseName(e.target.value)}
            placeholder="Enter Course Name"
          />
          <Input
            Value={data.searchData.title}
            type={"text"}
            onChange={(e) => setProviderName(e.target.value)}
            placeholder="Enter Provider Name"
          />
          <Select
            value={data.searchData.Timing}
            placeholder="internship Timing"
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="Full Time Internship">Full Time</option>
            <option value="Work From Home">work from home</option>
          </Select>
          <Input
            value={data.searchData.type}
            type={"text"}
            onChange={(e) => settype(e.target.value)}
            placeholder="Enter Internship type"
          />
          <Input
            value={data.searchData.quantity}
            type={"number"}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Intern Count"
          />
          <Input
            value={data.searchData.duration}
            type={"text"}
            placeholder="Enter duration"
            onChange={(e) => setDuration(e.target.value)}
          />
          <Input
            type={"date"}
            value={data.searchData.startDate}
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
            value={data.searchData.deadline}
            type={"date"}
            placeholder="Enter End Date"
            onChange={(e) => setDeadline(e.target.value)}
          />
          <Input
            value={data.searchData.stipend}
            type={"text"}
            placeholder="Enter Stippend"
            onChange={(e) => setStippend(e.target.value)}
          />

          <Input
            value={data.searchData.idesc}
            type={"text"}
            onChange={(e) => setIdesc(e.target.value)}
            placeholder="Enter internship description"
          />

          <Input
            value={data.searchData.skills}
            type={"text"}
            placeholder="Enter Prefered Skills"
            onChange={(e) => setSkills(e.target.value)}
          />
          <Input
            value={data.searchData.companyDesc}
            type={"text"}
            placeholder="Enter Company description"
            onChange={(e) => setCompanyDesc(e.target.value)}
          />
          <Input
            value={data.searchData.remain}
            onChange={(e) => setRemining(e.target.value)}
            type={"text"}
            placeholder="Enter Remaining Weeks"
          />
          <Input
            value={data.searchData.location}
            type={"text"}
            placeholder="Enter Location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <Input
            value={data.searchData.location_1}
            type={"text"}
            placeholder="Enter Address"
            onChange={(e) => setaddress(e.target.value)}
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
