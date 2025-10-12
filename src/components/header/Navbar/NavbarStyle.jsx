import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 90%;
  background-color: #b1bebe45;
  margin: 0 auto;
  border-radius: 2em;
  position: fixed;
  margin-top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px) brightness(1.9);
  border-top: 2px solid white;
  border-bottom: 2px solid white;

  @media (max-width: 950px) {
    height: 90px;
    width: 80%;
    border-radius: 2;
    padding: 0 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div``;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0 20px;
  line-height: 50px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 80px;
  margin-top: 0.9em;
`;

export const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    color: azure;
    text-shadow: 0 4px 10px rgb(0, 0, 0);
  }
`;


export const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 20;

  @media (max-width: 950px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  left: ${({ $open }) => ($open ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  padding-top: 120px;
  z-index: 15;

  ${MenuItem} {
    color: #fff;
    font-size: 1.8rem;
    margin: 20px 0;
  }
`;

export const MenuIconOpen = FiMenu;
export const MenuIconClose = FiX;
