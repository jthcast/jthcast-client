import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';

const Item = (): JSX.Element => {
  const code = `
const getLCM = (n, m) => {
  const getGCD = (n, m) => {
    return m ? getGCD(m, (n % m)) : n;
  };

  return (n * m) / getGCD(n, m);
};
`;
  return (
    <>
      <PrismCode code={code} language="javascript" />
      <h2>입력</h2>
      <p>
        const n = 2;
        <br />
        const m = 4;
      </p>
      <h2>출력</h2>
      <p>4</p>
    </>
  );
};

export default Item;
