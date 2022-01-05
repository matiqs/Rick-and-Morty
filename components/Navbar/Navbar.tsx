import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "./Navbar.module.css";
// import Logo from "../../public/assets/images/Logo.png";
import SidebarLogo from "../../public/assets/images/sidebar-logo.png";
import { NavbarContainer, SideBarItem, SideBarMenu } from "./StyledNavbar";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div>
      <NavbarContainer>
        <FaIcons.FaBars onClick={showSideBar} />

        {/* <Image src={Logo} width={220} height={60} alt="" /> */}
      </NavbarContainer>
      <nav
        className={sideBar ? `${style.sidebar} ${style.active}` : style.sidebar}
      >
        <SideBarMenu onClick={showSideBar}>
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
