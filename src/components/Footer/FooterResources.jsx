import React from "react";
import FooterLink from "./FooterLink";

function FooterResources() {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium ">
      <FooterLink text="Events" />
      <FooterLink text="Event Details" />
      <FooterLink text="Training Plans" />
      <FooterLink text="Nutrition Guide" />

      <li>
        <a className="hover:underline text-sm lg:text-base">FAQs</a>
      </li>
    </ul>
  );
}

export default FooterResources;
