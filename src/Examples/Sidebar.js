import React from "react";

import Sidebar from "../Sidebar/Sidebar";

const SidebarExample = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} />
      <button
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="btn-position"
      >
        open
      </button>
    </>
  );
};

export default SidebarExample;
