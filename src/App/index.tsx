import { StyledH1, AppContainer } from "./styles";
import { HelmetProvider, StylesProvider } from "../utils";
import { Attribution } from "../components/index";
import Card from "../components/Card";

export default function App() {
  return (
    <>
      <HelmetProvider />
      <StylesProvider>
        <AppContainer>
          <StyledH1>Typescript</StyledH1>
          <Card></Card>
          <Attribution />
        </AppContainer>
      </StylesProvider>
    </>
  );
}
