import React from "react";
import NSCard from "../components/common/NSCard";
import NSInput from "../components/common/NSInput";
import NSButton from "../components/common/NSButton";
import Image from "next/image";
import OrHr from "../components/common/OrHr";

function login() {
  return (
    <>
      <div className="login-container-center">
        <div className="w-[100vw] h-[100vh] min-h-[100vh] max-h-[100vh] bg-white box-shadow grid grid-cols-2">
          <div className="col-span-1 bg-blue-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./assets/Mask Group 183.jpg"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "" }}
            />
          </div>
          <div className="col-span-1 bg-white flex justify-center items-center">
            <div className="w-[70%] h-[80%] overflow-y-scroll">
              <h2 className="text-[2.8rem] pb-3 font-MontBold">Login</h2>
              <form action="">
                <NSInput
                  type="text"
                  title="User Name"
                  placeholder="Enter your email/User name"
                />
                <NSInput
                  type="password"
                  title="Password"
                  isForgotPassword
                  placeholder="Password"
                />
                <div>
                  <NSButton
                    className="w-full uppercase rounded-full mt-8 font-semibold text-[.9rem]"
                    title="Login"
                    bgPrimary
                  />
                  <div className="py-3 flex justify-center text-[.9rem]">
                    <span>
                      Dont have an account?{" "}
                      <span className="text-blue-600 font-semibold cursor-pointer">
                        Sign Up
                      </span>
                    </span>
                  </div>
                </div>

                <OrHr />

                <NSButton
                  icon={
                    <Image
                      src="/images/google.png"
                      alt="google"
                      width={22}
                      height={22}
                    />
                  }
                  title="Login with Google"
                  bgBordered
                  className="w-full mt-4 mb-2 rounded-md text-[.9rem]"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
