import React, { useState } from "react";
//All the svg files
import './Sidebar.css';
import logo from './logo.svg';
import { FaMizuni } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { RiTeamLine } from "react-icons/ri";
import { SiSteam } from "react-icons/si";
import { FcVideoProjector } from "react-icons/fc";
import { ImFileVideo } from "react-icons/im";
import { AiOutlineLogout } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";


import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 3.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const Logo = styled.div`
  width: 4rem;
`;
const SlickBar = styled.ul`
  color: green;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to left, #803bec 1%, #fff 100%);;
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  buttom: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  z-index:1;
  @media screen and (max-width: 600px) {
    z-index:1;
    width: ${(props) => (props.clicked ? "11rem" : "3.5rem")};
  }
  @media screen and (max-width: 992px) {
    z-index:1;
    width: ${(props) => (props.clicked ? "11rem" : "3.5rem")};
    
  }
`;
const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding:1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid white;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;
const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
  color:white;
`;
const Profile = styled.div`
  width: ${(props) => (props.clicked ? "9rem" : "3rem")};
 
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;
  z-index:1;
  img {
    width:2.5rem;
    height:2.5rem;
    border-radius:50%;
    cursor:pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding:2px;
    }
  }
`;
const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  background-color:rgb(142,80,238);
  border-radius: 10px ;
  
`;
const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);
  const handleProfileClick = () => setprofileClick(!profileClick);
  return (
    <div className="Big">
      <Button clicked={click} onClick={() => handleClick()}>
        <FaMizuni />
      </Button>
      <div className="SidebarContainer">
        <Logo>
        <img src={logo} alt="logo" />
        </Logo>
        <SlickBar clicked={click}>
          <Item
            onClick={() => setClick(false)} exact
            activeClassName="active"to="/">
            <AiTwotoneHome alt="Home" />
            <Text clicked={click}>Home</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/team"
          >
            <RiTeamLine alt="Team" />
            <Text clicked={click}>Team</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/calender"
          >
            <SiSteam alt="Calender" />
            <Text clicked={click}>Live class</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/documents"
          >
            <ImFileVideo alt="Documents" />
            <Text clicked={click}>Documents</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/projects" >
            <FcVideoProjector alt="Projects" />
            <Text clicked={click}>Projects</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/VideoGalry" >
            <FaPhotoVideo alt="Projects" />
            <Text clicked={click}>VideoGalry</Text>
          </Item>
          <Item
            onClick={() => setClick(false)}
            activeClassName="active"
            to="/Announcement" >
            <GrAnnounce alt="Announcement" />
            <Text clicked={click}>Announcement</Text>
          </Item>

        </SlickBar>
        <Profile clicked={profileClick}>
          <img
            onClick={() => handleProfileClick()}
            src="https://picsum.photos/200"
            alt="Profile"
          />
          <Details clicked={profileClick}>
            <Name>
              <h4><b>Ranjeet</b></h4>
              <a href="/#">view&nbsp;profile</a>
            </Name>
            <Logout>
              <AiOutlineLogout alt="logout" />
            </Logout>
          </Details>
        </Profile>
      </div>
    </div>
  );
};
export default Sidebar;