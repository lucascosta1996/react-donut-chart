import styled from 'styled-components';
import Svg from './Svg';

const Container = styled.svg`
  height: ${({height}) => height}px;
  width: ${({width}) => width};
`;

Container.Svg = Svg;

export default Container;
