import React from "react";

function FooterLink({ text, href }) {
  return (
    <li className="mb-4">
      <a
        href={`#${href}`}
        className="hover:underline text-sm md:text-base cursor-pointer"
      >
        {text}
      </a>
    </li>
  );
}

export default FooterLink;
