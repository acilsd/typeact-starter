import * as React from 'react';
import styled from '../styled/theme';

interface IWrapper {
  className?: string;
  styles?: { width?: string, height?: string, justify?: string, padding?: string };
}

const WrapperDiv: React.SFC<IWrapper> = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

const Wrapper = styled(WrapperDiv) `
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export { Wrapper };
