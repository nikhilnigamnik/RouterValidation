import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsUserLoggedIn,
}) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] justify-between py-12 mx-auto gap-x-12 gap-y-0">
      <div className="relative w-11/12 max-w-[450px]">
        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text=[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <br />
          <span className="text-blue-400 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsUserLoggedIn={setIsUserLoggedIn} />
        ) : (
          <LoginForm setIsUserLoggedIn={setIsUserLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-blue-800"></div>
          <p className="font-medium text-white leading-[1.375rem] ">OR</p>
          <div className="h-[1px] w-full bg-blue-800"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-white border border-white px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img
          className="absolute"
          src={frame}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
