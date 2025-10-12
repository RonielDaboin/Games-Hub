import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c02217c7;
  height: 87vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
    width: 100vw;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 2.5em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.6em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2.2em;
  font-weight: 500;
  color: #fff;
  text-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 1.8em;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

export const HeroVideo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 1;

  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    filter: brightness(0.9);
  }

  @media (max-width: 768px) {
    .video {
      filter: brightness(0.8);
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.65);
  }

  @media (max-width: 480px) {
    background: rgba(0, 0, 0, 0.7);
  }
`;
