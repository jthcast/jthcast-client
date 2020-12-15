import { IconProps } from '../../components/atoms/Icons';

export interface CodeProps {
  seq: string;
  title: string;
  subTitle: string;
  tags?: string[];
  date?: string;
  icon?: ({
    className,
    style,
    spin,
    rotate,
    onClick,
  }: IconProps) => JSX.Element;
  visible: boolean;
}

const codes: Array<CodeProps> = [];
const codesData = codes.filter((code) => code.visible);

export default codesData;
