import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
const Input = (props) => {
  const { control, name, type = "text", ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className="w-full px-4 py-6 text-sm font-medium border border-strock rounded-xl text-text1 placeholder:text-text4"
        {...rest}
        {...field}
      />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default Input;
