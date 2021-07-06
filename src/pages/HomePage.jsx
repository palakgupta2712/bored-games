import React, { useEffect, useState } from "react";
import EntryScreen from "../components/EntryScreen/EntryScreen";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      {isLoading && <EntryScreen />}
      {!isLoading && (
        <>
          <Navbar logo="BORED." />
          <Content />
        </>
      )}
    </React.Fragment>
  );
}

export default Home;
