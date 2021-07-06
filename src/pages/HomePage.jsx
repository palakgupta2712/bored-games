import React, { useEffect, useState } from "react";
import EntryScreen from "../components/EntryScreen/EntryScreen";

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
      {!isLoading && "BORED."}
    </React.Fragment>
  );
}

export default Home;
