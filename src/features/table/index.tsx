import React from "react";

import { ContentWrapper } from "./components/content-wrapper";
import { Header } from "./components/header";
import { FiltersSection } from "./components/filters-section";

import "bootstrap/dist/css/bootstrap.min.css";

export const Table = () => {
  return (
    <ContentWrapper>
      <>
        <Header />
        <FiltersSection />
      </>
    </ContentWrapper>
  );
};
