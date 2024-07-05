import { Pause } from "lucide-react";
import React from "react";
import { Button } from "t/components/ui/button";
// interface StopButtonProps {}

const StopButton = () => {
  return (
    <Button className="flex items-center border-2 border-slate-900 bg-white text-slate-900 lg:hover:border-slate-500 lg:hover:bg-slate-100 lg:hover:text-slate-500">
      <Pause size={24} />
      <span>STOP</span>
    </Button>
  );
};

export default StopButton;
