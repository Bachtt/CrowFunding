import React from "react";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Label } from "../components/label";
import { Input } from "../components/input";

const SignUpPage = () => {
  const { handleSubmit, control } = useForm({});
  return (
    <LayoutAuthentication heading="SignUp">
      <p className="text-center  font-normal text-xs lg:text-sm text-text3 mb-6 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="text-primary font-medium underline">
          Sign In
        </Link>
      </p>
      <button className="flex items-center gap-x-3 w-full justify-center py-4 border border-strock rounded-xl text-text2 text-base font-semibold mb-5">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign Up with Google</span>
      </button>
      <p className="text-center font-normal text-xs lg:text-sm mb-4 lg:mb-8 text-text2">
        Or Sign Up with email
      </p>
      <form>
        <div className="flex flex-col gap-y-3">
          <Label>Full Name *</Label>
          <Input control={control} name="name"></Input>
        </div>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
