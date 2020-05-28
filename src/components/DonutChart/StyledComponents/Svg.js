import styled from 'styled-components';

export default styled.svg`
  border-radius: 50%;
  display: block;
  height: ${({height}) => height}px;
  margin: 0 auto;
  position: relative;
  width: ${({width}) => width}px;

  .donutchart-track{
    fill: transparent;
    stroke: #DAE2E5;
    stroke-width: 26;
  }

  .donutchart-indicator {
    fill: transparent;
    stroke: #009688;
    stroke-width: 26;
    stroke-dasharray: 0 10000;
    transition: stroke-dasharray .3s ease;
  }

  .donutchart-indicator-2 {
    fill: transparent;
    stroke: #d4c44e;
    stroke-width: 26;
    stroke-dasharray: 0 10000;
    transition: stroke-dasharray .3s ease;
  }

  .donutchart-text{
    fill: #607580;
    font-family: 'Roboto';
  }

  .inner {
    transform-origin: 0 -9px;
  }
`;
