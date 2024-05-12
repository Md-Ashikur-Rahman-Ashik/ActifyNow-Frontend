import { useLoaderData } from "react-router-dom";
import MyCard from "../MyCard/MyCard";

const ManagePost = () => {
  const volunteer = useLoaderData();
  // console.log(volunteer);
  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      {volunteer.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-blue-400">
          Your Added Item will be shown here
        </h2>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {volunteer?.map((vol) => (
          <MyCard key={vol._id} vol={vol}></MyCard>
        ))}
      </div>
    </div>
  );
};

export default ManagePost;
