/** @format */

import { useEffect, useState } from "react";
import { fetchHomeDetails } from "../actions/home.action";
import HomeComp from "./home";

function Home() {
  const [homeDetails, setHomeDetails] = useState([]);
  const [homeLoader, setHomeLoader] = useState(false);
  const [addBrand, setAddBrand] = useState(false);

  const handleFetchHomeDetails = () => {
    console.log('main api calling');
    fetchHomeDetails({
      setHomeDetails: setHomeDetails,
      setHomeLoader: setHomeLoader,
    });
  }

  useEffect(() => {
    handleFetchHomeDetails();
  }, [addBrand]);

  return <HomeComp homeDetails={homeDetails} loader={homeLoader} setAddBrand={setAddBrand} addBrand={addBrand} />;
}

export default Home;
