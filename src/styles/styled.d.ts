import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    border: {
      basic: string;
    };

    shadows: {
      table: string;
      paginationItem: string;
    };

    backgroundColor: {
      bodyBackgroundColor: string;
      white: string;
      submitButtonHover: string;
      paginationItemHover: string;
      deadCharacter: string;
    };

    fontColors: {
      primary: string;
      secondary: string;
      placeholder: string;
    };
  }
}
