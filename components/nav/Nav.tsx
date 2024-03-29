import { useState, useEffect } from "react";
import { NavProvider } from "../../contexts/NavContext";
import styled from "@emotion/styled";

import NavMenu from "./NavMenu";
import NavSignUp from "./NavSignUp";
import NavIcon from "./NavIcon";
import NavHamburger from "./NavHamburger";
import NavSidebar from "./NavSidebar";
import NavBackground from "./NavBackground";

export interface INavMenuItem {
  name: string;
  href: string;
}

const navMenuItems: INavMenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

const StyledNav = styled.nav<{ navPosition: boolean }>`
  height: ${(props) =>
    props.navPosition ? props.theme.spacings.xl : props.theme.spacings.xxl};

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  box-shadow: ${(props) => props.navPosition && props.theme.shadows.large};

  padding: 0 ${(props) => props.theme.spacings.md};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;

  transition: all ease ${(props) => props.theme.speed.slow};

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0 ${(props) => props.theme.spacings.sm};
  }
`;

const Nav = () => {
  const [navPosition, setNavPosition] = useState<boolean>(false);

  const onScroll = (): void => {
    if (window.scrollY > 20) {
      setNavPosition(true);
    } else {
      setNavPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <NavProvider>
      <NavBackground />
      <StyledNav navPosition={navPosition}>
        <NavMenu navMenuItems={navMenuItems} />
        <NavHamburger />
        <NavIcon />
        <NavSignUp />
        <NavSidebar navMenuItems={navMenuItems} />
      </StyledNav>
    </NavProvider>
  );
};

export default Nav;
