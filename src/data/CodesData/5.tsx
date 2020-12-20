import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';

const Item = (): JSX.Element => {
  const code = `
function sieveOfEratosthenes(n) {
  const answer = [...Array(n+1).keys()];
  for(let i=2; i<answer.length; i++){
      if(answer[i] !== -1){
          for(let index=i*i; index<=n; index+=i){
              answer[index] = -1;
          }
      }
  }
  
  return answer.filter(number => number !== -1 && number !== 0 && number !== 1);
}
`;
  return (
    <>
      <PrismCode code={code} language="javascript" />
      <h2>입력</h2>
      <p>const n = 100;</p>
      <h2>출력</h2>
      <p>
        [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97]
      </p>
    </>
  );
};

export default Item;
