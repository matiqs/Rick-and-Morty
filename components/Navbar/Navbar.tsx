import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "./Navbar.module.css";
import Logo from "../../public/assets/images/logo.png";
import SidebarLogo from "../../public/assets/images/sidebar-logo.png";
import { NavbarContainer, SideBarItem, SideBarMenu } from "./StyledNavbar";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Navbar = ({ sidebar, showSidebar }) => {
  return (
    <div id="sidebar">
      <NavbarContainer>
        <FaIcons.FaBars onClick={showSidebar} />
        <Link href={"/"} passHref>
          <Image src={Logo} width={200} height={55} alt="" />
        </Link>
      </NavbarContainer>

      <nav
        className={sidebar ? `${style.sidebar} ${style.active}` : style.sidebar}
      >
        <SideBarMenu onClick={showSidebar}>
          <Image src={SidebarLogo} width={250} height={250} alt="" />
          <Link href={"/"} passHref>
            <SideBarItem>
              <MdIcons.MdSpaceDashboard />
              DASHBOARD
            </SideBarItem>
          </Link>
          <Link href={"/characters"} passHref>
            <SideBarItem>
              <MdIcons.MdGroups />
              CHARACTERS
            </SideBarItem>
          </Link>
          <Link href={"/episodes"} passHref>
            <SideBarItem>
              <MdIcons.MdOutlineVideoLibrary />
              EPISODES
            </SideBarItem>
          </Link>
          <Link href={"/locations"} passHref>
            <SideBarItem>
              <MdIcons.MdLocationPin />
              LOCATIONS
            </SideBarItem>
          </Link>
        </SideBarMenu>
      </nav>
    </div>
  );
};

export default Navbar;
