import React from "react";
import styled from "styled-components";

import { ImBlog} from "react-icons/im";
import { hoverEffect } from "../../utils";

function AddBlog() {

  return (
    <Card>
      <CardContent>
        <Chart>
          <ImBlog />
        </Chart>
        <Text>Write a Blog</Text>
        <ExploreIncrease>Share your experinces</ExploreIncrease>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  height: 100%;
  width: 14rem;
  background-color: #003333};
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


const ExploreIncrease = styled.h5`
  text-align: center;
  font-weight: normal;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
`;

export default AddBlog;
