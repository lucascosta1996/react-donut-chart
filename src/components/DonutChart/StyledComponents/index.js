import styled from 'styled-components';

const Container = styled.svg`
  height: ${({height}) => height}px;
  margin: 0 auto;
  border-radius: 50%;
  display: block;
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
    font-family: 'Roboto';
    fill: #607580;
  }
  .donutchart-text-val{
    font-size:22px;
  }
  .donutchart-text-percent{
    font-size:14px;
  }
  .donutchart-text-label{
    font-size:9px;
  }
`;

export default Container;
