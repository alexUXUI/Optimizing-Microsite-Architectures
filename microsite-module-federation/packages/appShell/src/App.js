import React from "react";

const RemoteButtonOne = React.lazy(() => import("app1/Button"));
const RemoteButtonTwo = React.lazy(() => import("app2/Button"));

const appShellStyles = {
  margin: "20px",
  padding: "20px",
  border: "2px dashed cornflowerblue",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

const h1Styles = {
  textAlign: "center",
  color: "cornflowerblue",
  fontFamily: "Verdana",
};

const sectionStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

const borderStyle = (color) => {
  return {
    padding: "20px",
    border: `2px dashed ${color}`,
  };
};

const headerStyle = (color) => {
  return {
    fontFamily: "Verdana",
    color: `${color}`,
  };
};

const App = () => (
  <div>
    <h1 style={h1Styles}>App Shell</h1>
    <main style={appShellStyles}>
      <React.Suspense
        fallback={
          <h2 style={headerStyle("tomato")}>
            Loading Components from App 1...
          </h2>
        }
      >
        <section style={sectionStyles}>
          <h2 style={headerStyle("tomato")}>Components from App 1:</h2>
          <div style={borderStyle("tomato")}>
            <RemoteButtonOne />
          </div>
        </section>
      </React.Suspense>
      <React.Suspense
        fallback={
          <h2 style={headerStyle("rgb(25, 184, 104)")}>
            Loading Components from App 1...
          </h2>
        }
      >
        <section style={sectionStyles}>
          <h2 style={headerStyle("rgb(25, 184, 104)")}>
            Components from App 2
          </h2>
          <div style={borderStyle("rgb(25, 184, 104)")}>
            <RemoteButtonTwo />
          </div>
        </section>
      </React.Suspense>
    </main>
  </div>
);

export default App;
