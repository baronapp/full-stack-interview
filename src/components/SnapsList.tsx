import React, { useEffect } from "react";

import fetchData from "../services/fetchData";
import "../styles/SnapsList.css";
import { Snap } from "../types";

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void;
  snaps: Snap[];
};

export const SnapList: React.FunctionComponent<SnapListProps> = (props) => {
  useEffect(() => {
    fetchData()
      .then((data) => data.snaps)
      .then(props.onLoad)
      .catch(console.error);
  }, []);

  return (
    <div>
      {props.snaps.length ? (
        <p>{JSON.stringify(props.snaps)}</p>
      ) : (
        <p>Loading snaps...</p>
      )}
    </div>
  );
};
