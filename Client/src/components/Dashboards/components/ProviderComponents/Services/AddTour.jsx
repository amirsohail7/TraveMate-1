import React from "react";
import styled from "styled-components";

import { GiMountainRoad} from "react-icons/gi";
import { hoverEffect } from "../../../utils";

function AddTour() {

  return (
    <Card>
      <CardContent>
        <Chart>
          <GiMountainRoad />
        </Chart>
        <Text>Add Tour</Text>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #197359;
  padding: 1rem;
  border-radius: 1rem;
  color: white;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
`;

const Chart = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 4rem;
    width: 4rem;
  }
`;

const Text = styled.h3`
  text-align: center;
  font-weight: normal;
  padding: 0.4rem 0;
`;


export default AddTour;
