// import React, { Suspense } from "react";
import Header from "../../sharedComponents/Header";
// import applicantEmailApi from "../../../api/applicantEmailApi";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import MyApplyList from "./MyApplyList";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

function MyApply() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [myRegistrations, setMyRegistrations] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/registration-marathon-query?email=${user && user.email}`)
      .then((response) => {
        // console.log(response.data);
        setLoading(false);
        setMyRegistrations(response.data);
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          title: "oops!",
          text: err.message,
          icon: "error",
        });
        setLoading(false);
      });
  }, [user, axiosSecure]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header
        title="Your Applied Marathons"
        desc="Explore the list of marathons you’ve registered for. Track your application status, event dates, and stay updated on your upcoming runs. Lace up and stay ready!"
        width="max-w-[900px]"
      />

      <MyApplyList myRegistrations={myRegistrations} />
    </div>
  );
}

export default MyApply;
