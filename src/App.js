import React, { useState } from "react";
import styled from "styled-components";
import DonutChart from "./components/DonutChart/DonutChart";

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  text-align: center;

  input {
    border-radius: 3px;
    margin-top: 30px;
    outline: 0;
  }

  .green {
    border: 2px solid #48D2A0;
  }

  .yellow {
    border: 2px solid #D4C44E;
  }

  .blue {
    border: 2px solid #5098BC;
  }
`;

function App() {
  const [mainValue, setMainValue] = useState(50);
  const [innerValue1, setInnerValue1] = useState(50);
  const [innerValue2, setInnerValue2] = useState(25);

  return (
    <AppContainer>
      <DonutChart mainValue={mainValue} innerValue1={innerValue1} innerValue2={innerValue2} valueLabel={40.535} />
      <input
        className="green"
        type="number"
        value={mainValue}
        onChange={(e) => {
          setMainValue(e.target.value);
        }}
      />
      <input
        className="yellow"
        type="number"
        value={innerValue1}
        onChange={(e) => {
          setInnerValue1(e.target.value);
        }}
      />
      <input
        className="blue"
        type="number"
        value={innerValue2}
        onChange={(e) => {
          setInnerValue2(e.target.value);
        }}
      />
    </AppContainer>
  );
}

export default App;
