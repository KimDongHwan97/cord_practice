// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// 못풀었다.


function solution(n) {
    // var arr = [];
    // for (var i=0; i<n.length; i++) {                    //length 1. 속성 배열의 길이를 반환 2. 문자열의 길이를 반환 3. 유사 배열 객체의 길이를 반환
    //     arr.push(n[i]);                                 //배열의 length 값을 이용하면 배열을 반복문에서 쉽게 순회할 수 있습니다.
    //     console.log(n[i]);                              //length 속성은 배열에 있는 요소의 개수를 나타내기 때문에, 이를 활용하여 배열의 각 요소에 접근할 수 있습니다.
    // }
    // console.log(arr);
    // console.log('---------')
    // return n.toString().split('').sort((a, b) => b > a).map(o => o = parseInt(o));
    return n.toString().split('').reverse().map(o => o = parseInt(o));               
}

// split() 함수는
// 문자열을 주어진 문자열 구분자나 정규식을 기준으로 나누어 배열로 변환하는 함수입니다.
// .split(" "); // 공백을 기준으로 문자열을 배열로 나눔


// map() 함수는 배열의 각 요소를 변환하거나 가공한 결과를 적용한 새로운 요소로 배열을 생성하기 위해 사용됩니다.
// [a, b, c, d].map(소문자 → 대문자) 👉 [A, B, C, D]

// reverse() 함수는
// 배열의 요소 순서를 역순(reverse)으로 정렬하는 함수입니다.

// sort() 함수는
// 배열 요소를 원하는 정렬 순서로 변경(sort)하는 함수입니다.

// parseInt() 함수는 
// 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.
// parseInt(string);
// parseInt(string, radix);
// string
// 파싱할 값입니다. 문자열이 아닐 경우 ToString 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 공백은 무시합니다.
// radix Optional
// string의 진수를 나타내는 2부터 36까지의 정수입니다. 주의하세요. 기본 값이 10이 아닙니다! Number 자료형이 아닌 경우 Number로 변환합니다.
