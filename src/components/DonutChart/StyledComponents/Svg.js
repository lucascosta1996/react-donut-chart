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
    stroke: #E6E5E5;
    stroke-width: 26;
  }

  .donutchart-indicator {
    fill: transparent;
    stroke: #48D2A0;
    stroke-width: 26;
    stroke-dasharray: 0 10000;
    transition: stroke-dasharray .3s ease;
  }

  .rounded {
    stroke-linecap: round;
  }

  .white {
    stroke: #FFFFFF;
  }

  .yellow {
    stroke: #D4C44E;
  }

  .blue {
    stroke: #5098BC;
  }

  .donutchart-text {
    fill: #607580;
  }

  .donutchart-text-val {
    fill: #48D2A0;
    font-size: 30px;
    font-weight: bold;
  }

  .donutchart-text-label {
    fill: #000000;
    font-size: 14px;
    font-weight: bold;
  }

  .inner {
    transform-origin: 0 -19px;
  }
`;
