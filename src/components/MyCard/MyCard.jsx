import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCard = ({ vol }) => {
  const { postTitle, thumbnail, categoryBox, date, _id } = vol;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b9a11-server-side-md-ashikur-rahman-ashik.vercel.app/volunteer/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={thumbnail} className="h-56 w-full" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">{categoryBox}</p>
          <p className="font-bold text-red-500">Deadline: {date}</p>
        </div>
        <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">
          {postTitle}
        </h2>
        <div>
          <Link to={`/volunteer/${_id}`}>
            <button className="btn mb-3 text-blue-400 bg-blue-50 font-bold w-full">
              View Details
            </button>
          </Link>
          <Link to={`/update-post/${_id}`}>
            <button className="btn mb-3 text-blue-400 bg-blue-50 font-bold w-full">
              Update Post
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn text-red-500 bg-blue-50 font-bold w-full"
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
