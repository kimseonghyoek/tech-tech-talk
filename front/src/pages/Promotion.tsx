import React from "react";
import styled from "styled-components";
import palette from "../palette";
import { Desktop, Mobile, Tablet } from "../util/responsive";
import DesktopPage from "./Landing/DesktopPage";
import MobilePage from "./Landing/MobilePage";

const Container = styled.div``;

function Promotion(): JSX.Element {
  return (
    <>
      <Desktop>
        <DesktopPage />
      </Desktop>
      <Tablet>
        <MobilePage />
      </Tablet>
    </>
  );
}

export default Promotion;
