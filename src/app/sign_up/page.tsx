import { Divider, Image } from "@nextui-org/react";
import SignInForm from "../sign_in/components/Sign-in-Form-Component";
import SignUpForm from "./components/Sign-Up-Form";

export default function SignIn() {
  return (
    <main className="flex flex-col lg:flex-row justify-between  w-screen min-h-lvh">
      <div className="w-1/2 flex flex-col self-center justify-center min-h-lvh bg-white">
        <div className="w-96 self-center">
          <SignUpForm></SignUpForm>
        </div>
      </div>
      <div className="flex flex-row max-md:hidden gap-12 align-middle justify-center self-center  w-1/2 m-auto ">
        <div className="max-w-sm self-center ">
          <Image src="assets/images/Sign_in_illi.png" alt="Illistrators" />
        </div>
      </div>
    </main>
  );
}
