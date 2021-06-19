import React from "react";
import { Anchor, Avatar, Box, Image, Menu, Nav } from "grommet";
import { Notification, Search, User } from "grommet-icons";
// import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/sportsVisionLogo_edit.svg";

const NavigationContainer = (props) => (
  <Box
    id="navContatiner"
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const NavBar = () => (
  <NavigationContainer className="sticky-nav">
    <Box direction="row" align="center" gap="small">
      <Link id="logoLink" to={`/home`} title="home">
        <Box className="logo" height="xxsmall" width="xxsmall">
          <Image fit="cover" src={logo} />
        </Box>
      </Link>
      <NavLinks />
    </Box>
    <Nav
      className="nav-bar"
      direction="row"
      background="brand"
      id="navBar"
      pad="xxsmall"
    >
      <Anchor color="light-1" icon={<Search />} onClick={() => {}} />
      <Anchor color="light-1" icon={<Notification />} onClick={() => {}} />
      <AccountMenu />
    </Nav>
  </NavigationContainer>
);

const NavLinks = () => {
  return (
    <Nav direction="row">
      {navItems.map((item) => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  );
};

const navItems = [
  { label: "Home", href: "/home" },
  { label: "Stream", href: "/stream" },
  { label: "Wallet", href: "/wallet" },
];

const AccountMenu = () => {
  return (
    <Menu items={menuItems}>
      <Avatar>
        <User color="light-1" />
      </Avatar>
    </Menu>
  );
};

const menuItems = [
  { label: "Account", onClick: () => {} },
  { label: "Preferences", onClick: () => {} },
  { label: "Help Center", onClick: () => {} },
  { label: "Sign Out", onClick: () => {} },
];

export default NavBar;
