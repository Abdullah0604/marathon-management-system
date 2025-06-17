import { useEffect, useState } from "react";
// import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import Header from "../../sharedComponents/Header";
import MyMarathonList from "./MyMarathonList";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function MyMarathons() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const [myMarathons, setMyMarathons] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/my-marathons?email=${user && user.email}`)
      .then((response) => {
        // console.log(response.data);
        setLoading(false);
        setMyMarathons(response.data);
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
    <div className="w-full">
      <Header
        title="Your Marathons at a Glance"
        desc="Manage all the marathons you’ve hosted in one place. Keep track of event details, registrations, and stay organized as you continue inspiring runners nationwide."
        width="max-w-4xl"
      />
      <MyMarathonList myMarathons={myMarathons} />
    </div>
  );
}

export default MyMarathons;
