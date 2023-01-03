import { createGlobalStyle } from "styled-components";
import { reset } from "react-style-reset";
interface iThemeProps {
  theme: {
    primaryColor: string;
    secondaryColor: string;

    grey050: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;

    whiteColor: string;
    blackColor: string;
  };
}

export default createGlobalStyle`

${reset};
a{
  text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


:root{
  --primary-color: ${(props: iThemeProps) => props.theme.primaryColor};
  --secondary-color: ${(props: iThemeProps) => props.theme.secondaryColor};

  --grey-050: ${(props: iThemeProps) => props.theme.grey050};
  --grey-100: ${(props: iThemeProps) => props.theme.grey100};
  --grey-200: ${(props: iThemeProps) => props.theme.grey200};
  --grey-300: ${(props: iThemeProps) => props.theme.grey300};
  --grey-400: ${(props: iThemeProps) => props.theme.grey400};
  --grey-500: ${(props: iThemeProps) => props.theme.grey500};   

  --white-color: ${(props: iThemeProps) => props.theme.whiteColor};
  --black-color: ${(props: iThemeProps) => props.theme.blackColor}; 

}

body{
  font-family: 'Poppins', sans-serif;
  line-height: 25px;
  font-size: 1.2rem;
  background-color: var(--grey-050);
  background-image: linear-gradient( var(--secondary-color),var(--primary-color));
  color: var(--grey-500);
}

*{
  scroll-behavior: smooth;
}

`;
