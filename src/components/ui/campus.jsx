import React from "react";
import CampusInfo from "./campusInfo";
import Basic_tile from "../core/basic_tile";

const Campus = () => {
  return (
    <div>
      {CampusInfo.map((item) => {
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

export default Campus;
