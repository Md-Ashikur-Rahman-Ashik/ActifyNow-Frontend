import { Link } from "react-router-dom";

const VolunteerTable = ({ vol }) => {
  const { postTitle, thumbnail, categoryBox, date, _id } = vol;

  return (
    <>
      <td>
        <div className="flex flex-col gap-2 lg:flex-row items-center md:gap-3">
          <div className="avatar hidden lg:block">
            <div className="mask mask-squircle w-12 h-12">
              <img src={vol.thumbnail} />
            </div>
          </div>
          <div>
            <div className="lg:font-bold text-center md:text-xl text-gray-400">
              {vol.postTitle}
            </div>
          </div>
        </div>
      </td>
      <td className="md:text-xl">{vol.categoryBox}</td>
      <td className="text-red-500 md:text-xl">{vol.date}</td>
      <th>
        <Link to={`/volunteer/${_id}`}>
          <button className="btn btn-sm text-blue-400 bg-blue-50 md:font-bold w-1/2 md:w-full">
            View Details
          </button>
        </Link>
      </th>
    </>
  );
};

export default VolunteerTable;
