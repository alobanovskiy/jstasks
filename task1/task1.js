export default function tast1new(array){//эта хуйня работает - кидай в неё строку вида "1234,99-0,800"
  let prevRes = array.split(',');
  let result = [];
  for (let i = 0; i<prevRes.length; i++){
    result[i] = [];
    let xRay = prevRes[i].split('-');
    if (xRay.length ===1){
        result[i] = [(+xRay[0]), (+xRay[xRay.length-1])];
    }
    else {
      xRay = xRay.sort(function(a,b){return a - b;});
      result[i] = [(+xRay[0]),(+xRay[xRay.length-1])];
      //console.log(xRay,"****", result[i]);
    }
  }
  let newArray = result.sort(function(a,b){return a[0] - b[0];});
  let finalResult = removeExtraRanges(newArray);
  return finalResult;
}

function removeExtraRanges(array) {
  let result = [];
  let k = 0;
  result[k] = array[0];
  for (var i = 0; i < array.length; i++) {
    if((array[i][0]-result[k][1])>1) {
      k++;
      result[k] = array[i];
    }
    if (result[k][0]>array[i][0])
    {
      result[k][0]=array[i][0];
    }

    if (result[k][1]<array[i][1])
    {
      result[k][1]=array[i][1];
    }
  }
  return result;
}
