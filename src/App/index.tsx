import { StyledH1, AppContainer } from "./styles";
import { HelmetProvider, StylesProvider } from "../utils";
import { Attribution } from "../components/index";

export default function App() {
  return (
    <>
      <HelmetProvider />
      <StylesProvider>
        <AppContainer>
          <StyledH1>Typescript</StyledH1>
          <Attribution />
        </AppContainer>
      </StylesProvider>
    </>
  );
}
