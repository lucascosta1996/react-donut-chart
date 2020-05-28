import React from 'react';
import { number, string } from 'prop-types';
import Container from './StyledComponents';

function DonutChart({value, size, strokewidth}) {
  const halfsize = (size * 0.5);
  const halfsize2 = (size * 0.5);
  const radius = halfsize - (strokewidth * 0.5);
  const circumference = 2 * Math.PI * radius;
  const strokeval = ((value * circumference) / 100);
  const stroke2val = ((77 * circumference) / 100);
  const dashval = (strokeval + ' ' + circumference);
  const dashval2 = (stroke2val + ' ' + circumference);

  const trackstyle = {strokeWidth: strokewidth};
  const indicatorstyle = {strokeWidth: strokewidth, strokeDasharray: dashval}
  const indicator2style = {strokeWidth: strokewidth, strokeDasharray: dashval2}
  const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

  return (
    <Container>
      <Container.Svg width={size} height={size}>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
        <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
      </Container.Svg>
      <Container.Svg width={size} height={size}>
        <circle r={radius - 9} cx={halfsize - 9} cy={halfsize - 9} transform={rotateval} style={trackstyle} className="donutchart-track inner"/>
        <circle r={radius - 9} cx={halfsize - 9} cy={halfsize - 9} transform={rotateval} style={indicator2style} className="donutchart-indicator-2 inner"/>
        <circle r={radius - 9} cx={halfsize - 9} cy={halfsize - 9} transform={rotateval} style={indicatorstyle} className="donutchart-indicator inner"/>
      </Container.Svg>
    </Container>
  )
};

DonutChart.propTypes = {
  value: number,
  valuelabel: string,
  size: number,
  strokewidth: number
};

DonutChart.defaultProps = {
  value: 0,
  size: 116,
  strokewidth: 10
};

export default DonutChart;
