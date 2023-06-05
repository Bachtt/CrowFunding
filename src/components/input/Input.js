import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
const Input = (props) => {
  const { control, name, type } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        type={type}
        className="w-full px-4 py-6 border border-strock rounded-xl text-sm font-medium text-text1 placeholder:text-text4"
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
