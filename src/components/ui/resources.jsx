import React from "react";
import ResourcesInfo from "./campusInfo";
import Basic_tile from "../core/basic_tile";

const Resources = () => {
  return (
    <div>
      {ResourcesInfo.map((item) => {
        return (
          <Basic_tile
            Id={item.Id}
            Heading={item.Heading}
            Text={item.Text}
            Link={item.Link}
            Image={item.Image}
          />
        );
      })}
    </div>
  );
};

export default Resources;
