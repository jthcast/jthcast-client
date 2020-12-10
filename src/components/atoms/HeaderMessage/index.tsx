import React from 'react';
import './HeaderMessage.scss';
import { useRecoilState } from 'recoil';
import { IconTimes } from '../Icons';
import { headerMessageState } from '../../../recoilStates';
import Button from '../Button';

interface HeaderMessageProps {
  allowClose?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const HeaderMessage = ({
  allowClose = true,
  children,
  className,
}: HeaderMessageProps): JSX.Element => {
  const [headerMessage, setHeaderMessageState] = useRecoilState(
    headerMessageState
  );
  const closeHandling = () => {
    setHeaderMessageState(false);
  };

  return (
    <>
      {children && headerMessage && (
        <div className={`jth-headerMessage${className ? ` ${className}` : ``}`}>
          <div className="jth-headerMessage-container">
            <span className="jth-headerMessage-content">{children}</span>
            {allowClose && (
              <Button
                ariaLabel="close"
                lineType="none"
                onClick={closeHandling}
                className="jth-headerMessage-allowClose"
              >
                <IconTimes />
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMessage;
