import React from "react";

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
  },
  ...rest
) {
  return (
    <>
      {title && <p className="py-3 text-[.9rem]">{title}</p>}
      <input
        placeholder={placeholder}
        type={type}
        className={className}
        onChange={onChange}
        value={value}
        style={style}
        {...rest}
      />
      <div className="flex justify-between mt-2">
        {isError && (
          <p className="text-red-500 font-MontMedium text-[.8rem]">
            {errorMessage || "This field is required"}
          </p>
        )}
        {isForgotPassword && (
          <p
            className="text-blue-600 font-MontMedium text-[.8rem] cursor-pointer"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Your Password?
          </p>
        )}
      </div>
    </>
  );
}

export default NSInput;
