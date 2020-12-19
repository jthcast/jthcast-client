import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';
// import accessibilityExample from '../../resources/images/post/2/accessibility example.jpg';
// import devTool from '../../resources/images/post/2/dev tool.jpg';
// import lighthouse from '../../resources/images/post/2/lighthouse.jpg';

const Item = (): JSX.Element => {
  const anchorProblem = `
<a href="#" onClick={onClickFunction} class="btn">클릭</a>
`;
  const buttonProblem = `
<button onClick="window.location.href='somewhere'" class="link">이동</button>
`;
  const divProblem = `
<div onClick={onClickFunction} class="btn">클릭</div>
`;
  const outlineProblem = `
*:focus {
  outline: none; //or 0
}
`;
  const outlineSolution = `
const unFocus = (): null => {
  const styleText =
    '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
  const unfocusStyle = document.createElement('STYLE');

  document.getElementsByTagName('HEAD')[0].appendChild(unfocusStyle);
  document.addEventListener('mousedown', () => {
    unfocusStyle.innerHTML = \`\${styleText}}\`;
  });
  document.addEventListener('keydown', () => {
    unfocusStyle.innerHTML = '';
  });

  return null;
};

export default unFocus;
`;
  return (
    <>
      <h2>웹 표준이 필요한 이유</h2>
      <p>
        표준이 없다는 건 정말 끔찍한 일이다. 이 문서를 보는 사람 중 인터넷
        익스플로러(이하 IE)를 증오하지 않는 사람은 아마 거의 없을 것이다. IE가
        웹 표준에 부합하지 않기 때문이다. 크롬, 파이어폭스와 같은 모던
        브라우저들에서는 예쁘게 잘 보이는 것들이 IE에서는 제대로 보이지 않는
        경우가 많다. 공기업 프로젝트나 국민 대다수를 상대로 서비스하는 대기업
        프로젝트들은 IE를 지원하게끔 수행하는 경우가 많은데(심지어 사내에서만
        사용하는 것도 IE 기준이다. 대체..왜..?), 개발하는 개발자와 모던
        브라우저를 사용하는 사용자 모두에게 좋지 않은 경험을 주고 있다. 이
        간극을 줄이기 위해{' '}
        <span className="jth-text">점진적 향상법(레거시 기준)</span>,{' '}
        <span className="jth-text">우아한 성능 저하법(모던 기준)</span>과 같은
        방법론이 나왔을 정도이다.
      </p>
      <p>
        W3C에서는 이러한 파편화를 막고자 표준 가이드라인을 제안하고 있다. W3C가
        제안하는 웹 표준에는 접근성, 사생활 보호, 보안, 국제화가 있는데, 가장
        중요한 <span className="jth-text">접근성</span>에 대해 자세히 알아보고자
        한다.
      </p>
      <h2>웹 접근성</h2>
      <p>
        웹 페이지를 사용하는 사용자는 정상인뿐만 아니라 장애인, 노인, 저시력자
        등 정보취약계층의 사용자들도 존재함을 잊어서는 안 된다.
      </p>
      <p>
        예를 들어, 시각장애인의 경우에는 &apos;스크린 리더&apos;라는 보조공학
        기기를 이용하여 웹을 사용하는데 이 기기는 페이지 내 마크업 된 h1~h6의
        순서대로 정보를 읽어준다. 따라서 웹 표준으로 권장되는 h1~h6의 마크업
        순서를 지키지 않는다면 정보를 순차적으로 제공받을 수 없어 사용성이
        심각하게 저하된다.
      </p>
      <p>
        <span className="jth-text">
          웹 표준으로 HTML을 마크업 하는 것은 가장 기본이 되면서도 중요한
          부분이다. 사실 이 부분만 제대로 해 주어도 대부분의 문제는 해결이 된다.
        </span>
      </p>
      <p>위와 같이 실수하기 쉬운 몇 가지 예시와 대안을 소개하겠다.</p>
      <h3>올바르지 않은 HTML 태그 사용</h3>
      <PrismCode code={anchorProblem} language="markup" />
      <p>
        위 예시처럼 사용한다면 onClickFunction에 event.preventDefault(); 와 같은
        후속 작업을 해주어야 한다.
      </p>
      <PrismCode code={buttonProblem} language="markup" />
      <p>
        위 예시처럼 사용한다면 마우스 스크롤 버튼으로 새 창 열기, 모바일
        환경에서 꾹 눌러 새 창 열기 등의 사용자가 기본적으로 인지하고 있는
        기능을 사용할 수 없다. 이러한 불편한 경험은 쇼핑몰 등에서는 큰 타격이 될
        것이다.
      </p>
      <PrismCode code={divProblem} language="markup" />
      <p>
        위 예시처럼 사용한다면 스크린 리더 등 보조 기기를 사용하고 있는 사용자는
        이게 버튼인지 다른 무엇인지 인지할 수 없다. 이에 따라 role, aria-label과
        같은 후속 작업을 해주어야 한다.
      </p>
      <p>
        위 세 가지 모두 프로젝트를 경험하며 본 적 있는 태그 사용 예시이다.
        태그를 사용할 땐 사용 목적과 의미가 맞게 사용하여야 한다. anchor(a)
        태그와 button 태그, 그리고 div 태그는 각각 태그의 성격이 다르다. a
        태그는 링크가 필요할 때, button 태그는 이벤트가 필요할 때, div는 어떤
        태그들을 감쌀 필요가 있을 때 사용한다.{' '}
        <span className="jth-text">
          정확한 태그를 사용한다면 후속 작업을 또 해주는 생산성 낭비와 혹시
          일어날지 모를 버그를 막을 수 있다.
        </span>
      </p>
      <p>
        이러한 잘못된 마크업은 <span className="jth-text">prettier</span>와{' '}
        <span className="jth-text">eslint</span>를 사용하는 것으로 대부분 예방할
        수 있다.
      </p>
      <h3>Outline 없애기</h3>
      <PrismCode code={outlineProblem} language="scss" />
      <p>
        클릭했을 때 보기 흉하다는 이유로 위와 같은 코드를 사용하는 경우가 많다.
        하지만 이는 키보드 사용 유저에게 접근성을 저하시킨다.{' '}
        <span className="jth-text">
          탭을 아무리 눌러도 현재 포커스가 어디인지 알 수가 없기 때문이다.
        </span>
      </p>
      <p>
        이에 대한 <span className="jth-text">해결 방안으로 아래 코드</span>를
        추천한다.
      </p>
      <PrismCode code={outlineSolution} />
      <p>
        마우스 입력이 있을 때 outline을 없애주고, 키보드 입력이 있을 때
        outline을 살려준다.
      </p>
      <h3>고정 단위 사용</h3>
      <p>
        디자이너가 넘겨준 시안은 px로 표시되어 있는 경우가 많고, px 단위가
        실제로 익숙해서 많이 사용한다. 하지만 px 단위는 고정 단위이기 때문에
        사용자의 글꼴 크기 설정이나 화면 크기 설정에 반응하지 않는다.{' '}
        <span className="jth-text">
          꼭 필요한 경우가 아니라면 고정 단위의 사용은 피하는 게 좋다.
        </span>
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://webdesign.tutsplus.com/ko/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984"
          className="jth-external-link"
        >
          Rem 그리고 Em, 언제 써야 할까
        </a>
      </p>
      <p>
        글꼴이 반응형 단위로 되어 있지 않으면 저시력자가 브라우저 설정, 혹은
        모바일 환경 설정에서 글꼴 크기를 크게 바꾸어도 바뀌지 않는다. 결국
        저시력자는 눈을 더 가까이 대는 등 불편함을 감수하거나 사이트 탐색을
        포기할 것이다.
      </p>
      <p>
        이와 반대로 글꼴은 반응형으로 설정하고 그 글꼴을 담는 컨테이너를 고정
        값으로 주는 경우도 심각하게 접근성을 저하시킨다.
      </p>
      <figure>
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/2/accessibility%20example.jpg?raw=true"
          aria-label="Accessibility Example"
          alt="Accessibility Example"
        />
        <figcaption>
          부모님이 주식 어플을 못 알아보겠다고 하셨다
          <span role="img" aria-label="Loudly Crying Face Emoji">
            😭
          </span>
        </figcaption>
      </figure>
      <p>
        위와 같이 한정된 공간 안에 최대한의 정보를 담아야 하는 경우가 존재하니
        무조건 반응형으로 해야 한다는 것은 아니다.{' '}
        <span className="jth-text">
          진행하는 프로젝트의 성격을 제대로 파악하고 반응형이 필요하다면 그에
          맞게 설계해야 할 것이다.
        </span>
      </p>
      <h3>색상 대비를 권장 비율에 맞추지 않음</h3>
      <p>
        <span className="jth-text">
          W3C는 저시력자 및 색각 이상자의 웹 접근성을 위해 텍스트와 배경 간 명도
          대비를 4.5 대 1(레벨 AA) 이상으로 할 것
        </span>
        을 요구한다. 더 엄격하게 적용하기 위해서는 7 대 1(레벨 AAA) 을 요구한다.
      </p>
      <p>
        시각적으로 아름답지 않다고 아무런 고민 없이 색상을 선택하는 사람들이
        많다. 그러나 이러한 행위는 마찬가지로 웹 접근성에 부합하지 않는다. 특히{' '}
        <span className="jth-text">
          다크 모드를 사용하는 경우에는 배경색이 달라지기 때문에 이에 맞게 신경
          써 주어야 한다.
        </span>
      </p>
      <p>
        색상 대비를 확인하는 방법에는{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://webaim.org/resources/contrastchecker/"
          className="jth-external-link"
        >
          Contrast Checker
        </a>
        와 <span className="jth-text">개발자 도구</span>를 추천한다.
      </p>
      <figure>
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/2/dev%20tool.jpg?raw=true"
          aria-label="Dev Tool"
          alt="Dev Tool"
        />
        <figcaption>
          개발자 도구에서 색상비를 확인할 수 있으며 기준에 맞는 색상을 추천까지
          해준다
          <br />
          만약 표시되지 않는다면 background-color를 줘 보도록 하자
        </figcaption>
      </figure>
      <h3>alt, role, aria 와 같은 보조 속성 무시</h3>
      <p>
        img, div, video 태그 등은 시각적으로 정보를 획득할 수 없는 사람은 확인할
        수 없다. 따라서 추가적인 정보 제공이 필요한데, 이러한 정보를 포함하는
        속성이 있다.
      </p>
      <p>
        특히 alt와 같은 속성은 이미지가 정상적으로 불러와 지지 않는 경우에 어떤
        이미지인지 표시되는 역할도 하기 때문에 더욱 중요하다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/lezhin/accessibility/blob/master/aria/README.md#aria-current"
          className="jth-external-link"
        >
          레진 WAI-ARIA 가이드라인
        </a>
      </p>
      <p>
        마찬가지로 <span className="jth-text">prettier</span>와{' '}
        <span className="jth-text">eslint</span>를 사용하는 것으로 대부분 예방할
        수 있다.
      </p>
      <h2>검색엔진 최적화(SEO)</h2>
      <p>
        구글 검색 결과 중 상위에 노출되기 위해 SEO에 신경 쓰는 사람들이 많다.
        이러한 <span className="jth-text">SEO에 웹 접근성도 포함</span>되기
        때문에 더욱 중요하다.
      </p>
      <p>
        구글은 이를 위해 개발자 도구에서 라이트 하우스(Lighthouse)라는 품질 검사
        기능을 제공한다. 이 라이트 하우스의 점수 또한 상위 노출 평가에
        적용된다고 하니 앞으로는 그 중요성이 더욱 증가할 것이다.
      </p>
      <figure>
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/2/lighthouse.jpg?raw=true"
          aria-label="Lighthouse"
          alt="Lighthouse"
        />
        <figcaption>
          만약 부족한 점이 있으면 어떤 점이 부족한지 친절히 알려준다
        </figcaption>
      </figure>
      <h2>마치며</h2>
      <p>
        위의 사례들은 실제 이 블로그를 개발하면서 저지를뻔했던 실수들이다.
        접근성에 중점을 두고 개발하지 않았다면 그냥 지나갔을지도 모른다. 그러나
        이번 기회에 웹 표준에 대해 더 자세히 알아보고 이에 맞게 개발하자는
        의지를 가지고 프로젝트를 진행하여 올바른 마크업과 함께 개발 지식 또한
        얻을 수 있었다.
      </p>
      <p>
        정보화 사회로 발전해 감에 따라 정보취약계층의 인터넷 참여도 더욱 높아질
        것이다. 이들도 사용자의 일부로 생각하고 웹 표준과 웹 접근성에 맞게 웹을
        만드는 것이 더욱 중요해질 것이다. 이번에 정부에서 공인인증서 제도를
        폐지하기로 결정했다. 그동안 ActiveX를 사용하며 웹 표준에 맞지 않던
        공공기관 사이트들도 점차 변화하길 기대해 본다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://nuli.navercorp.com/community/article"
          className="jth-external-link"
        >
          접근성에 대한 좋은 글을 제공하는 &apos;NULI&apos;
        </a>
      </p>
    </>
  );
};

export default Item;
