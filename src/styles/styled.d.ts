import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      basic: string;
    };

    fontColors: {
      basic: string;
      placeholder: string;
      inputValue: string;
    };

    colors: {
      hoverBackgroundColor: string;
    };
  }
}
