import { useContext, useEffect, useState } from "react";
import MyCard from "../MyCard/MyCard";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ManagePost = () => {
  const { user } = useContext(AuthContext);
  // const volunteer = useLoaderData();
  // console.log(volunteer);

  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/volunteers?organizerEmail=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setVolunteer(res.data));
  }, [volunteer, user?.email]);

  // console.log(volunteer);
  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet>
        <title>Manage My Post | ActifyNow</title>
      </Helmet>
      {volunteer?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-blue-400">
          Your Added Posts will be shown here
        </h2>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {volunteer?.map((vol) => (
          <MyCard key={vol._id} vol={vol}></MyCard>
        ))}
      </div>
    </div>
  );
};

export default ManagePost;
