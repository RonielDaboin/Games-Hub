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
    height: 100px;
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
   width: 160px;
  height: auto;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px #d8a441);
  }
`;

export const Img = styled.img`
  width: 120px;
  height: 95px;
  margin-top: 1em;
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
  position: fixed;
  top: 28px;
  right: 80px;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  z-index: 3000;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);

  @media (min-width: 951px) {
    display: none;
  }
`;


export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: ${({ $open }) => ($open ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease-in-out;
  padding-top: 120px;
  z-index: 2000;

  ${MenuItem} {
    color: #fff;
    font-size: 2rem; /* 🔥 Aumenta el tamaño */
    margin: 20px 0;
    font-weight: 600; /* Más legible */
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);
    transition: transform 0.2s, color 0.2s;
    animation: fadeIn 3s ease both;
    
    &:hover {
      transform: scale(1.1);
      color: #d8a441; /* Resalta como tu logo */
    }
  }

  @media (max-height: 600px) {
    ${MenuItem} {
      font-size: 1.6rem; /* Evita overflow en pantallas chicas */
    }
  }


@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;



export const MenuIconOpen = FiMenu;
export const MenuIconClose = FiX;
