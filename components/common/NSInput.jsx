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
    ref,
    onBlur,
    isRequired,
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
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        style={style}
        {...rest}
      />
      <div className="flex justify-between mt-2">
        {isError && (
          <p className="text-red-500 font-interMedium text-[.8rem]">
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
    </div>
  );
}

export default NSInput;
