import React from "react";
import ContentSep from "./content_sep";

function BasicTile(props) {
  // switch the postion of image and text with respect to Id number
  if (props.Id % 2) {
    return (
      <div className="container-fluid">
        <div className="tile-main-div row">
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <div className="tile-content">
              <h1 className="tile-heading">{props.Heading}</h1>
              <p className="tile-description">{props.Text}</p>
              <div className="tile-link">
                <a href={props.Link} target="_blank" rel="noreferrer">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <img className="tile-image" src={props.Image} alt="Slide" />
          </div>
        </div>
        <ContentSep />
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="tile-main-div row">
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <img className="tile-image" src={props.Image} alt="Slide" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 tile-sub">
            <div className="tile-content">
              <h1 className="tile-heading">{props.Heading}</h1>
              <p className="tile-description">{props.Text}</p>
              <div className="tile-link">
                <a href={props.Link} target="_blank" rel="noreferrer">
                  <p></p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ContentSep />
      </div>
    );
  }
}

export default BasicTile;
