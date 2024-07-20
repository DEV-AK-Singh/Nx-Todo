import React from "react";

const AlertBox = ({cancelDelete}) => {
  const handleCheck = (e) => {
    cancelDelete();
  }
  return (
    <div role="alert" className="alert rounded-none border-white absolute max-w-md bottom-8">
    <span>Delete! Task will be deleted.</span>
      <div>
        <button className="btn btn-sm btn-ghost btn-outline rounded-none" onClick={handleCheck}>Cancel</button>
      </div>
    </div>
  );
};

export default AlertBox;
