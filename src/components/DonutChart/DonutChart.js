import React from "react";
import { number, string } from "prop-types";
import Container from "./StyledComponents";

function DonutChart({ mainValue, innerValue1, innerValue2, size, strokeWidth, textLabel, valueLabel }) {
  const halfsize = size * 0.5;
  const halfsizeCircle2 = (size - 38) * 0.5;
  const radius = halfsize - strokeWidth * 0.5;
  const radiusCircle2 = halfsizeCircle2 - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const circumferenceCircle2 = 2 * Math.PI * radiusCircle2;
  const strokeValue = (mainValue * circumference) / 100;
  const strokeCircle2Value1 = (innerValue1 * circumferenceCircle2) / 100;
  const strokeCircle2Value2 = (innerValue2 * circumferenceCircle2) / 100;
  const dashValue = strokeValue + " " + circumference;
  const dashCircle2Value1 = `${strokeCircle2Value1} ${circumferenceCircle2}`;
  const dashCircle2Value2 = `${strokeCircle2Value2} ${circumferenceCircle2}`;
  const trackstyle = { strokeWidth: strokeWidth };
  const trackstyle2 = { strokeWidth: strokeWidth - 1.5 };
  const indicatorstyle = {
    strokeWidth: strokeWidth,
    strokeDasharray: dashValue,
  };
  const indicator2style = {
    strokeWidth: strokeWidth - 1.5,
    strokeDasharray: dashCircle2Value1,
  };
  const indicator3style = {
    strokeWidth: strokeWidth - 1.5,
    strokeDasharray: dashCircle2Value2,
  };
  const rotateval = `rotate(-90 ${halfsize}, ${halfsize})`;

  return (
    <Container width={size} height={size}>
      <Container.Svg width={size} height={size}>
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={trackstyle}
          className="donutchart-track"
        />
        <circle
          r={radius}
          cx={halfsize}
          cy={halfsize}
          transform={rotateval}
          style={indicatorstyle}
          className="donutchart-indicator"
        />
      </Container.Svg>
      <Container.Svg width={size} height={size}>
        <circle
          r={radius - 19}
          cx={halfsize - 19}
          cy={halfsize - 19}
          transform={rotateval}
          style={trackstyle2}
          className="donutchart-track white inner"
        />
        <circle
          r={radius - 19}
          cx={halfsize - 19}
          cy={halfsize - 19}
          transform={rotateval}
          style={indicator2style}
          className="donutchart-indicator yellow inner"
        />
        <circle
          r={radius - 19}
          cx={halfsize - 19}
          cy={halfsize - 19}
          transform={rotateval}
          style={indicator3style}
          className="donutchart-indicator blue inner"
        />
        <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
          <tspan className="donutchart-text-val" dy="-5">{valueLabel}</tspan>
          <tspan className="donutchart-text-label" x={halfsize} y={halfsize+10}>{textLabel}</tspan>
        </text>
      </Container.Svg>
    </Container>
  );
}

DonutChart.propTypes = {
  value: number,
  value2: number,
  value3: number,
  size: number,
  strokeWidth: number,
  textLabel: string,
  valueLabel: number
};

DonutChart.defaultProps = {
  value: 0,
  value2: 0,
  value3: 0,
  size: 216,
  strokeWidth: 21,
  textLabel: 'Base Elegível',
  valueLabel: 0
};

export default DonutChart;
