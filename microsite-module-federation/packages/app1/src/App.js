import LocalButton from "./Button";
import React from "react";

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading... error!</div>}>
        <RemoteButton />
      </React.Suspense>
    </div>
  );
};

export default App;
