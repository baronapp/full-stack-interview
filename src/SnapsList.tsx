import React from "react";

import fetchData from "./services/fetchData";
import "./styles/SnapsList.css";
import { Snap } from "./types";

type SnapListProps = {
  onLoad: (snaps: Snap[]) => void;
  snaps: Snap[];
};

class SnapsList extends React.PureComponent<SnapListProps> {
  componentDidMount() {
    const { onLoad } = this.props;

    fetchData()
      .then((x) => x.snaps)
      .then(onLoad)
      .catch(console.error);
  }

  render() {
    const { snaps } = this.props;

    return (
      <div>
        {snaps.length ? (
          <p>{JSON.stringify(snaps)}</p>
        ) : (
          <p>Loading snaps...</p>
        )}
      </div>
    );
  }
}

export default SnapsList;
