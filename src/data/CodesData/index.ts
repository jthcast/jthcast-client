import {
  IconProps,
  IconCombination,
  IconPermutation,
} from '../../components/atoms/Icons';

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

const codes: Array<CodeProps> = [
  {
    seq: '2',
    title: '순열',
    subTitle:
      '서로 다른 n개의 원소에서 r개를 중복을 허용하지 않고 선택하여 순서 있게 늘어 놓은 것',
    tags: ['확률 및 통계학'],
    date: '2020-12-17',
    icon: IconPermutation,
    visible: true,
  },
  {
    seq: '1',
    title: '조합',
    subTitle: '서로 다른 n개의 원소 중에서 순서에 상관없이 r개를 선택하는 것',
    tags: ['확률 및 통계학'],
    date: '2020-12-17',
    icon: IconCombination,
    visible: true,
  },
];
const codesData = codes.filter((code) => code.visible);

export default codesData;
