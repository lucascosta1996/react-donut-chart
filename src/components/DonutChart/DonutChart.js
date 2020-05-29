import React from "react";
import { number, string } from "prop-types";
import Container from "./StyledComponents";

function DonutChart({
  mainValue,
  innerValue1,
  innerValue2,
  isLoading,
  size,
  strokeWidth,
  textLabel,
  valueLabel,
}) {
  isLoading = [ mainValue, innerValue1, innerValue2 ].every( value => value == 0 ) | isLoading;
  const halfSize = size * 0.5;
  const halfSizeCircle2 = (size - 38) * 0.5;
  const radius = halfSize - strokeWidth * 0.5;
  const radiusCircle2 = halfSizeCircle2 - strokeWidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const circumferenceCircle2 = 2 * Math.PI * radiusCircle2;
  const strokeValue = (mainValue * circumference) / 100;
  const strokeCircle2Value1 = (innerValue1 * circumferenceCircle2) / 100;
  const strokeCircle2Value2 = (innerValue2 * circumferenceCircle2) / 100;
  const dashValue = `${strokeValue} ${circumference}`;
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
  const rotateval = `rotate(-90 ${halfSize}, ${halfSize})`;

  return (
    <Container width={size} height={size} loading={isLoading}>
      <Container.Svg width={size} height={size}>
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateval}
          style={trackstyle}
          className="donutchart-track"
        />
        <circle
          r={radius}
          cx={halfSize}
          cy={halfSize}
          transform={rotateval}
          style={indicatorstyle}
          className="donutchart-indicator"
        />
      </Container.Svg>
      <Container.Svg width={size} height={size}>
        <circle
          r={radius - 19}
          cx={halfSize - 19}
          cy={halfSize - 19}
          transform={rotateval}
          style={trackstyle2}
          className="donutchart-track white inner"
        />
        <circle
          r={radius - 19}
          cx={halfSize - 19}
          cy={halfSize - 19}
          transform={rotateval}
          style={indicator2style}
          className="donutchart-indicator yellow inner"
        />
        <circle
          r={radius - 19}
          cx={halfSize - 19}
          cy={halfSize - 19}
          transform={rotateval}
          style={indicator3style}
          className="donutchart-indicator blue inner"
        />
        <text
          className="donutchart-text"
          x={halfSize}
          y={halfSize}
          style={{ textAnchor: "middle" }}
        >
          <tspan className="donutchart-text-val" dy="-5">
            {valueLabel}
          </tspan>
          <tspan
            className="donutchart-text-label"
            x={halfSize}
            y={halfSize + 10}
          >
            {textLabel}
          </tspan>
        </text>
      </Container.Svg>
    </Container>
  );
}

DonutChart.propTypes = {
  mainValue: number,
  innerValue1: number,
  innerValue2: number,
  size: number,
  strokeWidth: number,
  textLabel: string,
  valueLabel: number,
};

DonutChart.defaultProps = {
  mainValue: 0,
  innerValue1: 0,
  innerValue2: 0,
  size: 216,
  strokeWidth: 21,
  textLabel: "Base Elegível",
  valueLabel: 0,
};

export default DonutChart;
