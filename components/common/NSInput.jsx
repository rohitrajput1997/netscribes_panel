import React from "react";
import { Checkbox } from "antd";

function NSInput(
  {
    title,
    type,
    className,
    isError,
    errorMessage,
    onChange,
    value,
    isForgotPassword,
    placeholder,
    style,
    router,
    ref,
    onBlur,
    isRequired,
    isReminder = false,
  },
  ...rest
) {
  return (
    <div>
      {title && (
        <p className="py-3 text-[.9rem] font-interMedium">
          {title}
          {isRequired && <span className="text-red-600">*</span>}
        </p>
      )}
      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        className={`${className} font-interRegular text-sm`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={style}
        {...rest}
      />

      {isError && (
        <p className="text-red-500 font-interMedium text-[.8rem]">
          {errorMessage || "This field is required"}
        </p>
      )}

      <div className="flex justify-between mt-2 items-center">
        {isReminder && (
          <Checkbox className="font-interMedium text-slate-400">
            <p className="text-[.8rem]">Remember for 30 days</p>
          </Checkbox>
        )}
        {isForgotPassword && (
          <p
            className="text-blue-600 font-interSemiBold text-[.8rem] cursor-pointer"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Password?
          </p>
        )}
      </div>
    </div>
  );
}

export default NSInput;
