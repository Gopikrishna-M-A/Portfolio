import React from "react";
import styled from "styled-components";

const CircleContainer = styled.div`
  z-index: -1;  
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:radial-gradient(#EAEAF1 10%, transparent 11%) 8px 8px;
  background-size: 20px 20px;
  background-position: 23px 23px;
  pointer-events: none;
`;

const BackgroundCircles = () => {
  return <CircleContainer />;
};

export default BackgroundCircles;
