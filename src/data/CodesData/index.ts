import {
  IconCombination,
  IconPermutation,
  IconGCD,
  IconLCM,
  IconSieve,
} from '../../components/atoms/Icons';

export interface CodeProps {
  seq: string;
  title: string;
  subTitle: string;
  tags?: string[];
  registrationDate?: string;
  modifiedDate?: string;
  icon?: JSX.Element;
  visible: boolean;
}

const codes: Array<CodeProps> = [
  {
    seq: '5',
    title: '에라토스테네스의 체',
    subTitle: '체로 치듯이 수를 걸러내 소수를 찾는 방법',
    tags: ['정수론'],
    registrationDate: '2020-12-21',
    modifiedDate: '',
    icon: IconSieve({}),
    visible: true,
  },
  {
    seq: '4',
    title: '최소공배수',
    subTitle: '2개 이상의 수의 공배수 중에서 최소인 수',
    tags: ['정수론'],
    registrationDate: '2020-12-21',
    modifiedDate: '',
    icon: IconLCM({}),
    visible: true,
  },
  {
    seq: '3',
    title: '최대공약수',
    subTitle: '2개 이상의 수의 공약수 중에서 최대인 수',
    tags: ['정수론'],
    registrationDate: '2020-12-21',
    modifiedDate: '',
    icon: IconGCD({}),
    visible: true,
  },
  {
    seq: '2',
    title: '순열',
    subTitle:
      '서로 다른 n개의 원소에서 r개를 중복을 허용하지 않고 선택하여 순서 있게 늘어 놓은 것',
    tags: ['확률 및 통계학'],
    registrationDate: '2020-12-17',
    modifiedDate: '2020-12-18',
    icon: IconPermutation({}),
    visible: true,
  },
  {
    seq: '1',
    title: '조합',
    subTitle: '서로 다른 n개의 원소 중에서 순서에 상관없이 r개를 선택하는 것',
    tags: ['확률 및 통계학'],
    registrationDate: '2020-12-17',
    modifiedDate: '',
    icon: IconCombination({}),
    visible: true,
  },
];
const codesData = codes.filter((code) => code.visible);

export default codesData;
