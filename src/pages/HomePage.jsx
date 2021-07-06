import React, { useEffect, useState } from "react";
import EntryScreen from "../components/EntryScreen/EntryScreen";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      {isLoading && <EntryScreen />}
      {!isLoading && <Navbar />}
    </React.Fragment>
  );
}

export default Home;
