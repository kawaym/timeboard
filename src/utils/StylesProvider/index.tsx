import { ThemeProvider } from "styled-components";
import { myTheme } from "./app-theme";
import ResetStyle from "./ResetStyle";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function StylesProvider({ children }: Props) {
  return (
    <>
      <ResetStyle />
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </>
  );
}
