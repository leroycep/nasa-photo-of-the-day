import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Media from "./Media";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const APODCard = props => {
  //const date = props.date !== undefined ? props.date : new Date();

  const [title, setTitle] = useState("title");
  const [mediaType, setMediaType] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [explanation, setExplanation] = useState("explanation");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: { api_key: "DEMO_KEY" }
      })
      .then(res => {
        console.log(res);
        setTitle(res.data.title);
        setMediaType(res.data.media_type);
        setMediaUrl(res.data.url); // TODO: HD url?
        setExplanation(res.data.explanation);
      })
      .catch(err => console.log("Could not get picture of the day", err));
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <Media mediaTitle={title} mediaType={mediaType} src={mediaUrl} />
      <h3>Explanation</h3>
      <p>{explanation}</p>
    </Container>
  );
};

export default APODCard;
