import React from "react";

const ErrorPage = () => {
  return (
    <div>
      Something went wrong!!!
      <button onClick={() => window.location.reload()}>Try to reload</button>
    </div>
  );
};

export default ErrorPage;
