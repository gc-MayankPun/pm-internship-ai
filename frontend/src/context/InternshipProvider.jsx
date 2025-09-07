import { useState } from "react";
import { InternshipContext } from "./InternshipContext";

export const InternshipProvider = ({ children }) => {
  const [recommended, setRecommended] = useState([]);
  const [allRelated, setAllRelated] = useState([]);

  return (
    <InternshipContext.Provider
      value={{ recommended, setRecommended, allRelated, setAllRelated }}
    >
      {children}
    </InternshipContext.Provider>
  );
};