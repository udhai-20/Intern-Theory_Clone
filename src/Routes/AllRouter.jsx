import React from "react";
import Home from "../Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import InternShips from "../Pages/InternShips/InternShips";
import JobsPage from "../Pages/JobsPage";
import SignIngPage from "../Pages/SignIngPage";
import LoginPage from "../Pages/LoginPage";
import CartPages from "../Pages/CartPages";
import ViewAndAplly from "../Pages/ViewAndAplly";
import ProfilePage from "../Pages/ProfilePage";
import ChangePassword from "../Pages/ChangePassword";
import Courses from "../Pages/Courses/Courses";
import NotFoundPage from "../Pages/NotFoundPage";
import { ChakraProvider } from "@chakra-ui/react";
import DashBoard from "../Component/Dashboard/DashBoard";
function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route
        path="/internships"
        element={
          <ChakraProvider>
            <InternShips />
          </ChakraProvider>
        }
      />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/signin" element={<SignIngPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPages />} />
      <Route path="/viewandaplly/:id" element={<ViewAndAplly />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AllRouter;
