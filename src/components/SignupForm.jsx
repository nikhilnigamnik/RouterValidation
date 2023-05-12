import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsUserLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accountType, setAccountType] = useState("student");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordc, setShowPasswordc] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submithandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("password do not match");
      return;
    }
    setIsUserLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex text-white p-1 gap-x-1 my-6 max-w-max bg-[#080529] rounded-full">
        <button
          className={`${
            accountType === "student"
              ? "bg-blue-700 text-white"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("student");
          }}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-blue-700 text-white"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => {
            setAccountType("instructor");
          }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submithandler}>
        {/* FirstName or Last Name */}
        <div className="flex gap-x-4 mt-4">
          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
              className="bg-[#080529] rounded-[0.5rem] text-white w-full p-[12px]"
            />
          </label>
          <label>
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
              className="bg-[#080529] rounded-[0.5rem] text-white w-full p-[12px]"
            />
          </label>
        </div>
        {/* Email Address */}
        <label className="">
          <p className="text-[0.875rem] mt-4 text-white mb-1 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name="email"
            className="bg-[#080529] rounded-[0.5rem] text-white w-full p-[12px]"
          />
        </label>
        {/* Create Password and Confirm Password */}
        <div className="flex gap-x-4 mt-4">
          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              className="bg-[#080529] rounded-[0.5rem] text-white w-full p-[12px]"
            />
            <span
              className="absolute right-3 top-[38px] cursor"
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-red-800">*</sup>
            </p>
            <input
              required
              type={showPasswordc ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
              className="bg-[#080529] rounded-[0.5rem] text-white w-full p-[12px]"
            />
            <span
              className="absolute  right-3 top-[38px] cursor"
              onClick={() => {
                setShowPasswordc((prev) => !prev);
              }}
            >
              {showPasswordc ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="text-center mt-6 w-full bg-yellow-500 rounded-[8px] px-[12] py-[8px]">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
