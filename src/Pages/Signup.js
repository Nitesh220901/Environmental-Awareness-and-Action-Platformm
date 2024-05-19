import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { setSignupData } from "../Slice/authSlice";
import { sendOtp } from "../Service/Operation/Auth";

export const Signup = ({ setISLoggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);


  function changeHandler(event) {
    setFormdata((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    const signupData = {
      ...formData,
    };
    console.log(signupData);

    dispatch(setSignupData(signupData));
    console.log("Going to Otp Send");
    dispatch(sendOtp(formData.email, navigate));
    console.log("otp send successfully");
    setFormdata({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="w-screen flex flex-row justify-center items-center min-h-screen 
     bg-[url(https://images.unsplash.com/photo-1599148401012-60bd30ff1967?q=80&w=2250&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
      <div
        className="w-full  backdrop-blur-sm backdrop-brightness-90
       min-h-screen flex flex-row justify-center items-center max-lg:flex-col-reverse"
      >
        <div className="flex pb-10 flex-col w-full justify-center items-center text-white">
          <div className="w-[500px] backdrop-blur backdrop-brightness-110 py-3 px-4 ">
            <h1 className="text-3xl font-bold">
              {" "}
              Join the millions learning to code with StudyNotion for free
            </h1>
            <p className="my-5">
              Build skills for today, tomorrow, and beyond.
              <span className="text-caribbeangreen-400">
                {" "}
                Education to future-proof your career.
              </span>
            </p>
          </div>
          <form onSubmit={submitHandler} className="w-[500px] backdrop-blur backdrop-brightness-110  text-white">
            <div className="flex justify-between gap-2 ">
              <label className="w-full flex flex-col items-start relative mt-1">
                <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem] ml-2">
                  First Name<sup className="text-gray-100">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="firstName"
                  onChange={changeHandler}
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  className="bg-richblack-800 text-black rounded-[0.5rem] p-[12px] w-full h-10 border-b border-b-richblack-200"
                />
              </label>

              <label className="w-full flex flex-col items-start relative mt-1">
                <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] ml-2">
                  Last Name<sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="lastName"
                  onChange={changeHandler}
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  className="bg-richblack-800  rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b border-b-richblack-200"
                />
              </label>
            </div>
            {/* email  */}
            <label className=" flex flex-col items-start relative mt-2">
              <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] ml-2">
                Email Address<sup className="text-pink-500">*</sup>
              </p>
              <input
                required
                type="email"
                name="email"
                onChange={changeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
                className="bg-richblack-800  rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b-2 border-b-richblack-200"
              />
            </label>
            {/* create password  */}
            <div className=" flex justify-between gap-2">
              <label className="w-full flex flex-col items-start relative mt-2">
                <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] ml-2">
                  Create Password<sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={changeHandler}
                  placeholder="Enter Password"
                  value={formData.password}
                  className="bg-richblack-800  rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b-2 border-b-richblack-200"
                />
                <span
                  className="absolute right-3 top-[30px] cursor-pointer mt-1"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>

              <label className="w-full flex flex-col items-start relative mt-2">
                <p className="text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] ml-2">
                  Confirm Password<sup className="text-pink-500">*</sup>
                </p>
                <input
                  required
                  type={showPassword1 ? "text" : "password"}
                  name="confirmPassword"
                  onChange={changeHandler}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  className="bg-richblack-800  rounded-[0.5rem] text-black p-[12px] w-full h-10 border-b-2 border-b-richblack-200"
                />

                <span
                  className="absolute right-3 top-[30px] cursor-pointer mt-1"
                  onClick={() => setShowPassword1((prev) => !prev)}
                >
                  {showPassword1 ? (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="bg-yellow-100 text-black font-bold mt-5 w-full rounded-[8px]   px-[10px] py-[10px] border-2 border-gray-950  hover:text-gray-700 duration-200"
            >
              Create Account
            </button>
            <div className="flex w-full items-center my-4 gap-x-2">
              <div className="w-full h-[1px] bg-gray-700"></div>
              <p className="text-white font-medium leading-[1.375rem]">OR</p>
              <div className="w-full h-[1px] bg-gray-700"></div>
            </div>
            <button
              className=" w-full flex justify-center items-center 
            rounded-[8px] font-medium text-white border
             border-gray-700 px-[12px] py-[8px] gap-x-2 mt-4 hover:bg-gray-900 transition-all duration-100 "
            >
              <FcGoogle />
              <p>Sign Up with Google</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
