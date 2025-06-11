import SocialIcons from "./SocialIcons";

function FooterBottom() {
  return (
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2025{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          RunNexus™
        </a>
        . All Rights Reserved.
      </span>

      <SocialIcons />
    </div>
  );
}

export default FooterBottom;
