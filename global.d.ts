import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: {
        user: string;
        work: string;
        play: string;
        study: string;
        exercise: string;
        social: string;
        selfCare: string;
      };
      veryDarkBlue: string;
      darkBlue: string;
      desaturatedBlue: string;
      paleBlue: string;
    };
    fontSize: {
      title: string;
    };
    fontFamily: string;
    fontWeigths: {
      small: string;
      medium: string;
      big: string;
    };
  }
}
declare module "favicon.png" {
  export default "" as string;
}
