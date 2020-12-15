import atomicDesign from '../../resources/images/post/1/atomic-design-process.png';

export interface PostsDataProps {
  seq: string;
  title: string;
  tags?: string[];
  content: string;
  date: string;
  image?: string;
  series?: string;
  visible: boolean;
}

const posts: Array<PostsDataProps> = [
  {
    seq: '1',
    title: 'Atomic Design으로 파일 구조 만들고 블로그 개발 시작한 이야기',
    tags: ['Architect'],
    content:
      '리액트로 프로젝트를 시작하려고 마음먹은 뒤, React create app으로 프로젝트를 생성 후 이제부터 무엇을 어떻게 해야 할지 고민한 적이 있을 것이다. 보통 가장 먼저 하는 건 앞으로 어떻게 설계된 내용들을 구현할지 아키텍처를 구성하는 일 일 것이다. 컴포넌트를 기반으로 쌓아올리는 React와 Figma는 Atomic Design이 가장 적격이라고 생각하여 이번에 시도해 보았다.',
    date: '2020-12-15',
    image: atomicDesign,
    series: 'jthCast',
    visible: true,
  },
];

const postsData = posts.filter((post) => post.visible);
const recentPosts = postsData.filter((post, index) => index < 3);

export { postsData, recentPosts };
