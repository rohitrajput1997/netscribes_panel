import React from "react";

function NSInput(
  {
    title = "text",
    type,
    className,
    isError,
    errorMessage,
    onChange,
    value,
    isForgotPassword,
    placeholder,
  },
  ...rest
) {
  return (
    <>
      <p className="py-2">{title}</p>
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <div className="flex justify-between mt-2">
        {isError && (
          <p className="text-red-500">
            {errorMessage || "This field is required"}
          </p>
        )}
        {isForgotPassword && (
          <p className="text-blue-600">Forgot Your Password?</p>
        )}
      </div>
    </>
  );
}

export default NSInput;
