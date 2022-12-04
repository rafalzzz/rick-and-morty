import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      basic: string;
    };

    fontColors: {
      title: string;
      placeholder: string;
      basic: string;
    };

    colors: {
      hoverBackgroundColor: string;
    };
  }
}
