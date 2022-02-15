import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

const NavbarWrapper = styled.div`
  background-color: black;
  position: relative;
  height: 5rem;
  color: white;
`;
const LinkCont = styled.div`
  float: right;
  display: flex;
`;

const Link = styled.a`
  color: white;
  width: ${(prop) => (prop.size <= 900 ? "170px" : "100px")};
  text-align: center;
  margin: 1rem;
  border: 2px solid blueviolet;
  border-radius: 10px;
  position: inherit;
  top: 1rem;
  padding: 1rem;
  text-decoration: none;
  font-size: ${(prop) => (prop.size <= 900 ? "1rem" : "1.3rem")};

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 5px blueviolet;
  }
`;
export default function Navbar() {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  const handleScreenResize = () => {
    setWindowSize(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  });
  return (
    <NavbarWrapper>
      <Logo windowSize={windowSize} />

      <LinkCont>
        <Link href="https://www.youtube.com/" size={windowSize}>
          YOUTUBE
        </Link>
        <Link href="https://reactjs.org/" size={windowSize}>
          REACT
        </Link>
      </LinkCont>
    </NavbarWrapper>
  );
}
