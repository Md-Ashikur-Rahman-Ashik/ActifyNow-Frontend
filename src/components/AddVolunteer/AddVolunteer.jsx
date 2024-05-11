import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const handleAddVolunteer = (event) => {
    event.preventDefault();

    const form = event.target;
    const thumbnail = form?.thumbnail?.value;
    const postTitle = form?.postTitle?.value;
    const description = form?.description?.value;
    const categoryBox = document?.getElementById("category")?.value;
    const location = form?.location?.value;
    const numberOfVolunteers = parseInt(form?.numberOfVolunteers?.value);
    const date = startDate?.toLocaleDateString();

    const newVolunteer = {
      thumbnail,
      postTitle,
      description,
      categoryBox,
      location,
      numberOfVolunteers,
      date,
    };

    // Send data to the server
    fetch(
      "https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/volunteers",
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
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer Post Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Adding Adding Post failed",
            icon: "error",
            confirmButtonText: "Exit",
          });
        }
      });
  };

  return (
    <div className="container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet>
        <title>Add Volunteer Post | ActifyNow</title>
      </Helmet>
      <h2 className="text-3xl font-extrabold text-blue-400 text-center">
        Add Volunteer Post
      </h2>
      <form onSubmit={handleAddVolunteer}>
        {/* Thumbnail and Post Title */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Thumbnail
            </label>
            <div className="flex">
              <input
                type="text"
                name="thumbnail"
                required
                placeholder="Thumbnail Image URL"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Post Title
            </label>
            <div className="flex">
              <input
                type="text"
                name="postTitle"
                required
                placeholder="Post Title"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Description
            </label>
            <div className="flex">
              <input
                type="text"
                name="description"
                required
                placeholder="Description"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-400">Category</span>
              </div>
              <select className="select select-bordered" id="category">
                <option>Healthcare</option>
                <option>Education</option>
                <option> Social Service</option>
                <option>Animal Welfare</option>
              </select>
            </label>
          </div>
        </div>
        {/* Location and Number of Volunteers */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Location
            </label>
            <div className="flex">
              <input
                type="text"
                name="location"
                required
                placeholder="Location"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Number of Volunteers Needed
            </label>
            <div className="flex">
              <input
                type="text"
                name="numberOfVolunteers"
                required
                placeholder="Number of Volunteers Needed"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Description and Deadline */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Deadline
            </label>
            <DatePicker
              selected={startDate}
              className="border-2 p-2 rounded-xl"
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        {/* Organizer Name and Organizer Email */}
        <div className="mt-2">
          <div className="md:w-1/2 mx-auto">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Organizer Name
            </label>
            <div className="flex">
              <p className="font-bold">{user.displayName}</p>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Organizer Email
            </label>
            <div className="flex">
              <p className="font-bold">{user.email}</p>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Post"
          className="btn w-1/2 mt-4 hover:scale-105 transition-transform bg-blue-50 text-blue-400 block mx-auto"
        />
      </form>
    </div>
  );
};

export default AddVolunteer;
