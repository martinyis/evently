import Link from "next/link";
import React from "react";
import Image from "next/image";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={128}
          />
        </Link>
        <p>2023 Evently. ALl Rigths Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
