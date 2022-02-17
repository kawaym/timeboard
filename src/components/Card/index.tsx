import {
  CardTitle,
  Container,
  CurrentTime,
  InfoContainer,
  MoreInfo,
  PastTime,
  TopArt,
  StyledDots,
} from "./style";

import appIcons from "../Icons";

export default function Card() {
  const cardTitle:
    | "work"
    | "play"
    | "study"
    | "exercise"
    | "social"
    | "selfCare" = "selfCare";
  return (
    <Container>
      <TopArt cardTitle={cardTitle}>{appIcons[cardTitle]}</TopArt>
      <InfoContainer>
        <CardTitle>Self Care</CardTitle>
        <MoreInfo>
          <StyledDots />
        </MoreInfo>
        <CurrentTime>36hrs</CurrentTime>
        <PastTime>Last Week - 7hrs</PastTime>
      </InfoContainer>
    </Container>
  );
}
