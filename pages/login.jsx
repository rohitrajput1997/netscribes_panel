/** @format */

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { handleLogin } from "../actions/Login.action";
import ConfirmationModal from "../components/auth/ConfirmationModal";
import NSButton from "../components/common/NSButton";
import NSInput from "../components/common/NSInput";
import OrHr from "../components/common/OrHr";
import NSSocialButton from "../components/common/NSSocialButton";

function Login({ token }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(false);
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSocial, setisSocial] = useState(false);
  React.useEffect(() => {
    if (token) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token]);

  // const responseGoogle = (response, removetoken) => {
  //   NSCookies.clearCookies();
  //   sessionStorage.clear();

  //   if (response.profileObj) {
  //     setSocialLoader(true);
  //     apis
  //       .login({
  //         email: response.profileObj.email,
  //         password: "",
  //         type: "social",
  //         social_token: response.accessToken,
  //         removetoken,
  //       })
  //       .then(({ data }) => {
  //         if (data.access_token) {
  //           NSToaster.success("Login successfully!");
  //           NSCookies.setUser(data.user);
  //           NSCookies.setToken(data.access_token);
  //           router.push("/");
  //         } else {
  //           NSToaster.error(data.message);
  //           if (data.message === "Already logged in") {
  //             setOpen(true);
  //             setAccessToken(response);
  //             setisSocial(true);
  //           }
  //         }
  //       })
  //       .catch(() => {
  //         NSToaster.error(
  //           "Something went to wrong, Please try after sometime."
  //         );
  //       })
  //       .finally(() => {
  //         setSocialLoader(false);
  //       });
  //   }
  // };

  const handleLoginUser = ({ removetoken = 0 }) => {
    handleLogin({
      email: email,
      password: password,
      setValidate: setValidate,
      setLoader: setLoader,
      router: router,
      removetoken,
      setOpen,
    });
  };

  return (
    <>
      <div className="login-container-center">
        <div className="w-full h-full bg-slate-400 rounded-[15px] px-12 flex justify-start items-center">
          <div className="min-w-[30%] min-h-[300px] aspect-auto bg-white rounded-[20px] px-12 py-8">
            <div className="text-center">
              <h1 className="font-interRegular text-gray-400 text-sm mb-2">
                Welcome to..
              </h1>
              <div className="w-full flex justify-center mb-3">
                <Image
                  src="./images/logo.svg"
                  height={120}
                  width={120}
                  alt="logo"
                />
              </div>
              <h1 className="text-[1.6rem] font-interSemiBold mb-3">
                Market Intelligence
              </h1>

              <div className="flex justify-center">
                <GoogleLogin
                  clientId={
                    "795852775299-u0r1kc6lpag4j9uonj1247mncg5h1rva.apps.googleusercontent.com"
                  }
                  render={(renderProps) => (
                    <NSSocialButton
                      icon={
                        <Image
                          src="/images/google.png"
                          alt="google"
                          width={22}
                          height={22}
                        />
                      }
                      title="Sign in with Google"
                      bgBordered
                      className="w-[fit-content] mt-4 mb-2 text-[.9rem] cursor-pointer"
                      onClick={renderProps.onClick}
                    />
                  )}
                  buttonText="Login"
                  // onSuccess={responseGoogle}
                  // onFailure={responseGoogle}
                />
              </div>
            </div>
            <OrHr />

            <div>
              <NSInput
                type="text"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isError={validate && (!email || email === "")}
                errorMessage="Email id is required"
                className="mt-4"
              />
              <NSInput
                type="password"
                isForgotPassword
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isError={validate && (!password || password === "")}
                errorMessage="Password is required"
                router={router}
                className="mt-2"
                isReminder
              />
              <div>
                <NSButton
                  className="w-full rounded-full mt-8 font-interMedium text-[.9rem]"
                  title="Log In"
                  bgPrimary
                  onClick={handleLoginUser}
                  loader={loader}
                />
                <div className="py-3 flex justify-center text-[.9rem] mt-2">
                  <span className="font-interRegular text-slate-400 text-sm">
                    Don&apos;t have an account?{" "}
                    <span className="text-blue-600 font-semibold cursor-pointer text-[.8rem]">
                      Sign Up
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ConfirmationModal
          onClickYes={() => {
            if (isSocial) {
              // responseGoogle(accessToken, 1)
            } else {
              handleLoginUser({ removetoken: 1 });
            }
          }}
          open={open}
          setOpen={setOpen}
          title="Do you want to close your active session and create a new one?"
          loader={loader}
        />
      </div>
    </>
  );
}

export default Login;
