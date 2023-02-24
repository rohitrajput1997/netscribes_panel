import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import NSButton from "../components/common/NSButton";
import NSInput from "../components/common/NSInput";
import NSToaster from "../components/common/NSToaster";
import { validateEmail } from "../utils/validateEmail";
import apis from "./api";

function forgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const handleResetPassword = () => {
    setLoading(true);
    setIsValidate(true);

    if (!email || !validateEmail(email)) {
      setIsValidate(true);
      setLoading(false);
    } else {
      let formData = new FormData();
      formData.append("email", email);

      apis
        .forgetPassword(formData)
        .then(({ data }) => {
          if (data) {
            NSToaster.success(data?.status_message);
          } else {
            NSToaster.error(data.message);
          }
        })
        .catch(() => {
          NSToaster.error(
            "Something went to wrong, Please try after sometime."
          );
        })
        .finally(() => {
          setLoading(false);
        });
      setIsValidate(false);
    }
  };

  return (
      <div className="forget-password">
        <div
          className="image_container"
          style={{ backgroundImage: "" }}
        >
          <div className="login_inner_container">
            <div className="flex ml-10">
              <Image
                src="/images/logo.svg"
                width={246}
                height={43}
                alt="logo"
              />
            </div>
            <div className="flex mt-9">
              <div className="login_inner_container_card">
                <p className="title">Email to Reset Password</p>
                <div className="form_input mt-6">
                  <div className="flex flex-col">
                    <NSInput
                      title="Enter Email"
                      placeholder="Enter Email Id"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // validation={(isValidate && !validateEmail(credential[item.key])))}
                      errorMessage={"Please valid email address"}
                      validation={isValidate}
                    />
                  </div>

                  <div className="flex flex-col forgot_password">
                    <NSButton
                      className={"btn mt-6"}
                      title={"Send"}
                      isPrimary
                      onClick={handleResetPassword}
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default forgotPassword;
