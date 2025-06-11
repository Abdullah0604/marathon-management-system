import React from "react";

function FooterLink({ text }) {
  return (
    <li className="mb-4">
      <a className="hover:underline text-sm md:text-base cursor-pointer">
        {text}
      </a>
    </li>
  );
}

export default FooterLink;
