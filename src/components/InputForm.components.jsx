import React from "react";

const InputFormComponents = ({ loading, name, userName }) => {
  return (
    <div className=" max-sm:w-full md:w-[45%] md:py-3 my-3">
      <input
        required
        disabled={loading}
        name={`${userName}`}
        type="text"
        placeholder={`Your ${name} *`}
        className={`${
          loading ? "opacity-10" : "opacity-100"
        } w-full bg-[rgb(17,17,17)]  text-white border-b-2 border-b-stone-600  outline-none p-3 text-xl focus:border-b-white`}
      />
    </div>
  );
};

export default InputFormComponents;
