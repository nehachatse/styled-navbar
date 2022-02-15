import React from "react";
import styled from "styled-components";
import logo from "../logo.jpg";

const Image = styled.img`
  position: absolute;
  left: 2%;
  width: 10%;
  height: 100%;
  display: ${(prop) => (prop.size <= 900 ? "none" : "")};
`;
export default function Logo({ windowSize }) {
  return (
    <>
      <Image src={logo} alt="logo" size={windowSize} />
    </>
  );
}
