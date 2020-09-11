import React, { useState } from "react";

import "./styles/App.css";
import { Snap } from "./types";
import { SnapList } from "./components/SnapsList";

type AppState = {
  snaps: Snap[];
};

const App: React.FunctionComponent = () => {
  const [snaps, setSnaps] = React.useState<AppState["snaps"]>([]);

  return (
    <div>
      <SnapList
        snaps={snaps}
        onLoad={(snapList: Snap[]) => setSnaps(snapList)}
      />
    </div>
  );
};

export default App;
