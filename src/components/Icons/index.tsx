import { ComponentProps } from "react";
import IconsFacade from "./IconsFacade";

type IconsFacedeProps = ComponentProps<typeof IconsFacade>;

interface Props extends Omit<IconsFacedeProps, "$iconName"> {
  name: IconsFacedeProps["$iconName"];
}

function Icons(props: Props) {
  const { name } = props;

  return <IconsFacade {...props} $iconName={name} />;
}

export default Icons;
