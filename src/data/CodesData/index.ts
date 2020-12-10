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
}

const codesData: Array<CodeProps> = [];

export default codesData;
