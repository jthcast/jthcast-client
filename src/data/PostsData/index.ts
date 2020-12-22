// import atomicDesign from '../../resources/images/post/1/atomic design title.jpg';
// import accessibility from '../../resources/images/post/2/accessibility.jpg';
// import darkMode from '../../resources/images/post/3/darkMode title.jpg';
// import errorBoundary from '../../resources/images/post/4/error boundary title.jpg';

export interface PostsDataProps {
  seq: string;
  title: string;
  tags?: string[];
  content: string;
  registrationDate?: string;
  modifiedDate?: string;
  image?: string;
  series?: string;
  visible: boolean;
}

const posts: Array<PostsDataProps> = [
  {
    seq: '4',
    title: 'React에 아직은 Class 형식이 필요한 이유(feat. Errorboundary)',
    tags: ['React'],
    content:
      'React Hooks가 대세가 된 요즘, Class 형식으로 작성된 컴포넌트를 보면 한숨부터 나오기 마련이다. 그러나 아직까지는 Class 형식이 필요하다. Errorboundary를 구현하며 왜 필요한지 알아보자.',
    registrationDate: '2020-12-22',
    modifiedDate: '',
    image:
      'https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/4/error%20boundary%20title.jpg?raw=true',
    series: 'jthCast',
    visible: true,
  },
  {
    seq: '3',
    title: 'CSS변수를 활용하여 다크 모드 구현하기',
    tags: ['CSS'],
    content:
      '모바일 활용이 점차 늘어남에 따라 웹 생태계도 PC 대신 모바일을 중점으로 맞춰지고 있다. 특히 모바일에서 어두운 테마를 사용하는 사용자가 많아짐에 따라 웹 페이지도 다크 모드를 지원하는 경우가 많아지고 있다. CSS 변수를 활용하여 다크 모드를 구현해 보자.',
    registrationDate: '2020-12-20',
    modifiedDate: '',
    image:
      'https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/3/darkMode%20title.jpg?raw=true',
    series: 'jthCast',
    visible: true,
  },
  {
    seq: '2',
    title: '웹 표준과 웹 접근성을 지키기 위한 노력이 필요한 이유',
    tags: ['Accessibility'],
    content:
      '인터넷 서핑을 하다가 마우스 스크롤 버튼으로 새 창에서 보기라든지 탭으로 다음 메뉴 선택하기 등 당연히 동작해야 하는 것들이 안되는 사이트를 만난 적이 있을 것이다. 보통은 웹 표준을 지키지 않아 웹 접근성에 부합하지 않는 화면으로 개발되었기 때문이다. 이러한 경험이 없어도 한 번쯤 들어봤을 웹 접근성이 대체 무엇인지, 왜 웹 접근성을 지켜야 하고 지키지 않으면 무슨 일이 벌어지는지 자세히 알아보자.',
    registrationDate: '2020-12-19',
    modifiedDate: '',
    image:
      'https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/2/accessibility.jpg?raw=true',
    series: 'jthCast',
    visible: true,
  },
  {
    seq: '1',
    title: 'Atomic Design으로 파일 구조 만들고 블로그 개발 시작한 이야기',
    tags: ['Architect'],
    content:
      'React로 프로젝트를 시작하려고 마음먹은 뒤, React create app으로 프로젝트를 생성 후 이제부터 무엇을 어떻게 해야 할지 고민한 적이 있을 것이다. 보통 가장 먼저 하는 건 앞으로 어떻게 설계된 내용들을 구현할지 아키텍처를 구성하는 일 일 것이다. 컴포넌트를 기반으로 쌓아올리는 React와 Figma는 Atomic Design이 가장 적격이라고 생각하여 이번에 시도해 보았다.',
    registrationDate: '2020-12-16',
    modifiedDate: '2020-12-19',
    image:
      'https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/1/atomic%20design%20title.jpg?raw=true',
    series: 'jthCast',
    visible: true,
  },
];

const postsData = posts.filter((post) => post.visible);
const recentPosts = postsData.filter((post, index) => index < 3);

export { postsData, recentPosts };
