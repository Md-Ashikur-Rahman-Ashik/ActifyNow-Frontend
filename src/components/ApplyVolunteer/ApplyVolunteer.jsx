import { useLoaderData } from "react-router-dom";

const ApplyVolunteer = () => {
  const volunteer = useLoaderData();
  console.log(volunteer);

  return (
    <div className="hero container p-6 mx-auto min-h-[calc(100vh-349px)]">
      <h2>This is apply volunteer page</h2>
    </div>
  );
};

export default ApplyVolunteer;
