import { Helmet } from "react-helmet-async";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VolunteerDetails = () => {
  const volunteer = useLoaderData();

  const {
    thumbnail,
    postTitle,
    description,
    categoryBox,
    location,
    numberOfVolunteers,
    date,
    _id,
    organizerName,
    organizerEmail,
  } = volunteer;

  const handleDisable = () => {
    if (numberOfVolunteers === 0 || !numberOfVolunteers) {
      toast(
        "Number of volunteers isn't included. You should apply for another post"
      );
    }
  };

  return (
    <div className="container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <ScrollRestoration></ScrollRestoration>
      <Helmet>
        <title>Post Details | ActifyNow</title>
      </Helmet>
      <h2 className="text-center text-blue-400 text-3xl md:text-5xl font-bold mb-5">
        {postTitle}
      </h2>
      <img
        src={thumbnail}
        className="w-full h-[500px] rounded-xl"
        alt={postTitle}
      />
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        <p className="font-bold justify-center text-center flex items-center text-xl border-2 border-blue-400 rounded-xl p-2">
          {categoryBox ? categoryBox : "No Category Selected"}
        </p>
        <p className="font-bold justify-center text-center flex items-center border-2 p-2 border-blue-400 rounded-xl text-xl">
          Location: {location ? location : "No location selected"}
        </p>
        <p className="font-bold justify-center text-center flex items-center border-2 p-2 border-blue-400 rounded-xl text-xl">
          {"Number of volunteers needed: "}
          {numberOfVolunteers ? numberOfVolunteers : " Nothing Mentioned"}
        </p>
        <p className="font-bold justify-center text-center flex items-center border-2 p-2 border-blue-400 rounded-xl text-xl text-red-500">
          Deadline: {date}
        </p>
        <p className="font-bold justify-center text-center flex items-center border-2 p-2 border-blue-400 rounded-xl text-xl">
          Organizer: {organizerName ? organizerName : "Nothing Mentioned"}
        </p>
      </div>
      <p className="mt-10 text-center text-xl font-bold">
        {description ? description : "No Description Added"}
      </p>
      <div className="mt-10 flex justify-center">
        {numberOfVolunteers > 0 ? (
          <Link
            to={`/apply-volunteer/${_id}`}
            className={`btn font-bold text-xl text-blue-400 bg-blue-50 w-1/2 md:w-1/3 hover:scale-105 transition-transform`}
          >
            <button onClick={handleDisable}>Be A Volunteer</button>
          </Link>
        ) : (
          <button
            className="btn font-bold text-xl text-blue-400 bg-blue-50 w-1/2 md:w-1/3 hover:scale-105 transition-transform"
            onClick={handleDisable}
          >
            Be A Volunteer
          </button>
        )}
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default VolunteerDetails;
