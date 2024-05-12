import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import NeedVolunteer from "../NeedVolunteer/NeedVolunteer";
import VolunteerStories from "../VolunteerStories/VolunteerStories";
import TipsVolunteer from "../TipsVolunteer/TipsVolunteer";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-349px)] mx-2 md:mx-10">
      <Helmet>
        <title>Home | ActifyNow</title>
      </Helmet>
      <Banner></Banner>
      <NeedVolunteer></NeedVolunteer>
      <VolunteerStories></VolunteerStories>
      <TipsVolunteer></TipsVolunteer>
    </div>
  );
};

export default Home;
