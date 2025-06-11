import { Link } from "react-router";

function Logo() {
  return (
    <h3 className="text-xl md:text-2xl font-bold uppercase ">
      <Link to="/">
        Run<span className="text-teal-500">Nexus</span>
      </Link>
    </h3>
  );
}

export default Logo;
