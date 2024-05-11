import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/needVolunteer",
        { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        setVolunteer(data);
      });
  }, [volunteer]);

  return (
    <div className="mt-20">
      <h2 className="text-5xl text-center font-bold text-blue-400">
        We Need Volunteers
      </h2>
      <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {volunteer
          .map((vol) => <VolunteerCard key={vol._id} vol={vol}></VolunteerCard>)
          .slice(0, 6)}
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to={"/need-volunteer"}
          className="font-bold text-xl btn w-1/3 bg-blue-50 text-blue-400"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default NeedVolunteer;
