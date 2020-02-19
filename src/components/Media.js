import React from "react";
import axios from "axios";

const Media = props => {
  if (props.mediaType === "image") {
    return <img alt={props.mediaTitle} src={props.src} />;
  } else if (props.mediaType === "video") {
    return (
      <iframe
        alt={props.mediaTitle}
        title={props.mediaTitle}
        width={420}
        height={315}
        allowfullscreen={true}
        src={props.src}
      />
    );
  } else {
    return <div>Uknown media type :'(</div>;
  }
};

export default Media;
