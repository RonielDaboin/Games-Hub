import styled from "styled-components";

export const FooterBackground = styled.div`
  width: 100%;
  background: linear-gradient(160deg, #1a1d23, #0c0f14);
  border-top: 4px solid;
  border-image: linear-gradient(90deg, #d8a441, #4da3ff) 1;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.6);
  
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 60px;
  

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: #e1e4eb;
  flex-wrap: wrap;
  font-family: "Poppins", sans-serif;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 25px;
  }
`;

export const Copyright = styled.footer`
  color: #a8acb4;
  padding: 15px 0;
  text-align: center;
  font-size: 14px;
  background-color: #0c0f14;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Left = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Middle = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Right = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

export const Logo = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.6;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 10px;
  color: #a8acb4;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    margin-top: 20px;
  }
`;

export const Img = styled.img`
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

export const WhatsApp = styled.a`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
  color: #4da3ff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #d8a441;
  }
`;

export const Discord = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #7289da;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #d8a441;
  }
`;

export const Tiktok = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #d8a441;
  }
`;

export const Instagram = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #4da3ff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #d8a441;
  }
`;
