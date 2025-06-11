import React, { use } from "react";
import AuthContext from "../contexts/Auth/AuthContext";

function useAuth() {
  const authInfo = use(AuthContext);
  return authInfo;
}

export default useAuth;
