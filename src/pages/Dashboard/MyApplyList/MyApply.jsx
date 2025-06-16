import React, { Suspense } from "react";
import Header from "../../sharedComponents/Header";
// import applicantEmailApi from "../../../api/applicantEmailApi";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loader/Loading";
import MyApplyList from "./MyApplyList";
import useAllApi from "../../../api/useAllApi";

function MyApply() {
  const { user } = useAuth();
  const { myRegistrationsPromise } = useAllApi();
  return (
    <div>
      <Header
        title="Your Applied Marathons"
        desc="Explore the list of marathons you’ve registered for. Track your application status, event dates, and stay updated on your upcoming runs. Lace up and stay ready!"
        width="max-w-[900px]"
      />

      <Suspense fallback={<Loading />}>
        <MyApplyList
          registrationPromise={myRegistrationsPromise(user && user.email)}
        />
      </Suspense>
    </div>
  );
}

export default MyApply;
