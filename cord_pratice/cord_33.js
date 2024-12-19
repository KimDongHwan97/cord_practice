// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000


function solution(left, right) {
    let answer = 0;
  
    for (let i = left; i <= right; i++) {
      let count = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) count++;
      }
      if (count % 2) answer -= i;
      else answer += i;
    }
  
    return answer;
  }


//   초기 설정
// let answer = 0;
// answer는 최종 합을 저장하는 변수입니다.

// 첫 번째 for문 (i 반복)
// for (let i = left; i <= right; i++) {
// i는 left부터 right까지 반복합니다. 즉, 이 범위 내의 모든 수에 대해 검사합니다.


// 약수의 개수 세기 (count 변수)
// let count = 0;
// for (let j = 1; j <= i; j++) {
//     if (i % j === 0) count++;
// }
// j는 1부터 i까지 반복하며 i가 j로 나누어떨어지는지 검사합니다.
// i % j === 0 조건이 참이라면 j는 i의 약수입니다.
// count는 i의 약수의 개수를 누적합니다.


// 약수의 개수에 따른 조건
// if (count % 2) answer -= i;
// else answer += i;
// count % 2가 참이면 (즉, 약수의 개수가 홀수라면)
// answer에서 i를 뺍니다. (answer -= i)
// 그 외 (약수의 개수가 짝수라면)
// answer에 i를 더합니다. (answer += i)


// 결과 반환
// return answer;
// 최종적으로 계산된 answer 값을 반환합니다.
