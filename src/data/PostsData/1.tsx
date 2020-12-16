import React from 'react';
import Switch from '../../components/atoms/Switch';
import DarkModeSwitch from '../../components/molecules/DarkModeSwitch';
import structure from '../../resources/images/post/1/structure.png';
import header from '../../resources/images/post/1/header.jpg';
import figmaSwitch from '../../resources/images/post/1/figma switch.png';

const Item = (): JSX.Element => {
  return (
    <>
      <h2>왜 Atomic Design?</h2>
      <p>
        과거 프로젝트 중 디자인 구조가 전혀 잡히지 않은 프로젝트를 경험한 적이
        있다. 상태에 따라 버튼을 보여주어야 했는데, 버튼의 구조는 HTML과 CSS로
        이미 잡혀 있었지만 컴포넌트화되어 있지 않아 재사용 할 때마다 이전
        소스에서 찾아서 복사 붙여넣기를 해야 했다. 게다가 상태에 따라 보여주고
        숨겨 주어야 했는데, 마찬가지로 상태 관리가능한 컴포넌트가 아니라 일일이
        Jquery로 상태를 체크하며 컨트롤해야 했다. 즉, 복사 붙여넣기를 HTML에도,
        JS에도 해야 했던 것이다. 그러다 공통으로 바꿔야 할 부분이 생기기라도
        하면 해당하는 소스를 모두 검색해서 모조리 수작업으로 고쳐주어야 했었다.
        중복을 최대한 자제하기 위한 추상화가 미덕인 개발자 입장에서는 정말
        고통스러운 행동이 아닐 수 없다.
      </p>
      <p>
        이러한 경험에서 프로젝트의 기초가 되는 디자인 구조와 아키텍처가 얼마나
        중요한지 몸으로 깨닫게 되었다. 그래서 내가 처음부터 만드는 것은 기초부터
        탄탄히 만들고자, 그리고 필요없는 노가다는 더이상 하지 않기 위해 컴포넌트
        기반인 React와 Atomic Design을 선택한 것이다. 프로토 타입을 만들기 위해
        사용한 Figma 디자인 툴과도 환상적인 궁합인것도 한 몫 했다.
      </p>
      <h2>Atomic Design</h2>
      <p>
        그래서, Atomic Design이 무엇인가 하면 한마디로{' '}
        <span className="jth-text">
          &apos;컴포넌트 기반 개발 방식을 바탕으로 화학 용어를 빌려 5단계로 나눈
          구조&apos;
        </span>
        라고 말하고 싶다.
      </p>
      <p>
        자세한 정의와 설명은 해당 방법론을 주장한{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://atomicdesign.bradfrost.com/"
        >
          Brad Frost의 설명
        </a>
        을 참고하기 바란다.
      </p>
      <p>
        <figure>
          <img src={structure} aria-label="Structure" />
          <figcaption>
            이번 블로그를 개발하며 Atomic Design으로 구성한 파일 구조. Templates
            단계는 생략하였다. 나중에 규모가 커지고 스켈레톤을 넣을 때
            부활할지도 모르겠다.
          </figcaption>
        </figure>
      </p>
      <h3>Atoms</h3>
      <p>Atomic Design에서 가장 기초가 되는 컴포넌트인 Atoms를 알아보자.</p>
      <p>
        간단한 게시판 하나를 만들더라도 button, input 같은 태그를 쓰지 않을 수
        없을 것이다. 이와 같이 재사용성이 높으면서도 기본이 되는 단위에{' '}
        <span className="jth-text">최소</span> 기능과 디자인으로 구성한다.
      </p>
      <p>
        이 블로그 개발에 쓰인 스위치 컴포넌트는{' '}
        <span role="img" aria-label="right pointing finger">
          👉
        </span>{' '}
        <Switch /> 이렇게 생겼다. 기본 HTML 태그와 최소 기능의 자바스크립트로
        만들어진 Atom 단계의 컴포넌트다.
      </p>
      <h3>Molecules</h3>
      <p>
        다음은 Atom에 다른 Atom을 붙이거나 기능을 추가해 Atom에서 한 단계 더
        나아간 Molecules이다.
      </p>
      <p>
        위의 기본 스위치에 내용물과 상태를 추가하여 다크 모드 스위치로 만들었다.{' '}
        <span role="img" aria-label="right pointing finger">
          👉
        </span>{' '}
        <DarkModeSwitch />
      </p>
      <h3>Organizms</h3>
      <p>
        Molecules에 Atom을 더 붙이거나 또 다른 Molecules 가 합쳐져서 만들어진
        단계이다. 단계가 진행될수록 재사용성이떨어지는 것을 확인할 수 있다.
      </p>
      <p>
        <figure>
          <img src={header} aria-label="Header image" />
          <figcaption>
            여러 가지 구성 요소들이 모여 만들어진 헤더 컴포넌트
          </figcaption>
        </figure>
      </p>
      <p>
        기본이 되는 Atoms 구현하고 이에 필요한 기능을 하는 Molecules를 잘
        구성한다면 Organizms부터는 만들기가 정말 수월하다.
      </p>
      <h3>Templates</h3>
      <p>
        마찬가지로 Organizm인 헤더와 푸터, 그리고 그 사이에 콘텐츠를 이루는 다른
        컴포넌트들이 들어갈 것이다.
      </p>
      <p>
        여기서 Templates와 다음 단계인 Pages가 살짝 애매한 부분이 있는데,
        Templates는 내용이 없이 자리만 만들어 놓고 여기에 데이터를 바인딩 하여
        Pages로 만드는 개념이다. 스켈레톤을 활용한 페이지들의 단계가
        Templates라고 생각한다.
      </p>
      <p>
        Templates를 건너뛰고 바로 Pages를 작업하는 프로젝트도 많은 것 같다.
        본인의 프로젝트의 볼륨을 생각하며 단계를 나누면 될 것이다.
      </p>
      <h3>Pages</h3>
      <p>
        드디어 조립이 끝났다. 별다른 설명이 필요 없는 사용자에게 보일 최종
        단계이다.
      </p>
      <h2>느낀 점</h2>
      <p>
        디자이너와 개발자가 Atomic Design을 기반으로 개발한다면 재활용하기 쉬운
        컴포넌트들로 페이지가 구성될 것이므로, 디자이너와 개발자 사이의 분쟁이
        줄어들고 통일감 있는 사이트 구성과 공수가 줄어드는 효과를 낼 수 있을
        것이다.
      </p>
      <p>
        물론 이를 위해서 디자이너가 시안을 작성할 때, 독창성은 줄어들겠지만
        재사용성을 생각하며 컴포넌트 단위로 디자인하여야 할 것이다. 그래서
        Figma를 사용하는 디자이너와 시너지 효과가 좋다고 느꼈다.
      </p>
      <p>
        <figure>
          <img src={figmaSwitch} aria-label="Figma Switch image" />
          <figcaption>
            Figma도 컴포넌트 기반으로 디자인한다. 해님 표정이... 강렬하다.
          </figcaption>
        </figure>
      </p>
      <p>
        결론은 컴포넌트 기반 개발 방법론이므로, 가장 중요한 것은 프로그래밍을
        배우며 항상 강조되었던 <span className="jth-text">추상화</span>와{' '}
        <span className="jth-text">관심사의 분리</span>라고 생각된다.
      </p>
    </>
  );
};

export default Item;
