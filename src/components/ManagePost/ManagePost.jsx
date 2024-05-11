import { useLoaderData } from "react-router-dom";

const ManagePost = () => {
  const volunteer = useLoaderData();
    console.log(volunteer);
  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      {volunteer.length === 0 && <h2 className="font-bold text-center text-5xl text-blue-400">Your Added Item will be shown here</h2>}
    </div>
  );
};

export default ManagePost;
