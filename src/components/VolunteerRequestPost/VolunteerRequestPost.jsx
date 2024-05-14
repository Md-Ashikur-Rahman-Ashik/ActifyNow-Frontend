import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import VolunteerRow from "./VolunteerRow";
import { Helmet } from "react-helmet-async";

const VolunteerRequestPost = () => {
  const { user } = useContext(AuthContext);
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/newVolunteer?volunteerEmail=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setVolunteer(res.data));
  }, [volunteer, user?.email]);

  //   console.log(volunteer);

  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet><title>My Volunteer Request Post | ActifyNow</title></Helmet>
      {volunteer?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-blue-400">
          Your Volunteer Request Posts will be shown here
        </h2>
      )}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {volunteer?.length > 0 && (
            <thead>
              <tr>
                <th className="flex justify-center md:text-xl">Title</th>
                <th className="md:text-xl">Category</th>
                <th className="text-red-500 md:text-xl">Deadline</th>
                <th></th>
              </tr>
            </thead>
          )}
          <tbody>
            {volunteer.map((vol) => (
              <tr key={vol._id}>
                <VolunteerRow vol={vol}></VolunteerRow>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerRequestPost;
