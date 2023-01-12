import React from "react";
import NSCard from "../components/common/NSCard";
import NSInput from "../components/common/NSInput";
import NSButton from "../components/common/NSButton";
import Image from "next/image";

function login() {
  return (
    <>
      <div className="login-container-center">
        <div className="w-[80vw] h-[90vh] min-h-[90vh] bg-white box-shadow grid grid-cols-2">
          <div className="col-span-1 bg-blue-300">dsbhdb</div>
          <div className="col-span-1 bg-white flex justify-center items-center">
            <div className="w-[70%] h-[80%] overflow-y-scroll">
              <h2 className="text-[2.8rem] pb-2">Login</h2>
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
                    className="w-full uppercase rounded-full mt-6"
                    title="Login"
                    bgPrimary
                  />
                  <div className="py-3 flex justify-center">
                    <span>
                      Don't have an account?{" "}
                      <span className="text-blue-600">Sign Up</span>
                    </span>
                  </div>
                </div>

                <div className="or-section flex items-center">
                  <hr className="border w-[48%]" />
                  <div className="w-20 h-6 bg-white flex justify-center items-center">
                    or
                  </div>
                  <hr className="border w-[48%]" />
                </div>

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
                  className="w-full mt-4 mb-2 rounded-md"
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
