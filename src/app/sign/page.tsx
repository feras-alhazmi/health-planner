import { Image } from "@nextui-org/react";
import SignInForm from "./components/Sign-in-Form-Component";

export default function SignIn() {
  return (
    <div className="grid max-w-lg">
      <div className=" col-start-1 row-start-1 ">
        <SignInForm />
      </div>
      <div className=" col-start-1 row-start-1">
        <Image src="assets/images/Sign_in_ellipse.png" alt="Illistrators" />
      </div>
      <div className=" col-start-1 row-start-1">
        <Image
          className=" col-start-1 row-start-1"
          src="assets/images/Sign_in_illi.png"
          alt="Illistrators"
        />
      </div>
    </div>
  );
}
