// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.



function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}

// push() 함수는
// 배열의 끝에 하나 이상의 요소를 추가(push, 뒤에서 밀어 넣기)하는 함수입니다.
// 배열의 새로운 길이를 반환합니다.