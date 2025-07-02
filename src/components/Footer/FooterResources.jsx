import React from "react";
import FooterLink from "./FooterLink";

function FooterResources() {
  return (
    <ul className="text-gray-500 dark:text-gray-400 font-medium ">
      <FooterLink href="story" text="Our Story" />

      <FooterLink href="upcoming" text="Upcoming Events" />

      <FooterLink href="offers" text="Promotions & Offers" />
      <FooterLink href="faqs" text="FAQS" />
    </ul>
  );
}

export default FooterResources;
