import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NeedVolunteer from "../NeedVolunteer/NeedVolunteer";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-349px)] mx-2 md:mx-10">
      <Helmet>
        <title>ActifyNow | Home</title>
      </Helmet>
      <Banner></Banner>
      <NeedVolunteer></NeedVolunteer>
    </div>
  );
};

export default Home;
