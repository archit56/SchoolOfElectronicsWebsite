import React from "react";
import EventInfo from "./eventInfo";
import Basic_tile from "../core/basic_tile";

const Event = () => {
  return (
    <div>
      {EventInfo.map((item) => {
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

export default Event;
