import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://runnexus-server.vercel.app",
});

function useAxiosSecure() {
  const { user, userLogOut, loading } = useAuth();
  // axiosInstance.interceptors.request.use((config) => {
  //   config.headers.authorization = `Bearer ${user?.accessToken}`;
  //   return config;
  // });

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            userLogOut()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, userLogOut]);

  return axiosInstance;
}

export default useAxiosSecure;
