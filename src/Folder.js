import React, { useState } from "react";
import "./App.css"

const Folder = ({ files }) => {
  console.log(files.children,"children");
  const [expand,setExpand] = useState(false)
  return (
    <div>
      <div className="folder" onClick={()=>setExpand(!expand)}>{files.isFolder && <button className={expand? "expand" : ""}>{">"}</button>}{files.name}</div>
      <div className="children">
        {
            files.children && expand && files?.children.map((child) => (
                <Folder files={child} key={child} />
              ))
        }
      </div>
    </div>
  );
};

export default Folder;
