"use client";
import DividerText from "@/core/divider/Divider-Text-Component";
import { Button, Divider, Input } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

export default function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">Create Account</h1>
      <Input label="Full Name" />

      <Input label="Email" />
      <Input
        label="Password"
        placeholder="Enter your password"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <BsEyeFill className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <BsEyeSlashFill className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
      />
      <Button color="primary">Sign Up</Button>
      <DividerText
        content={
          <Link href="sign_in" className="text-blue-600">
            Already Have An Account?
          </Link>
        }
      ></DividerText>
      <Link className="min-w-full" href={"sign_in"}>
        <Button className="w-full" color="primary" variant="bordered">
          Login In
        </Button>
      </Link>
    </div>
  );
}
