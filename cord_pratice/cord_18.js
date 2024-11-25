// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.



function strToInt(str){
    var result = 0;
      result=Number(str);
    return result;
  }

  console.log(strToInt("-1234"));



// function strToInt(str)
// str라는 문자열을 인자로 받아 숫자로 변환하는 함수
// 함수 이름 strToInt는 "문자열을 정수로 변환"이라는 의미

// var result = 0;
// 변환된 결과를 저장하기 위해 result라는 변수를 선언하고 초기값으로 0을 설정

// result = Number(str);
// str을 Number 객체를 이용해 숫자로 변환하고, 그 결과를 result에 저장

// return result;
// 변환된 결과값을 반환