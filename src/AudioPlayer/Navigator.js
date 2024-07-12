import React from "react";
import { Backward, Forward } from "./Icons";

const Navigator = ({ prev, next, navigationButton }) => {
  return (
    <>
      <div className="ra-prev">
        <button onClick={prev}>
          {navigationButton ? navigationButton[0] : <Backward />}
        </button>
      </div>
      <div className="ra-next">
        <button onClick={next}>
          {navigationButton ? navigationButton[1] : <Forward />}
        </button>
      </div>
    </>
  );
};

export default Navigator;
