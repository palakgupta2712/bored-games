import React, { useEffect, useState } from "react";
import EntryScreen from "../components/EntryScreen/EntryScreen";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import { Redirect } from "react-router";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      {isLoading && <EntryScreen />}
      {!isLoading && (
        <>
          <Redirect to="/home" />
        </>
      )}
    </React.Fragment>
  );
}

export default Home;
