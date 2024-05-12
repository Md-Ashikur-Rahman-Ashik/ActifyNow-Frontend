import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const UpdatePost = () => {
  const post = useLoaderData();
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => {
    setClicked(true);
  };

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
  } = post;

  const [startDate, setStartDate] = useState(new Date());

  const handleUpdateVolunteer = (event) => {
    event.preventDefault();

    const form = event.target;
    const thumbnail = form?.thumbnail?.value;
    const postTitle = form?.postTitle?.value;
    const description = form?.description?.value;
    const categoryBox = document?.getElementById("category")?.value;
    const location = form?.location?.value;
    const numberOfVolunteers = parseInt(form?.numberOfVolunteers?.value);
    const date = startDate?.toLocaleDateString();

    const updatedVolunteer = {
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
      `https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/volunteer/${_id}`,
      {
        method: "PUT",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedVolunteer),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer Post Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Updating Volunteer Post Failed",
            icon: "error",
            confirmButtonText: "Exit",
          });
        }
      });
  };

  return (
    <div className="container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <Helmet>
        <title>Update Volunteer Post | ActifyNow</title>
      </Helmet>
      <h2 className="text-3xl mb-2 font-extrabold text-blue-400 text-center">
        Update Post Of {postTitle}
      </h2>
      <p className="flex justify-end">
        <button
          onClick={handleClicked}
          className="btn border-2 border-blue-400 bg-blue-50 w-1/4 font-bold"
        >
          Edit Post
        </button>
      </p>
      <form onSubmit={handleUpdateVolunteer}>
        {/* Thumbnail and Post Title */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Thumbnail
            </label>
            <div className="flex">
              {clicked ? (
                <input
                  type="text"
                  name="thumbnail"
                  defaultValue={thumbnail}
                  placeholder={thumbnail}
                  className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
                />
              ) : (
                <img src={thumbnail} className="h-64 w-full rounded-xl"></img>
              )}
            </div>
          </div>
          <div className="md:w-1/2 mt-4">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Post Title
            </label>
            <div className="flex">
              {clicked ? (
                <input
                  type="text"
                  name="postTitle"
                  defaultValue={postTitle}
                  placeholder={postTitle}
                  className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
                />
              ) : (
                <p className="font-bold">{postTitle}</p>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Description
            </label>
            <div className="flex">
              {clicked ? (
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder={description}
                  className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
                />
              ) : (
                <p className="font-bold">{description}</p>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-blue-400">Category</span>
              </div>
              {clicked ? (
                <select className="select select-bordered" id="category">
                  <option>Healthcare</option>
                  <option>Education</option>
                  <option> Social Service</option>
                  <option>Animal Welfare</option>
                </select>
              ) : (
                <p className="font-bold">{categoryBox}</p>
              )}
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
              {clicked ? (
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder={location}
                  className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
                />
              ) : (
                <p className="font-bold">{location}</p>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Number of Volunteers Needed
            </label>
            <div className="flex">
              {clicked ? (
                <input
                  type="text"
                  name="numberOfVolunteers"
                  defaultValue={numberOfVolunteers}
                  placeholder={numberOfVolunteers}
                  className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
                />
              ) : (
                <p className="font-bold">{numberOfVolunteers}</p>
              )}
            </div>
          </div>
        </div>
        {/* Description and Deadline */}
        <div className="md:flex flex-col items-center gap-4 mt-2">
          <div className="md:w-1/2">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Deadline
            </label>
            {clicked ? (
              <DatePicker
                selected={startDate}
                className="border-2 p-2 rounded-xl"
                onChange={(date) => setStartDate(date)}
              />
            ) : (
              <p className="font-bold">{date}</p>
            )}
          </div>
        </div>
        {/* Organizer Name and Organizer Email */}
        <div className="mt-2">
          <div className="md:w-1/2 mx-auto">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Organizer Name
            </label>
            <div className="flex">
              <p className="font-bold">{organizerName}</p>
            </div>
          </div>
          <div className="md:w-1/2 mx-auto">
            <label className="block mb-1 text-sm font-medium text-blue-400">
              Organizer Email
            </label>
            <div className="flex">
              <p className="font-bold">{organizerEmail}</p>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Update Post"
          className="btn w-1/2 mt-4 hover:scale-105 transition-transform bg-blue-50 text-blue-400 block mx-auto"
        />
      </form>
    </div>
  );
};

export default UpdatePost;
