import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    main: {
      user: "hsl(246, 80%, 60%)",
      work: "hsl(15, 100%, 70%)",
      play: "hsl(195, 74%, 62%)",
      study: "hsl(348, 100%, 68%)",
      exercise: "hsl(145, 58%, 55%)",
      social: "hsl(264, 64%, 52%)",
      selfCare: "hsl(43, 84%, 65%)",
    },
    veryDarkBlue: "hsl(226, 43%, 10%)",
    darkBlue: "hsl(235, 46%, 20%)",
    desaturatedBlue: "hsl(235, 45%, 61%)",
    paleBlue: "hsl(236, 100%, 87%)",
  },
  fontSize: {
    title: "72px",
  },
  fontFamily: "Rubik",
  fontWeigths: {
    small: "300",
    medium: "400",
    big: "500",
  },
};

export { myTheme };
