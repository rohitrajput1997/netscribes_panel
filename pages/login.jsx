/** @format */

import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { GoogleLogin } from "react-google-login"
import { handleLogin } from "../actions/Login.action"
import ConfirmationModal from "../components/auth/ConfirmationModal"
import NSButton from "../components/common/NSButton"
import NSInput from "../components/common/NSInput"
import OrHr from "../components/common/OrHr"

function Login({ token }) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validate, setValidate] = useState(false)
  const [loader, setLoader] = useState(false)
  const [open, setOpen] = useState(false)
  const [isSocial, setisSocial] = useState(false)
  React.useEffect(() => {
    if (token) {
      router.push("/login")
    } else {
      router.push("/")
    }
  }, [token])

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
    })
  }

  return (
    <>
      <div className="login-container-center">
        <div className="w-[100vw] h-[100vh] min-h-[100vh] max-h-[100vh] bg-white box-shadow grid grid-cols-2">
          <div className="col-span-1 bg-blue-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="./assets/Mask Group 183.jpg"
              alt=""
              style={{ width: "100vw", height: "100vh", objectFit: "fill" }}
            />
          </div>
          <div className="col-span-1 bg-white flex justify-center items-center">
            <div className="w-[70%] h-[80%] overflow-y-scroll">
              <h2 className="text-[2.8rem] pb-3 font-MontBold">Login</h2>
              <NSInput
                type="text"
                title="User Name"
                placeholder="Enter your email/User name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isError={validate && (!email || email === "")}
                errorMessage="Email id is required"
              />
              <NSInput
                type="password"
                title="Password"
                isForgotPassword
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isError={validate && (!password || password === "")}
                errorMessage="Password is required"
                router={router}
              />
              <div>
                <NSButton
                  className="w-full uppercase rounded-full mt-8 font-semibold text-[.9rem]"
                  title="Login"
                  bgPrimary
                  onClick={handleLoginUser}
                  loader={loader}
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

              <GoogleLogin
                clientId={
                  "795852775299-u0r1kc6lpag4j9uonj1247mncg5h1rva.apps.googleusercontent.com"
                }
                render={(renderProps) => (
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
                    onClick={renderProps.onClick}
                  />
                )}
                buttonText="Login"
                // onSuccess={responseGoogle}
                // onFailure={responseGoogle}
              />
            </div>
          </div>
        </div>
        <ConfirmationModal
          onClickYes={() => {
            if (isSocial) {
              // responseGoogle(accessToken, 1)
            } else {
              handleLoginUser({ removetoken: 1 })
            }
          }}
          open={open}
          setOpen={setOpen}
          title="Do you want to close your active session and create a new one?"
          loader={loader}
        />
      </div>
    </>
  )
}

export default Login

