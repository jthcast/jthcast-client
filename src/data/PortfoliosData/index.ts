// import portfolioJthcast from '../../resources/images/portfolio/jthcast/jthcast.png';

export interface PortfolioDataProps {
  seq: string;
  title: string;
  content: string;
  registrationDate?: string;
  modifiedDate?: string;
  image?: string;
  series?: string;
  detailPage?: boolean;
  github?: string;
  demo?: string;
  visible: boolean;
}

const portfolios: Array<PortfolioDataProps> = [
  {
    seq: '1',
    title: 'JthCast',
    content:
      '경험하고 싶거나 배우고 싶은 기술들을 마음껏 사용하기 위해 만든 개인 블로그',
    registrationDate: '2020-12-11',
    modifiedDate: '',
    image:
      'https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/jthcast.png?raw=true',
    series: 'jthCast',
    detailPage: true,
    github: 'https://github.com/jthcast/jthcast-client',
    demo: 'https://jthcast.github.io/',
    visible: true,
  },
];

const portfoliosData = portfolios.filter((portfolio) => portfolio.visible);
export default portfoliosData;
