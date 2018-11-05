    function checkFrame(arrayOfChecks){
      let frameDelta = 10;
      let minXobj = arrayOfChecks.reduce(function min(minV, current){
        if(minV["x"] < current["x"])
          return minV;
        else
          return current;
      });
      let minYobj = arrayOfChecks.reduce(function min(minV, current){
        if(minV["y"] < current["y"])
          return minV;
        else
          return current;
      });
      let maxXobj = arrayOfChecks.reduce(function max(maxV, current){
        if((maxV["x"] + maxV["width"]) > (current["x"] + current["width"]))
          return maxV;
        else
          return current;
      });
      let maxYobj = arrayOfChecks.reduce(function max(maxV, current){
        if((maxV["y"] + maxV["height"]) > (current["y"] + current["height"]))
          return maxV;
        else
          return current;
      });
      let cordX = minXobj["x"] - frameDelta;
      let cordY = maxYobj["y"] + frameDelta;
      let width = maxXobj["x"] - cordX + frameDelta + maxXobj["width"];
      let height = cordY - minYobj["y"] + frameDelta + minYobj["height"];
      return { x: cordX, y: cordY, width: width, height: height };
    }
