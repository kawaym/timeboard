import { Helmet } from "react-helmet";

const favicon = require("../../assets/images/favicon.png");

export default function HelmetProvider() {
  return (
    <Helmet>
      <title>TimeBoard</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Frontend Mentor | Time tracking dashboard</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href={favicon} />
    </Helmet>
  );
}
