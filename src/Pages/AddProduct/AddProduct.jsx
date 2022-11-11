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
import "./AddProduct.css";
export default function Add() {
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
  const [address, setaddress] = useState("");
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
      stippend &&
      idesc &&
      skills &&
      companyDesc &&
      location &&
      remining &&
      address
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
        stippend,
        idesc,
        skills,
        companyDesc,
        location,
        remining,
        address,
      };
      console.log("data:", data);
      axios
        .post("http://localhost:8080/interships", data)
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
        })
        .catch((er) => {
          console.log(er);
        });
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
            value={stippend}
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
            value={remining}
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
            value={address}
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
// <div>
//   <h3 className="addproduct_heading">Add IntenShip Details</h3>
//   <div className="addproduct_form">
//     {/* //leftside */}
//     <div className="addproduct_form_leftside">
//       <div>
//         image:{" "}
//         <input
//           value={image}
//           onChange={(e) => setimage(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         internship name:{" "}
//         <input
//           value={courseName}
//           onChange={(e) => setcourseName(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         provider name:{" "}
//         <input
//           value={title}
//           onChange={(e) => setProviderName(e.target.value)}
//           type="text"
//         />{" "}
//       </div>
//       <div>
//         internship Timing:
//         <select
//           value={Timing}
//           onChange={(e) => setAvailability(e.target.value)}
//         >
//           <option value="Full Time Internship">Full Time</option>
//           <option value="Work From Home">work from home</option>
//         </select>
//       </div>{" "}
//       <div>
//         internship type:
//         <input
//           value={type}
//           onChange={(e) => settype(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         quantity:{" "}
//         <input
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         Duration:{" "}
//         <input
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         start data:{" "}
//         <input
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           type="date"
//         />{" "}
//       </div>
//     </div>
//     {/* //rightside */}
//     <div className="addproduct_form_rightside">
//       <div>
//         deadline:{" "}
//         <input
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           type="date"
//         />{" "}
//       </div>
//       <div>
//         stipend:{" "}
//         <input
//           value={stippend}
//           onChange={(e) => setStippend(e.target.value)}
//           type="text"
//         />{" "}
//       </div>
//       <div>
//         internship description :{" "}
//         <input
//           value={idesc}
//           onChange={(e) => setIdesc(e.target.value)}
//           type="text"
//         />{" "}
//       </div>
//       <div>
//         preferd skills:{" "}
//         <input
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           type="text"
//         />
//       </div>
//       <div>
//         company desc:{" "}
//         <input
//           type="text"
//           value={companyDesc}
//           onChange={(e) => setCompanyDesc(e.target.value)}
//         />
//       </div>
//       <div>
//         location:{" "}
//         <input
//           type="text"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={handleAdd}>Add</button>
//       </div>
//     </div>
//   </div>
// </div>
