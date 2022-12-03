import React from "react";

import { ContentWrapper } from "./components/content-wrapper";
import { Header } from "./components/header";
import { FiltersSection } from "./components/filters-section";
import { Table } from "./components/table";

import "bootstrap/dist/css/bootstrap.min.css";

export const RickAndMortyCharacters = () => {
  return (
    <ContentWrapper>
      <>
        <Header title={"Characters"} />
        <FiltersSection />
        <Table />
      </>
    </ContentWrapper>
  );
};
