import React from "react";
import FooterLink from "./FooterLink";

function FollowsUs() {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium">
      <FooterLink text="Facebook" />
      <FooterLink text="Instagram" />
      <FooterLink text="Twitter" />

      <li>
        <a className="hover:underline text-sm md:text-base">Yout Tube</a>
      </li>
    </ul>
  );
}

export default FollowsUs;
