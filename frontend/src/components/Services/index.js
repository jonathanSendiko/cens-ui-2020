import React from "react";
import Icon1 from "../../images/logo_cfi.png";
import Icon2 from "../../images/logo_ns.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCard,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Events</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>CFI</ServicesH2>
          {/* <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ServicesP> */}
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>National Summit</ServicesH2>
          {/* <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
