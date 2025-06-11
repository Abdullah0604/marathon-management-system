import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function SocialIcons() {
  return (
    <div className="flex gap-4 mt-6">
      <a aria-label="Facebook">
        <FaFacebookF
          size={24}
          className="text-blue-500 hover:text-gray-400 dark:hover:text-white  transition duration-300"
        />
      </a>
      <a aria-label="Instagram">
        <FaInstagram
          size={24}
          className="text-pink-500 hover:text-gray-400 dark:hover:text-white  transition duration-300"
        />
      </a>
      <a aria-label="Twitter">
        <FaTwitter
          size={24}
          className="text-sky-400 hover:text-gray-400 dark:hover:text-white  transition duration-300"
        />
      </a>
      <a aria-label="YouTube">
        <FaYoutube
          size={24}
          className="text-red-500 hover:text-gray-400 dark:hover:text-white  transition duration-300"
        />
      </a>
    </div>
  );
}

export default SocialIcons;
