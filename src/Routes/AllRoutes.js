import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { AllUser } from "../Pages/Admin/AllUser";
import { UserProfile } from "../Pages/UserProfile";
import { DetailBlog } from "../Pages/DetailBlog";
import { AllBlogs } from "../Pages/AllBlogs";
import { Write_Blog } from "../Pages/Write_Blog";
import { ContactUs } from "../Pages/ContactUs";
import { Profile } from "../Pages/Profile";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { CreateBlog } from "../Pages/Admin/CreateBlog";
import { PendingBlog } from "../Pages/Admin/PendingBlog";
import { UserHomePage } from "../Pages/Home/UserHomePage";
import { MyBlog } from "../Pages/MyBlog";
import Approve from "../Pages/Approve";
// import { ExtraPage } from "../Pages/Admin/ExtraPage";

export const AllRoutes = () => {
  return (
    <Routes>

    //asmin rooutes
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/allblog" element={<AllBlogs />} />
      <Route path="/myblog" element={<MyBlog />} />
      <Route path="/admin/write/blog" element={<CreateBlog />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/profile" element={<Profile />} />
      
      <Route path="/user/profile/:id" element={<UserProfile />} />
      <Route path="/detail/Blog" element={<DetailBlog />} />
      <Route path="/approve" element={<Approve />} />
      <Route path="/authors" element={<AllUser />} />

     
     
     
      <Route path="/write/blog" element={<Write_Blog />} />
     
      
     
      
      <Route path="/admin/pending/blog" element={<PendingBlog />} />
      <Route path="/user" element={<UserHomePage />} />
      
      {/*  userRoute */}
    </Routes>
  );
};
