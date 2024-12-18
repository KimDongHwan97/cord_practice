// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.


function solution(s) {
    // 문자열의 길이를 반으로 나누고 올림(Math.ceil)하여 가운데 문자의 위치를 계산합니다.
    // Math.ceil(s.length / 2) - 1: 가운데 문자(또는 첫 번째 가운데 문자)의 시작 인덱스
    // 길이가 홀수일 경우, 가운데 문자의 인덱스
    // 길이가 짝수일 경우, 두 가운데 문자 중 첫 번째의 인덱스

    // substr(start, length):
    // start: 시작 위치
    // length: 추출할 문자 수
    // 길이가 짝수면 2개, 홀수면 1개를 추출하도록 조건을 추가합니다.
    return s.substr(
        Math.ceil(s.length / 2) - 1,  // 가운데 문자의 시작 위치
        s.length % 2 === 0 ? 2 : 1   // 문자열 길이가 짝수이면 2, 홀수이면 1
    );
}