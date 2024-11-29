// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.


function adder(a, b, s = 0){
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    return s;
  }
  
  
  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( adder(3, 5) )