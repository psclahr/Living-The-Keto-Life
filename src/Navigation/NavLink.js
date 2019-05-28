import { NavLink as RRDNavLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(RRDNavLink)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background: skyblue;
  }
`;

export default NavLink;
