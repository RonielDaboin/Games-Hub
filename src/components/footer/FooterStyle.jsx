import styled from "styled-components";

export const FooterBackground = styled.div`
  width: 100%;
  background: linear-gradient(150deg, #8c8d8f, #020202);
  border-top: 10px solid;
  border-image: linear-gradient(90deg, #b1afaf, #211e27) 1;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 50px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
`;

export const Copyright = styled.footer`
  color: white;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  background-color: #111827;
`;

export const Left = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Middle = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  line-height: 1.5;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  color: #d1d5db;
  font-family: "Arial", sans-serif;
  font-weight: 400;
`;

export const Img = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 0.9em;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WhatsApp = styled.a`
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Discord = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #7289da;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Tiktok = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Instagram = styled.a`
  cursor: pointer;
  margin-left: 10px;
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;
