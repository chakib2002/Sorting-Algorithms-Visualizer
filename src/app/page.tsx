"use client";

import { useEffect, useState } from "react";
import { Bars } from "t3/components/Bars";
import Header from "t3/components/Header";
import ResetButton from "t3/components/ResetButton";
import Settings from "t3/components/Settings";
import { Slider } from "t3/components/Slider";
import StopButton from "t3/components/StopButton";
import Visualizer from "t3/components/Visualizer";
import { useStrategy } from "t3/strategies/ContextStrategy";
import { type orderBy } from "t3/types/globalTypes";
import { generateRandomArray } from "t3/utils/helpers/generateRandomArray";

export default function HomePage() {
  const { strategy } = useStrategy();

  const [array, setArray] = useState<number[]>([]);
  const [order, setOrder] = useState<orderBy>("asc");
  const [length, setLength] = useState<number>(50);
  const [speed, setSpeed] = useState(2);
  const [delay, setDelay] = useState<number>(500);

  useEffect(() => {
    const newArray = generateRandomArray(length);
    setArray(newArray);
  }, [length]);

  const handleLengthChange = (value: number) => {
    strategy?.stopIteration();
    setLength(value);
  };

  const handleChangeSpeed = (value: number) => {
    strategy?.stopIteration();
    setSpeed(value);
    setDelay(100 / value);
  };

  return (
    <>
      <Header
        order={order}
        setOrder={setOrder}
        array={array}
        setArray={setArray}
        delay={delay}
      />
      <Visualizer>
        <Bars data={array} />
      </Visualizer>

      <Settings>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Slider
              value={[length]}
              max={100}
              min={5}
              onValueChange={(value) => handleLengthChange(value[0])}
              title="Length"
            />
            <Slider
              max={10}
              min={1}
              value={[speed]}
              onValueChange={(value) => handleChangeSpeed(value[0])}
              title="Speed"
            />
          </div>

          <div className="flex gap-5">
            <StopButton
              array={array}
              order={order}
              setArray={setArray}
              delay={delay}
            />
            <ResetButton arrayLength={length} setArray={setArray} />
          </div>
        </div>
      </Settings>
    </>
  );
}
