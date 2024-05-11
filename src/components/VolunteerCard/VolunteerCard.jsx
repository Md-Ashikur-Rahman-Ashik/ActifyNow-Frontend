import { Link } from "react-router-dom";

const VolunteerCard = ({ vol }) => {
  const { title, thumbnail, category, deadline, _id } = vol;

  return (
    <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform">
      <figure>
        <img src={thumbnail} className="h-96 w-full" alt="Album" />
      </figure>
      <div className="p-8">
        <div className="flex justify-between mb-2">
          <p className="font-bold">{category}</p>
          <p className="font-bold text-red-500">Deadline: {deadline}</p>
        </div>
        <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">
          {title}
        </h2>
        <div className="">
          <Link to={`/volunteer/${_id}`}>
            <button className="btn text-blue-400 bg-blue-50 font-bold w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
