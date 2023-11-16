import React from "react";

const TextAreaInput = ({ label, value, func, id, placeholder, tag }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      {tag === "textarea" ? (
        <textarea
          value={value}
          onChange={func}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type="text"
          placeholder={placeholder}
        />
      ) : (
        <input
          value={value}
          onChange={func}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type="text"
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default TextAreaInput;
