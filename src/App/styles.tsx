import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colors.main.user};
`;
const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.veryDarkBlue};
`;

export { StyledH1, AppContainer };
