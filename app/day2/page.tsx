import React, { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

import styles from "./styles.module.css";

type TyContents = [string, number, string];

const contents: TyContents[] = [
  ["방문자", 4789, "명"],
  ["좋아요", 3254, "개"],
  ["댓글 수", 987, "개"],
];

export default function Item({ item }: { item: TyContents }) {
  return (
    <div>
      <p>{item[0]}</p>
      <p>
        {item[1]} {item[2]}
      </p>
    </div>
  );
}

function Number() {
  return (
    <div>
      {contents.map((c: TyContents) => (
        <Item key={c[0]} item={c} />
      ))}
    </div>
  );
}
