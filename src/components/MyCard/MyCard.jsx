import { Link } from "react-router-dom";

const MyCard = ({ vol }) => {
  const { postTitle, thumbnail, categoryBox, date, _id } = vol;

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
          <Link>
            <button className="btn mb-3 text-blue-400 bg-blue-50 font-bold w-full">
              Update Post
            </button>
          </Link>
          <button className="btn text-red-500 bg-blue-50 font-bold w-full">
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
