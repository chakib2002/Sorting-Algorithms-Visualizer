import { type Dispatch, type SetStateAction, type FC } from "react";
import { type orderBy } from "t3/types/globalTypes";
import { Label } from "t/components/ui/label";
import {
  RadioGroup as RadioGroupComponent,
  RadioGroupItem,
} from "t/components/ui/radio-group";
import { useStrategy } from "t3/strategies/ContextStrategy";

interface RadioGroupProps {
  order: orderBy;
  setOrder: Dispatch<SetStateAction<orderBy>>;
}

const RadioGroup: FC<RadioGroupProps> = ({ order, setOrder }) => {
  const { strategy } = useStrategy();
  return (
    <RadioGroupComponent
      className="flex items-center gap-5"
      defaultValue={order}
      onValueChange={(value) => {
        strategy?.stopIteration();
        setOrder(value as orderBy);
      }}
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={"asc"} id="r1" />
        <Label htmlFor="r1">Ascending</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value={"desc"} id="r2" />
        <Label htmlFor="r2">Descending</Label>
      </div>
    </RadioGroupComponent>
  );
};

export default RadioGroup;
