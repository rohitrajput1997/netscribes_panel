import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NSButton from "../components/common/NSButton";
import NSInput from "../components/common/NSInput";
import apis from "./api";
import passwordValidation from "../utils/passwordValidation";
import NSToaster from "../components/common/NSToaster";

function ResetPass() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const inputStyle = {
    backgroundColor: "var(--bg-main)",
    height: "40px",
    paddingLeft: "1rem",
    borderRadius: "10px",
    outline: "none",
  };

  const handleChangePassword = () => {
    setLoading(true);
    setIsValidate(true);
    if (password !== reEnterPassword) {
      setIsValidate(true);
      setLoading(false);
      return;
    }
    if (!passwordValidation(password)) {
      setIsValidate(true);
      setLoading(false);
      return;
    }
    if (!passwordValidation(reEnterPassword)) {
      setIsValidate(true);
      setLoading(false);
      return;
    }
    if (router?.query?.token) {
      apis
        .resetPassword({
          password,
          reEnterPassword,
          token: router?.query?.token,
        })
        .then(({ data }) => {
          if (data.status_code === 200) {
            NSToaster.success(data?.status_message);
            NSCookies.clearCookies();
            router.push("/login");
          } else {
            NSToaster.error(data.status_message);
          }
        })
        .catch(() => {
          NSToaster.error(
            "Something went to wrong, Please try after sometime."
          );
        })
        .finally(() => {
          setLoading(false);
          setIsValidate(false);
        });
    } else {
      NSToaster.error("Token unavailable");
    }
  };

  return (
    <div className="login_inner_container relative">
      <div className="flex ml-10">
        <Image src="/images/logo.svg" width={246} height={43} alt="logo" />
      </div>
      <div className="mt-9 w-[500px] bg-white rounded-md absolute left-10 p-[1.2rem]">
        <div className="login_inner_container_card">
          <p className="text-xl font-MontBold">Reset Password</p>
          <div className="form_input mt-6">
            <div className="flex flex-col">
              <NSInput
                type="password"
                title="Enter Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isError={isValidate && !passwordValidation(password)}
                errorMessage={
                  <ul>
                    <li>Password must be at least 8 characters long.</li>
                    <li>
                      Contain an uppercase letter, a lowercase letter and a
                      number.
                    </li>
                    <li>One Special Character.</li>
                  </ul>
                }
                style={inputStyle}
              />
              <NSInput
                type="password"
                title="Re-enter Password"
                placeholder="Re-enter Password"
                value={reEnterPassword}
                isError={isValidate && !passwordValidation(reEnterPassword)}
                errorMessage={
                  <ul>
                    <li>Password must be at least 8 characters long.</li>
                    <li>
                      Contain an uppercase letter, a lowercase letter and a
                      number.
                    </li>
                    <li>One Special Character.</li>
                    {reEnterPassword !== password && (
                      <li>Renter password same as password</li>
                    )}
                  </ul>
                }
                onChange={(e) => setReEnterPassword(e.target.value)}
                style={inputStyle}
              />
              {(!isValidate && reEnterPassword === "") ||
              (!isValidate && !passwordValidation(reEnterPassword)) ? (
                <ul
                  className="common_error font-MontMedium"
                  style={{ color: "black", fontSize: ".8rem" }}
                >
                  <li>Password must be at least 8 characters long.</li>
                  <li>
                    Contain an uppercase letter, a lowercase letter and a
                    number.
                  </li>
                  <li>One Special Character.</li>
                </ul>
              ) : (
                <></>
              )}
            </div>

            <div className="flex flex-col forgot_password">
              <NSButton
                className="mt-6 w-[100%] h-[40px] pt-[6px] font-MontMedium"
                title={"Reset Password"}
                isPrimary
                onClick={handleChangePassword}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
