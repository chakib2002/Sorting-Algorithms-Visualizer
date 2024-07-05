"use client";

import { useEffect, useState } from "react";
import { Bars } from "t3/components/Bars";
import Header from "t3/components/Header";
import ResetButton from "t3/components/ResetButton";
import Settings from "t3/components/Settings";
import StopButton from "t3/components/StopButton";
import Visualizer from "t3/components/Visualizer";
import { type orderBy } from "t3/types/globalTypes";
import { generateRandomArray } from "t3/utils/helpers/generateRandomArray";

export default function HomePage() {
  const [array, setArray] = useState<number[]>([]);
  const [order, setOrder] = useState<orderBy>("asc");
  const [length, setLength] = useState<number>(50);

  useEffect(() => {
    const newArray = generateRandomArray(length);
    setArray(newArray);
  }, []);

  return (
    <>
      <Header array={array} setArray={setArray} order={order} />
      <Visualizer>
        <Bars data={array} />
      </Visualizer>

      <Settings>
        <div className="flex justify-between">
          <div></div>
          <div></div>
          <div className="flex gap-5">
            <StopButton />
            <ResetButton arrayLength={length} setArray={setArray} />
          </div>
        </div>
      </Settings>
    </>
  );
}
