import { useRouter } from "next/router";
import { useEffect, useState, useRef, Fragment } from "react";
import styled from "styled-components";

export default function Mosaic({ projectsRendered }) {
  const router = useRouter();

  function goTo(e, href) {
    e.preventDefault();
    router.push(href);
  }

  async function checkImage(url) {
    const res = await fetch(url);
    const buff = await res.blob();
    return buff.type.startsWith("image/");
  }

  return (
    <GridImages>
      {projectsRendered.map((item, index) => (
        <div key={index}>
          <img
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
            key={`MosaicImage ${index}`}
            src={item[3]}
            onClick={(e) => goTo(e, `/${item[0].trim()}`)}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://www.margirius.com.br/wp-content/uploads/woocommerce-placeholder.png";
            }}
          />
          <ArtTitle>{item[1]}</ArtTitle>
        </div>
      ))}
    </GridImages>
  );
}

const GridImages = styled.section`
  -webkit-column-count: 5;
  -webkit-column-gap: 32px;
  -moz-column-count: 5;
  -moz-column-gap: 32px;
  column-count: 5;
  column-gap: 32px;
  margin: 30px 0px 100px 0px;

  @media (max-width: 1500px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
  @media (max-width: 640px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    margin: 2px 0;
    column-gap: 0;
    -moz-column-gap: 0;
    > div {
      grid-template-rows: 0 !important;
      row-gap: 0 !important;
    }
  }
`;

const ArtTitle = styled.h1`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: black;
  margin-top: 1px;
  margin-bottom: 35px;
`;
