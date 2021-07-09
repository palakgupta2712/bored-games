import React, { useEffect, useState } from "react";
import EntryScreen from "../components/EntryScreen/EntryScreen";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <React.Fragment>
      {isLoading && <EntryScreen />}
      {!isLoading && (
        <>
          <Navbar logo="BORED." />
          <Content />
          <Footer />
        </>
      )}
    </React.Fragment>
  );
}

export default Home;
