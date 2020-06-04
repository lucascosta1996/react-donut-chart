import styled from "styled-components";
import Svg from "./Svg";
import Circle from "./Circle";

const Container = styled.svg`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width};
  ${({ loading }) => loading && `animation: loading 1s infinite;`}
  transition: opacity .3s ease;

  @keyframes loading {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

Container.Svg = Svg;
Container.Circle = Circle;

export default Container;
