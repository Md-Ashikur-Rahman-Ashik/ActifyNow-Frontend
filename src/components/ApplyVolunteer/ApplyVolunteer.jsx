import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ApplyVolunteer = () => {
  const volunteer = useLoaderData();
  const { user } = useContext(AuthContext);
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
    _id,
  } = volunteer;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const volunteerNameField = document.getElementById("volunteerName");
    const volunteerName = volunteerNameField.innerText;
    const volunteerEmailField = document.getElementById("volunteerEmail");
    const volunteerEmail = volunteerEmailField.innerText;
    const suggestion = form.suggestion.value;

    const newVolunteer = {
      thumbnail,
      postTitle,
      description,
      categoryBox,
      location,
      numberOfVolunteers,
      date,
      organizerName,
      organizerEmail,
      volunteerName,
      volunteerEmail,
      suggestion,
    };

    fetch(
      `https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/newVolunteer`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newVolunteer),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer Request Send Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Adding Volunteer Request failed",
            icon: "error",
            confirmButtonText: "Exit",
          });
        }
      });
  };

  const decreaseCount = (_id) => {
    fetch(
      `https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/newVolunteer/${_id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hero container p-6 mx-auto min-h-[calc(100vh-349px)] flex flex-col md:flex-row-reverse gap-5 justify-between"
    >
      <Helmet>
        <title>Apply As A Volunteer | ActifyNow</title>
      </Helmet>
      <div className="card bg-base-100 shadow-xl">
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
              {"Location: "}
              {location ? location : " No Data Available"}
            </p>
            <p className="font-bold">
              Number of Volunteer Needed:{" "}
              {numberOfVolunteers ? numberOfVolunteers : "No Data Available"}
            </p>
          </div>
          <div className="flex justify-between gap-10 mb-2">
            <p className="font-bold">
              {"Organizer Name: "}
              {organizerName ? organizerName : " No Data Available"}
            </p>
            <p className="font-bold">
              {"Organizer Email: "}
              {organizerEmail ? organizerEmail : " No Data Available"}
            </p>
          </div>
          <h2 className="text-xl font-bold mb-2 text-blue-400 text-center">
            {postTitle}
          </h2>
          <p className="font-bold text-center">
            {description ? description : "No Data Available"}
          </p>
        </div>
      </div>
      <div className="card bg-blue-50 shadow-xl p-5 text-center">
        <p className="font-bold">
          Volunteer Name: <span id="volunteerName">{user?.displayName}</span>
        </p>
        <p className="font-bold">
          Volunteer Email: <span id="volunteerEmail">{user?.email}</span>
        </p>
        <div className="mt-2">
          <label className="mb-2 flex justify-start text-xl font-medium text-blue-400">
            Suggestion
          </label>
          <div className="flex">
            <input
              type="text"
              name="suggestion"
              required
              placeholder="Suggestion"
              className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
            />
          </div>
        </div>
        <input
          onClick={() => decreaseCount(_id)}
          className="font-bold btn mt-4 bg-blue-100 text-blue-400"
          type="submit"
          value="Request"
        />
        <div className="mt-2 flex gap-2">
          <p className="mb-2 flex justify-start text-xl font-medium text-blue-400">
            Status:
          </p>
          <p name="status" className="text-xl font-bold">
            Requested
          </p>
        </div>
      </div>
    </form>
  );
};

export default ApplyVolunteer;
