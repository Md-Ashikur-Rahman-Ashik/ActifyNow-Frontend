import { useLoaderData } from "react-router-dom";

const ApplyVolunteer = () => {
  const volunteer = useLoaderData();
  const {
    thumbnail,
    postTitle,
    description,
    categoryBox,
    location,
    numberOfVolunteers,
    date,
    organizerName,
    organizerEmail,
  } = volunteer;

  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)] flex">
      <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
        <figure>
          <img src={thumbnail} className="h-96 w-full" alt="Album" />
        </figure>
        <div className="p-8">
          <div className="flex justify-between mb-2">
            <p className="font-bold">{categoryBox}</p>
            <p className="font-bold text-red-500">Deadline: {date}</p>
          </div>
          <div className="flex justify-between gap-10 mb-2">
            <p className="font-bold">
              Location:
              {location ? location : " No Data Available"}
            </p>
            <p className="font-bold">
              Number of Volunteer Needed:{" "}
              {numberOfVolunteers ? numberOfVolunteers : "No Data Available"}
            </p>
          </div>
          <div className="flex justify-between gap-10 mb-2">
            <p className="font-bold">
              Organizer Name:
              {organizerName ? organizerName : " No Data Available"}
            </p>
            <p className="font-bold">
              Organizer Email:
              {organizerEmail ? organizerEmail : " No Data Available"}
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2 text-blue-400 text-center">
            {postTitle}
          </h2>
          <p className="font-bold text-center">{description ? description : "No Data Available"}</p>
        </div>
      </div>
      <form className="card bg-base-100 shadow-xl">
        
      </form>
    </div>
  );
};

export default ApplyVolunteer;
