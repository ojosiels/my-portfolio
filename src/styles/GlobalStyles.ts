import { createGlobalStyle } from "styled-components";

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
  };
}

export default createGlobalStyle`
:root{
    --primary-color: ${(props: iThemeProps) => props.theme.primaryColor};
    --secondary-color: ${(props: iThemeProps) => props.theme.secondaryColor};

    --grey-050: ${(props: iThemeProps) => props.theme.grey050};
    --grey-100: ${(props: iThemeProps) => props.theme.grey100};
    --grey-200: ${(props: iThemeProps) => props.theme.grey200};
    --grey-300: ${(props: iThemeProps) => props.theme.grey300};
    --grey-400: ${(props: iThemeProps) => props.theme.grey400};
    --grey-500: ${(props: iThemeProps) => props.theme.grey500};   
}

`;
