import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import Header from "../../sharedComponents/Header";
import MyMarathonList from "./MyMarathonList";

function MyMarathons() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [myMarathons, setMyMarathons] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/marathons?email=${user && user.email}`)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setMyMarathons(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
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
