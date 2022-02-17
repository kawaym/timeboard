import styled, { css } from "styled-components";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";

interface ArtProps {
  readonly cardTitle:
    | "work"
    | "play"
    | "study"
    | "exercise"
    | "social"
    | "selfCare";
}

const centralize = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 400px;
  height: 150px;

  border-radius: 10px;

  background-color: ${(props) => props.theme.colors.darkBlue};

  font-family: ${(props) => props.theme.fontFamily};
`;

const TopArt = styled.div<ArtProps>`
  width: 100%;
  height: 20%;

  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px 10px 0px 0px
    ${(props) => props.theme.colors.main[props.cardTitle]};

  background-color: ${(props) => props.theme.colors.main[props.cardTitle]};

  overflow-y: hidden;

  display: flex;
  justify-content: flex-end;

  padding-right: 10px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 80%;

  border-radius: 5px 5px 10px 10px;

  background-color: ${(props) => props.theme.colors.darkBlue};

  padding: 15px;

  display: grid;
  column-gap: 20%;
  grid-template-columns: 40% 40%;
  grid-template-rows: 30% 70%;
  justify-items: stretch;

  z-index: 3;
`;

const MoreInfo = styled.button`
  width: 50px;
  justify-self: end;

  ${centralize}

  &:hover {
    cursor: pointer;
  }
`;

const StyledDots = styled(ThreeDots)`
  width: 35px;

  color: ${(props) => props.theme.colors.paleBlue};
`;

const CardTitle = styled.header`
  width: 100%;
  color: white;

  font-size: ${(props) => props.theme.fontSize};
  font-weight: ${(props) => props.theme.fontWeigths.big};

  ${centralize}
`;

const CurrentTime = styled.h2`
  width: 100%;
  color: white;

  font-weight: ${(props) => props.theme.fontWeigths.medium};

  ${centralize}
`;

const PastTime = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.colors.paleBlue};

  font-weight: ${(props) => props.theme.fontWeigths.small};

  ${centralize}
`;

export {
  Container,
  TopArt,
  InfoContainer,
  MoreInfo,
  CardTitle,
  CurrentTime,
  PastTime,
  StyledDots,
};
