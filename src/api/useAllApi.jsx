import useAxiosSecure from "../hooks/useAxiosSecure";

const useAllApi = () => {
  const axiosSecure = useAxiosSecure();

  const myRegistrationsPromise = (email) => {
    return axiosSecure
      .get(`/registration-marathon-query?email=${email}`)
      .then((res) => res.data);
  };

  return { myRegistrationsPromise };
};

export default useAllApi;
