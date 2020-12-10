export interface PortfolioDataProps {
  seq: string;
  title: string;
  content: string;
  date?: string;
  image?: string;
  series?: string;
  detailPage?: boolean;
  github?: string;
  demo?: string;
}

const portfoliosData: Array<PortfolioDataProps> = [];

export default portfoliosData;
