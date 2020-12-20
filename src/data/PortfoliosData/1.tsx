import React from 'react';
import { IconLogoColored } from '../../components/atoms/Icons';
// import portfolioJthcast from '../../resources/images/portfolio/jthcast/jthcast.png';
// import darkModeVideo from '../../resources/images/portfolio/jthcast/darkmode.mp4';
// import internationalizationVideo from '../../resources/images/portfolio/jthcast/internationalization.mp4';
// import accessibilityVideo from '../../resources/images/portfolio/jthcast/accessibility.mp4';
// import boxMockup from '../../resources/images/portfolio/jthcast/Craft Paper Box Mockup.jpg';
// import tagsMockup from '../../resources/images/portfolio/jthcast/Tags Mockup.jpg';
// import cupMockup from '../../resources/images/portfolio/jthcast/Cup Mockup.jpg';

const Item = (): JSX.Element => {
  return (
    <>
      <section className="jth-section">
        <div className="jth-container jth-section-rowGrid jth-section-maxWidth-70 jth-portfolio-title">
          <h1>JthCast</h1>
          <p>
            경험하고 싶거나 배우고 싶은 기술들을 마음껏 사용하기 위해 만든 개인
            블로그
          </p>
        </div>
      </section>
      <section className="jth-section">
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/jthcast.png?raw=true"
          alt="jthcast"
          className="jth-portfolio-widthImage"
        />
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-twoColGrid">
          <div className="jth-section-rowGrid">
            <h2>개요</h2>
            <p>
              JthCast는 제 이름 정태훈의 이니셜 jth와 보내다의 뜻을 가진 cast를
              합쳐 만든 말로, 글과 포트폴리오를 제공하기 위한 개인 블로그
              프로젝트입니다. 일반적인 플랫폼에서 제공하는 블로그 서비스 대신
              직접 만듦으로써, 사용자에게 원하는 UI와 UX를 제공할 수 있습니다.
              또한 특정 기술을 선택 사용하여 더 빠른 속도와 새로운 기능을 선보일
              수 있습니다.
            </p>
            <p>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://jthcast.github.io/"
                className="jth-external-link"
              >
                JthCast 둘러보기
              </a>
            </p>
          </div>
          <div className="jth-section-rowGrid">
            <h2>방식</h2>
            <p>
              과한 구성요소들을 모두 배제한 미니멀 디자인으로 데스크톱 환경뿐
              아니라 태블릿, 모바일 환경에서도 편하게 사용할 수 있습니다. 미니멀
              디자인의 단점인 밋밋함을 포인트 색상과 애니메이션, 캐주얼한
              이미지로 풀어내려 노력했습니다. 사용자의 사용 방식을 강압적으로
              제어하는 것이 아닌, 넛지효과를 활용하여 자연스럽게 유도하도록
              구성하였습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-rowGrid">
          <h2>구축 환경</h2>
          <ul className="jth-portfolio-builtWith">
            <li>Javascript ES6+</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Recoil</li>
            <li>Testing Library</li>
            <li>SCSS</li>
          </ul>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/jthcast/jthcast-client/"
              className="jth-external-link"
            >
              JthCast Github 둘러보기
            </a>
          </p>
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-twoColGrid-center">
          <video
            preload="auto"
            muted
            loop
            playsInline
            autoPlay
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/darkmode.mp4?raw=true"
          />
          <div className="jth-section-rowGrid">
            <h2>다크 모드</h2>
            <p>
              모바일에서 어두운 테마를 지원하고, 모바일에서의 웹 사용이 늘어남에
              따라 사용자들은 웹에서도 다크 모드를 원하기 시작했습니다. 이러한
              요구에 따라 많은 웹 서비스들이 다크 모드를 지원하기 시작했습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-twoColGrid-center">
          <div className="jth-section-rowGrid jth-section-mobileOrder-2">
            <h2>국제화</h2>
            <p>
              인터넷은 전 세계가 하나로 묶여있습니다. 검색 엔진이 발달함에 따라
              다양한 국가에서 유입이 이루어지기도 하며, 하나의 제품을 여러
              국가에서 서비스하기도 합니다. 이를 위해 다국어 및 국제화를
              지원하는 서비스들이 많아졌습니다.
            </p>
          </div>
          <video
            preload="auto"
            muted
            loop
            playsInline
            autoPlay
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/internationalization.mp4?raw=true"
            className="jth-portfolio-widthImage"
          />
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-twoColGrid-center">
          <video
            preload="auto"
            muted
            loop
            playsInline
            autoPlay
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/accessibility.mp4?raw=true"
          />
          <div className="jth-section-rowGrid">
            <h2>웹 표준</h2>
            <p>
              정보화 사회로 빠르게 발전함에 따라 장애인, 노인, 저시력자 등
              정보취약계층의 인터넷 사용률 또한 높아졌습니다. 웹 표준을
              지킴으로써 접근성을 높여 이러한 분들이 더 쉽게 웹페이지를 이용할
              수 있습니다.
            </p>
          </div>
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-rowGrid jth-section-maxWidth-70">
          <h2>글꼴과 색상</h2>
          <p>
            웹 사이트의 디자인에서 글꼴과 색상이 차지하는 부분은 매우
            중요합니다. 미니멀하면서도 캐주얼한 디자인을 표현하기 위해
            깔끔하지만 디테일이 들어있는 서체인
            &apos;IBMPlexSansKR-Light&apos;를 사용하였으며, 포인트 색상으로
            활력을 보여주지만 압도감을 주지 않는{' '}
            <span className="jth-text-primary">오렌지색(#F6A54C)</span>과
            창의성을 나타내면서도 차분하며 오렌지색과 잘 어울리는{' '}
            <span className="jth-text-secondary">밝은 남색(#614CF6)</span>을
            선택하였습니다.
          </p>
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-twoColGrid-center">
          <div className="jth-section-rowGrid jth-section-mobileOrder-2">
            <h2>로고</h2>
            <p>
              JthCast는 IT에 대한 포스트가 주된 콘텐츠인 블로그입니다. 이에
              Code와 Cast의 C, 코드 꺾은 괄호와 방송을 뜻하는 안테나에서 영감을
              받아 만들었습니다. 미니멀 디자인을 유지하기 위해 로고 또한 디테일
              없이 단순한 심벌로 표현하였으며, 전체적인 디자인과 꼭짓점 부분을
              약간 둥글게 만들어 캐주얼함을 더했습니다. 색상은 오렌지색과 밝은
              남색으로 포인트 색상과 통일하였습니다.
            </p>
          </div>
          <IconLogoColored className="jth-portfolio-logo" />
        </div>
      </section>
      <section className="jth-section">
        <div className="jth-container jth-section-rowGrid-center">
          <img
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/Tags%20Mockup.jpg?raw=true"
            alt="Tags Mockup"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/Cup%20Mockup.jpg?raw=true"
            alt="Cup Mockup"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/portfolio/jthcast/Craft%20Paper%20Box%20Mockup.jpg?raw=true"
            alt="Box Mockup"
          />
        </div>
      </section>
    </>
  );
};

export default Item;
