// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.


function average(array){
  var sum = 0;
    for(var i = 0; i<array.length; i++){
      sum += array[i];
    }
    return sum/array.length;
  }
  