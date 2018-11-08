    function checkFrame(arrayOfChecks){
      let frameDelta = 10;
      let minX = Math.min(...arrayOfChecks.map(function check(check){return check.x}));
      let minY = Math.min(...arrayOfChecks.map(function check(check){return check.y}));
      let maxY = Math.max(...arrayOfChecks.map(function check(check){return check.y + check.height}));
      let maxX = Math.max(...arrayOfChecks.map(function check(check){return check.x + check.width}));
      let cordX = minX - frameDelta;
      let cordY = minY - frameDelta;
      let width = max - cordX + frameDelta;
      let height = maxY - cordY + frameDelta;
      return { x: cordX, y: cordY, width: width, height: height };
    }
