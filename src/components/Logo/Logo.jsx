import { Link } from "react-router";

function Logo() {
  return (
    <h3 className="text-xl md:text-2xl font-bold uppercase ">
      <Link to="/" className="flex gap-1 items-end ">
        Run
        <span className="text-orange-400 flex gap-1 items-end">
          {" "}
          <img className="w-9 pb-[5px]" src="/finishLine.png" alt="" /> Nexus
        </span>
      </Link>
    </h3>
  );
}

export default Logo;
