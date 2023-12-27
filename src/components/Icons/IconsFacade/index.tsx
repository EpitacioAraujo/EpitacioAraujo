import { IconBaseProps } from "react-icons";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const iconsList = {
  linkedin: FiLinkedin,
  github: FiGithub,
} as const;

interface Props extends IconBaseProps {
  iconName: keyof typeof iconsList;
}

export default function IconsFacade(props: Props) {
  return iconsList[props.iconName](props);
}
