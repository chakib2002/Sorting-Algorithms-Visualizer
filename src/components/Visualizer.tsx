import React, { useEffect, useState } from "react";
interface VisualizerProps {
  children: React.ReactNode;
}
const Visualizer: React.FC<VisualizerProps> = ({ children }) => {
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    setHeight(window.innerHeight - 300);
  }, []);

  return (
    <div
      style={{ height: `${height}px` }}
      className={`w-screen overflow-x-auto px-5 sm:m-auto lg:w-[700px]`}
    >
      {children}
    </div>
  );
};
export default Visualizer;
