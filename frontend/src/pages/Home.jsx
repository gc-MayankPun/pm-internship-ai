import React, { useCallback } from "react";
import { fetchInternships } from "../utils/testBackend";

const Home = () => {
  const sendRequest = useCallback(() => {
    fetchInternships().then((data) => console.log(data));
  }, []);

  return (
    <div className="h-screen bg-[#111] text-white">
      <button onClick={sendRequest}>Connect Backend</button>
    </div>
  );
};

export default Home;
