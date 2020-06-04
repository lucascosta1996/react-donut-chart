import styled from 'styled-components';

export default styled.circle.attrs(props => ({
  r: props.r,
  cx: props.cx,
  cy: props.cy,
  transform: props.transform,
  style: props.style,
  className: props.className
}))`
  fill: transparent;
  stroke-width: 26;
  stroke: ${({strokeColor}) => strokeColor};
  ${({className}) => className.includes('donutchart-indicator') && Indicator}
  ${({className}) => className.includes('inner') && Inner}
`;

const Indicator = `
  stroke-dasharray: 0 10000;
  transition: stroke-dasharray .3s ease;
`;

const Inner = `
  transform-origin: 0 -19px;
`;
