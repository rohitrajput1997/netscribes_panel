/** @format */

import { useEffect, useState } from "react";
import { fetchHomeDetails } from "../actions/home.action";
import HomeComp from "./home";

function Home() {
  const [homeDetails, setHomeDetails] = useState([]);
  const [homeLoader, setHomeLoader] = useState(false);

  useEffect(() => {
    fetchHomeDetails({
      setHomeDetails: setHomeDetails,
      setHomeLoader: setHomeLoader,
    });
  }, []);

  return <HomeComp homeDetails={homeDetails} loader={homeLoader} />;
}

export default Home;
