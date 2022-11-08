import React from "react";
import Home from "../Component/Home/Home";
import { Routes, Route } from "react-router-dom";
import InternShips from "../Pages/InternShips";

import JobsPage from "../Pages/JobsPage";
import SignIngPage from "../Pages/SignIngPage";
import LoginPage from "../Pages/LoginPage";
import CartPages from "../Pages/CartPages";
import ViewAndAplly from "../Pages/ViewAndAplly";
import ProfilePage from "../Pages/ProfilePage";
import ChangePassword from "../Pages/ChangePassword";
import CoursesPage from "../Pages/CoursesPage";
import NotFoundPage from "../Pages/NotFoundPage";
function AllRouter(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/internships" element={<InternShips />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/signin" element={<SignIngPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPages />} />
      <Route path="/viewandaplly" element={<ViewAndAplly />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AllRouter;
