import { Divider, Image } from "@nextui-org/react";
import SignInForm from "./components/Sign-in-Form-Component";

export default function SignIn() {
  return (
    <main className="flex flex-row justify-center align-middle w-full min-h-lvh">
      <div className="w-1/2 flex flex-col self-center justify-center min-h-lvh bg-white">
        <div className="w-96 self-center">
          <SignInForm></SignInForm>
        </div>
      </div>
      <div className="flex flex-row gap-12 align-middle justify-center self-center  w-1/2 m-auto ">
        <div className="max-w-sm self-center ">
          <Image src="assets/images/Sign_in_illi.png" alt="Illistrators" />
        </div>
      </div>
    </main>
  );
}
