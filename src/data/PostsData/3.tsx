import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';
// import darkModeColorGuide from '../../resources/images/post/3/darkmode color guide.png';

const Item = (): JSX.Element => {
  const checkSystemPreferenceCode = `
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
const isDark = systemPreference.matches;
`;
  const setAttributeCode = `
if (isDark) {
  document.body.setAttribute('data-theme', 'dark');
} else {
  document.body.setAttribute('data-theme', 'light');
}
`;
  const darkModeSwitchCode = `
const DarkModeSwitch = (): JSX.Element => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setDark] = useState(systemPreference.matches);

  const darkModeHandling = () => {
    setDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <Switch
      className="switch-darkMode"
      checked={isDark}
      unCheckedChildren="🌞"
      checkedChildren="🌜"
      onClick={darkModeHandling}
    />
  );
};
`;
  const darkModeSystemCheckCode = `
const darkModeCheck = (): null => {
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const [isDark, setDark] = useState(systemPreference.matches);

  const checkSystemPreference = useCallback(() => {
    if (systemPreference.matches) {
      setDark(true);
    } else {
      setDark(false);
    }
  }, [systemPreference.matches, setDark]);

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    checkSystemPreference();
    systemPreference.addEventListener('change', checkSystemPreference);

    return () => {
      systemPreference.removeEventListener('change', checkSystemPreference);
    };
  }, [checkSystemPreference, systemPreference]);

  return null;
};

export default darkModeCheck;
`;
  const cssCode = `
:root {
  --background-base: #FFFFFF;
  --background-base-opacity: rgba(255, 255, 255, 0.85);
  --background-down-opacity: rgba(255, 255, 255, 0.3);
  --scrollbar-base-opacity: rgba(0, 0, 0, 0.5);
  --background-code-base: #f9f2f4;
  --color-base: #000000;
  --color-down: #70757a;
  --color-code-base: #9a354a;
  --primary-brand-base: #F6A54C;
  --secondary-brand-base: #614CF6;
  --primary-brand-background-base: #504646;
  --border-base: #D6D6D6;
  --group-base: #F4F4F4;
  --danger: #E03434;
  --black: #000000;
  --white: #FFFFFF;
  
  background-color: var(--background-base);
  color: var(--color-base);
}
  
[data-theme="dark"] {
  --background-base: #000000;
  --background-base-opacity: rgba(0, 0, 0, 0.85);
  --background-down-opacity: rgba(0, 0, 0, 0.3);
  --scrollbar-base-opacity: rgba(255, 255, 255, 0.5);
  --background-code-base: #3C3636;
  --color-base: #FFFFFF;
  --color-down: #ABABAB;
  --color-code-base: #FFB3C2;
  --secondary-brand-base: #6e59ff;
  --border-base: #D6D6D6;
  --group-base: #5D5D5D;

  background-color: var(--background-base);
  color: var(--color-base);
}
`;
  return (
    <>
      <h2>주의할 점</h2>
      <p>
        이 글은 CSS 변수를 활용하여 다크 모드를 구현하지만,{' '}
        <span className="jth-text">
          인터넷 익스플로러는 CSS 변수 기능을 지원하지 않는다.
        </span>{' '}
        인터넷 익스플로러의 경우 CSS 변수 기능은 폴리필로도 구현이 불가능하고,
        변수 비슷한 기능을 하는 라이브러리의 도움이 필요하니 주의하기 바란다.
      </p>
      <h2>Javascript</h2>
      <p>
        시스템 설정을 확인하여 디바이스의 현재 테마가 일반 테마인지 어두운
        테마인지 구분한다. 이는 window 객체의 matchMedia 메서드에{' '}
        <code className="jth-text">
          &apos;(prefers-color-scheme: dark)&apos;
        </code>{' '}
        쿼리를 넣어 확인할 수 있다.
      </p>
      <PrismCode code={checkSystemPreferenceCode} />
      <p>
        확인 후 body에 data 속성을 활용하여 data-theme 속성에 구분 가능한 값을
        넣어 준다. 이 부분은 각자의 취향대로 진행하면 된다. 중요한 것은 body와
        같은 상위 태그에 속성값 혹은 클래스로 현재 상태를 구분할 수 있어야
        한다는 점이다.
      </p>
      <PrismCode code={setAttributeCode} />
      <p>
        React를 사용한 이 블로그의 다크 모드는 아래와 같은 코드를 사용해 스위치
        형식으로 구현하였다.
      </p>
      <PrismCode code={darkModeSwitchCode} />
      <p>
        만약 스위치 형식이 아닌 디바이스의 환경으로만 제어할 경우 아래와 같이
        이벤트를 등록해 주면 디바이스 환경이 바뀔 경우에 자동으로 변경된다.
      </p>
      <PrismCode code={darkModeSystemCheckCode} />
      <h2>색상 선택</h2>
      <p>
        다크 모드는 기본적으로 일반 테마와 어두운 테마 두 가지 경우를 고려하여
        색상을 따로 구성해야 한다. 따로 구성해야 하는 이유는 저시력자를 위해
        색상 대비를 맞추어 주는 접근성에 대한 부분이 필요하기 때문이다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://jthcast.github.io/posts/2"
          className="jth-external-link"
        >
          웹 표준과 웹 접근성을 지키기 위한 노력이 필요한 이유
        </a>
      </p>
      <p>
        사람은 깊이감을 느낄 때 밝은 것을 가깝게 인식하고 어두운 것을 멀게
        인식한다. 따라서 페이지에서 계층 구조를 나눌 때 사용자 경험 측면에서
        사용자에게 가장 가까운 레이어일수록 밝게 표시하는 게 좋다.
      </p>
      <figure>
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/3/darkmode%20color%20guide.png?raw=true"
          aria-label="Darkmode color guide"
          alt="Darkmode color guide"
        />
        <figcaption>
          일반적으로 일반 테마의 색상을 반전시키면 다크 모드가 되는 것이라고
          생각하는 경우가 많지만 그렇지 않다.
        </figcaption>
      </figure>
      <h2>CSS</h2>
      <p>
        일반 테마인 경우의 CSS 변수에 색상 값을 넣어주고, 어두운 테마인 경우
        body에 data-theme=&quot;dark&quot; 속성이 추가되므로 이를 속성 선택자로
        찾아 CSS 변수를 Overriding 해주는 형태로 구현한다.
      </p>
      <PrismCode code={cssCode} language="css" />
      <h2>마치며</h2>
      <p>
        다크 모드는 사용자 경험을 위해 선택해야 할 것이 많다. 특히 색상 선택의
        경우 선택할 사항이 더 많은데, 대표적인 가이드로 &apos;Material Design
        Dark theme&apos;, &apos;Human Interface Guideline Dark mode&apos;가
        있다. 이를 비교하고 디자인을 선택하는 부분은 좋은 글이 있어 링크로
        남긴다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://tech.socarcorp.kr/design/2020/07/10/dark-mode-01.html"
          className="jth-external-link"
        >
          [SOCAR FRAME 만들기 #2] 다크 모드 받고 디자인 시스템 더블로 가! (1탄)
        </a>
      </p>
      <p>
        참고로, 이 블로그는 미니멀한 디자인이므로 확실한 색상 대비로 포인트를
        주기 위해 Human Interface Guideline Dark mode를 선택했다.
      </p>
      <p>
        각 사이트의 디자인 부분을 생각하면 모든 사이트의 다크 모드 도입이 어려운
        것도 사실이다. 브랜드마다 고유한 이미지를 구축하기 때문에 다크 모드로
        얻는 사용자 경험 보다 일관된 색상 디자인으로 얻는 브랜드 경험이 더
        중요한 사이트도 있을 것이다. 이러한 부분을 잘 파악하여 선택하는 것도
        중요할 것이다. 다크 모드는 정말 선택의 연속인 것 같다.(그래도 다크
        모드를 지원하는 곳이 많았으면 좋겠다.. 더 이상의 눈뽕은..{' '}
        <span role="img" aria-label="Loudly Crying Face Emoji">
          😭
        </span>
        )
      </p>
    </>
  );
};

export default Item;
