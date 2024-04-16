import { Button, Divider, Input } from "@nextui-org/react";

export default function SignInForm() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold ">Login</h1>
      <Input label="Full Name" />
      <div className="flex flex-col gap-1 justify-start">
        <a>Forget Password?</a>
        <Input label="Email" />
      </div>
      <Button>Login</Button>
      <Divider></Divider>
      <Button variant="bordered">Create Account</Button>
    </div>
  );
}
