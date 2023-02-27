import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NSButton from "../components/common/NSButton";
import NSInput from "../components/common/NSInput";
import NSToaster from "../components/common/NSToaster";
import validateEmail from "../utils/validateEmail";
import apis from "./api";

function ForgotPassword() {
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
    <div className="login_inner_container relative">
      <div className="flex ml-10 mt-2">
        <Image src="/images/logo.svg" width={246} height={43} alt="logo" />
      </div>
      <div className="mt-9 w-[450px] bg-white p-[1.2rem] absolute left-6 rounded-md">
        <p className="text-xl font-MontBold">Email to Reset Password</p>
        <div className="form_input mt-6">
          <div className="flex flex-col">
            <NSInput
              title="Enter Email"
              placeholder="Enter Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isError={(isValidate && !validateEmail(email))}
              errorMessage={"Please enter valid email address"}
              style={{
                backgroundColor: "var(--bg-main)",
                height: "40px",
                paddingLeft: "1rem",
                borderRadius: "10px",
                outline: "none",
              }}
            />
          </div>
          <NSButton
            className="mt-6 w-[100%] h-[40px] pt-[6px] font-MontMedium"
            title={"Send"}
            isPrimary
            // onClick={() => router.push('/resetpass')}
            onClick={() => handleResetPassword()}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
