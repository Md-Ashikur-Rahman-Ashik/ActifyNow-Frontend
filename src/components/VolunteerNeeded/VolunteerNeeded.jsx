import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerCard from "../VolunteerCard/VolunteerCard";
import { ScrollRestoration } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const VolunteerNeeded = () => {
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
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet><title>All Volunteer Request Post | ActifyNow</title></Helmet>
      <ScrollRestoration></ScrollRestoration>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {volunteer.map((vol) => (
          <VolunteerCard key={vol._id} vol={vol}></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeeded;
