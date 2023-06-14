import Image from "next/image";
import { cookies } from "next/headers";

export default function NavBar() {
  return (
    <nav className="bg-darkGray pb">
      <a href="/">
        <Image
          src="/../public/assets/logo.png"
          alt={"Logo"}
          width="25"
          height="25"
          className="float-left"
        />
        <p className="pt-0.5">WeightWise</p>
      </a>
    </nav>
  );
}
