// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.


function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}

// 주어진 함수 solution(a, b)는 두 개의 배열 a와 b를 받아서 두 배열의 각 요소의 곱을 모두 더한 결과를 반환하는 함수입니다. 
// 이는 수학적으로 **내적(dot product)**을 계산하는 것과 같습니다.

// 1.매개변수:
// a: 숫자 배열
// b: 숫자 배열
// 두 배열은 같은 길이여야 합니다.

// 2.reduce 함수:
// a.reduce(callback, initialValue):
// callback: 배열의 각 요소에 대해 실행되는 함수.
// initialValue: 누적 값의 초기 값. 여기서는 0.

// 3.내부의 callback 함수:
// javascript
// 코드 복사
// (acc, _, i) => acc += a[i] * b[i]
// acc: 누적 값 (초기값은 0).
// _: reduce의 두 번째 매개변수로, 현재 요소 값인데, 여기서는 사용되지 않으므로 _로 표시.
// i: 현재 요소의 인덱스.
// a[i] * b[i]: 두 배열의 동일한 인덱스에 있는 요소를 곱함.
// acc += a[i] * b[i]: 누적 값에 곱한 결과를 더함.

// 4.결과 반환:
// reduce는 두 배열의 각 요소를 순회하며 a[i] * b[i]를 누적하여 결과를 반환합니다.

const a = [1, 2, 3];
const b = [4, 5, 6];
console.log(solution(a, b));

// solution 함수는 두 배열의 같은 위치에 있는 숫자를 곱해서 전부 더한 값을 계산합니다. 
// 이는 벡터의 내적을 구하는 알고리즘과 동일합니다.
