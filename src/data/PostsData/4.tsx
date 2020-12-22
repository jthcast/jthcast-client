import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';
// import reactLifeCycle from '../../resources/images/post/4/react life cycle.jpeg';

const Item = (): JSX.Element => {
  const checkSystemPreferenceCode = `
import React, { ErrorInfo, ReactNode } from 'react';
import ErrorPage from '../../pages/ErrorPage';

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryInterface {
  hasError: boolean;
  error?: Error | null;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, ErrorBoundaryInterface> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryInterface {
    return { hasError: true, error };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  //   logErrorToMyService(error, errorInfo);
  //   console.error('Uncaught error:', error, errorInfo);
  // }

  render(): JSX.Element | ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorPage />;
    }

    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
`;
  return (
    <>
      <h2>Error boundary</h2>
      <p>
        우리가 React를 사용하는 이유는 상태의 변화로 컴포넌트를 제어하기 쉽기
        때문이다. 이러한 컴포넌트 하나하나가 모여 하나의 웹 사이트를 구성하게
        된다. 그런데, 쌓아 올린 컴포넌트 중 어느 한 군데서 에러가 발생한다면?
      </p>
      <p>
        React 또한 Javascript의 일부일 뿐.. 에러가 발생한 즉시 React는 모든
        컴포넌트를 언마운트 하며 죽어버릴 것이다. 한곳에서 발생한 오류로
        어플리케이션이 작동 중단돼서는 안 될 일이다.
      </p>
      <p>
        그렇다면 try/catch처럼 오류를 제어할 순 없을까? 이러한 개념에서 Error
        boundary가 지원되기 시작했다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ko.reactjs.org/docs/error-boundaries.html"
          className="jth-external-link"
        >
          에러 경계(Error Boundaries)
        </a>
      </p>
      <h2>Class 형식이 필요한 이유</h2>
      <p>
        그래서, Class 형식이 필요한 이유가 무엇인가에 대해 간단히 설명하자면,
        한마디로{' '}
        <span className="jth-text">
          Hooks에서 지원하는 방식으로는 오류 발생 시 제어할 방법이 없다.
        </span>
      </p>
      <p>
        · getSnapshotBeforeUpdate: 가장 마지막으로 렌더링 된 결과가 DOM 등에
        반영되었을 때 호출
      </p>
      <p>
        · getDerivedStateFromError: 하위의 자손 컴포넌트에서 오류가 발생했을 때
        render 단계에서 호출
      </p>
      <blockquote>
        render 단계는 React가 DOM 갱신이 일어날 때 이전과 이후를 비교하며 변경
        사항을 계산하는 단계이다.
      </blockquote>
      <p>
        · componentDidCatch: 하위의 자손 컴포넌트에서 오류가 발생했을 때 commit
        단계에서 호출
      </p>
      <blockquote>
        commit 단계는 React가 비교를 끝내고 DOM에 직접적으로 갱신될 내용을
        적용하는 단계이다.
      </blockquote>
      <p>
        위의 세 가지 라이프 사이클이 아직은 Hooks에서 구현되지 않았기 때문이다.
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://reactjs.org/docs/hooks-faq.html#do-hooks-cover-all-use-cases-for-classes"
          className="jth-external-link"
        >
          Do Hooks cover all use cases for classes?
        </a>
      </p>
      <figure>
        <img
          src="https://cdn.jsdelivr.net/gh/jthcast/jthcast-client@master/src/resources/images/post/4/react%20life%20cycle.jpeg?raw=true"
          aria-label="React life cycle"
          alt="React life cycle"
        />
        <figcaption>머리 아프지만, 알면 도움이 되는 라이프 사이클</figcaption>
      </figure>
      <h2>Errorboundary 컴포넌트 구현</h2>
      <p>
        결국 하위의 자손 컴포넌트에서 오류가 발생했을 때 무언가 조치하려면
        Errorboundary를 getDerivedStateFromError, componentDidCatch의 단계에서
        처리해야 하므로 Class 형식으로 만들어야 제대로 된 라이프 사이클에서
        처리할 수 있다.
      </p>
      <PrismCode code={checkSystemPreferenceCode} />
      <p>
        getDerivedStateFromError 단계에서 에러를 확인, hasError의 상태를 true로
        변경하고 ErrorPage를 렌더링 하도록 구성하였다.
      </p>
      <p>
        만약 로깅 로직(Sentry 등)이 존재한다면 componentDidCatch 단계에서 로깅
        서비스를 호출하면 된다.
      </p>
      <p>
        Errorboundary는 try/catch처럼 트리 내에서{' '}
        <span className="jth-text">
          하위에 존재하는 컴포넌트의 에러만을 포착한다
        </span>
        는 점을 잊지 말아야 한다. 그러므로 최상위에 하나를 배치하여 모두
        처리할지, 혹은 에러가 날 가능성이 있는 컴포넌트마다 따로 감싸줄지는
        사용자가 선택하면 된다.
      </p>
    </>
  );
};

export default Item;
