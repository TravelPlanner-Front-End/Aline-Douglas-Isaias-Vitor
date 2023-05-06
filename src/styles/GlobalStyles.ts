import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --color-primary: #D182DE;
    --color-primary-Disable: #AB7CA9;
    --grey-0: #565555;
    --grey-1: #A3A3A3;
    --grey-2: #868E96;
    --grey-3: #F8F9FA;
    --grey-4: #FFFFFF;
    --Success: #80FF9C;
    --Negative: #FF4794;
    --red-value: #FF0000;
    --green-value: #0B8800;
    --font-default: "Inter", sans-serif;
    --shadow: 0px 4px 40px -10px #00000040;
    --radius-default: 6.25rem; 
    --radius-form: 0.625rem; 
  }

  body {
    font-family: var(--font-default);
  }

  button, a {
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-Disable);
    transition: 1.2s ease;
  }

  a:hover {
    background-color: var(--grey-2);
    transition: 1.5s ease; 
  }
` 