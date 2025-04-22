import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/blue-ship-logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Naval Engineering">
      <Image src={logo} alt="Naval Engineering Logo" width={32} height={32} />
    </Link>
  );
}
