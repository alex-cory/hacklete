// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

var objectArray = new Array();

fillObjectArray();
positionDivs();

function fillObjectArray()
{
	var birdDiv = document.getElementById("bird");
	var birdX = 312; //position div from half width of the page
	var birdY = 33;
	var birdFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
	var birdArray = new Array();
	birdArray.push(birdDiv, birdX, birdY, birdFactor);
	objectArray.push(birdArray);
	
	var bush1Div = document.getElementById("bush1");
	var bush1X = -28;
	var bush1Y = 352;
	var bush1Factor = 0.06;
	var bush1Array = new Array();
	bush1Array.push(bush1Div, bush1X, bush1Y, bush1Factor);
	objectArray.push(bush1Array);
	
	var bush2Div = document.getElementById("bush2");
	var bush2X = 802;
	var bush2Y = 352;
	var bush2Factor = 0.06;
	var bush2Array = new Array();
	bush2Array.push(bush2Div, bush2X, bush2Y, bush2Factor);
	objectArray.push(bush2Array);
	
	var cloudFrontDiv = document.getElementById("cloudFront");
	var cloudFrontX = -1938;
	var cloudFrontY = 501;
	var cloudFrontFactor = 0.12;
	var cloudFrontArray = new Array();
	cloudFrontArray.push(cloudFrontDiv,cloudFrontX, cloudFrontY, cloudFrontFactor);
	objectArray.push(cloudFrontArray);
	
	var cloudFrontBottomDiv = document.getElementById("cloudFrontBottom");
	var cloudFrontBottomX = -1938;
	var cloudFrontBottomY = 650;
	var cloudFrontBottomFactor = 0.12;
	var cloudFrontBottomArray = new Array();
	cloudFrontBottomArray.push(cloudFrontBottomDiv,cloudFrontBottomX, cloudFrontBottomY, cloudFrontBottomFactor);
	objectArray.push(cloudFrontBottomArray);
	
	var cloudBackDiv = document.getElementById("cloudBack");
	var cloudBackX = -1448;
	var cloudBackY = 361;
	var cloudBackFactor = 0.03;
	var cloudBackArray = new Array();
	cloudBackArray.push(cloudBackDiv,cloudBackX, cloudBackY, cloudBackFactor);
	objectArray.push(cloudBackArray);
	
	var cloudTop1Div = document.getElementById("cloudTop1");
	var cloudTop1X = 93;
	var cloudTop1Y = 190;
	var cloudTop1Factor = 0.01;
	var cloudTop1Array = new Array();
	cloudTop1Array.push(cloudTop1Div, cloudTop1X, cloudTop1Y, cloudTop1Factor);
	objectArray.push(cloudTop1Array);
	
	var cloudTop2Div = document.getElementById("cloudTop2");
	var cloudTop2X = 562;
	var cloudTop2Y = 10;
	var cloudTop2Factor = 0.01;
	var cloudTop2Array = new Array();
	cloudTop2Array.push(cloudTop2Div, cloudTop2X, cloudTop2Y, cloudTop2Factor);
	objectArray.push(cloudTop2Array);
	
	var cloudTop3Div = document.getElementById("cloudTop3");
	var cloudTop3X = 892;
	var cloudTop3Y = 150;
	var cloudTop3Factor = 0.01;
	var cloudTop3Array = new Array();
	cloudTop3Array.push(cloudTop3Div, cloudTop3X, cloudTop3Y, cloudTop3Factor);
	objectArray.push(cloudTop3Array);
	
	var islandDiv = document.getElementById("island");
	var islandX = 294;
	var islandY = 256;
	var islandFactor = 0.04;
	var islandArray = new Array();
	islandArray.push (islandDiv, islandX, islandY, islandFactor);
	objectArray.push(islandArray);
	
	var mushroom1Div = document.getElementById("mushroom1");
	var mushroom1X = -128;
	var mushroom1Y = 500;
	var mushroom1Factor = 0.16;
	var mushroom1Array = new Array();
	mushroom1Array.push(mushroom1Div, mushroom1X, mushroom1Y, mushroom1Factor);
	objectArray.push(mushroom1Array);
	
	var mushroom2Div = document.getElementById("mushroom2");
	var mushroom2X = 26;
	var mushroom2Y = 490;
	var mushroom2Factor = 0.18;
	var mushroom2Array = new Array();
	mushroom2Array.push(mushroom2Div, mushroom2X, mushroom2Y, mushroom2Factor);
	objectArray.push(mushroom2Array);
	
	var mushroom3Div = document.getElementById("mushroom3");
	var mushroom3X = 1002;
	var mushroom3Y = 497;
	var mushroom3Factor = 0.16;
	var mushroom3Array = new Array();
	mushroom3Array.push(mushroom3Div, mushroom3X, mushroom3Y, mushroom3Factor);
	objectArray.push(mushroom3Array);
	
	var seaweed1Div = document.getElementById("seaweed1");
	var seaweed1X = -128;
	var seaweed1Y = 343;
	var seaweed1Factor = 0.08;
	var seaweed1Array = new Array();
	seaweed1Array.push(seaweed1Div, seaweed1X, seaweed1Y, seaweed1Factor);
	objectArray.push(seaweed1Array);
	
	var seaweed2Div = document.getElementById("seaweed2");
	var seaweed2X = 1010;
	var seaweed2Y = 273;
	var seaweed2Factor = 0.08;
	var seaweed2Array = new Array();
	seaweed2Array.push(seaweed2Div, seaweed2X, seaweed2Y, seaweed2Factor);
	objectArray.push(seaweed2Array);
	
	var snakeDiv = document.getElementById("snake");
	var snakeX = 467;
	var snakeY = 339;
	var snakeFactor = 0.14;
	var snakeArray = new Array();
	snakeArray.push(snakeDiv, snakeX, snakeY, snakeFactor);
	objectArray.push(snakeArray);
	
	var squidDiv = document.getElementById("squid");
	var squidX = 105;
	var squidY = 377;
	var squidFactor = 0.16;
	var squidArray = new Array();
	squidArray.push(squidDiv, squidX, squidY, squidFactor);
	objectArray.push(squidArray);
	
	var thornBranch1Div = document.getElementById("thornBranch1");
	var thornBranch1X = -2;
	var thornBranch1Y = 325;
	var thornBranch1Factor = 0.1;
	var thornBranch1Array = new Array();
	thornBranch1Array.push(thornBranch1Div, thornBranch1X, thornBranch1Y, thornBranch1Factor);
	objectArray.push(thornBranch1Array);
	
	var thornBranch2Div = document.getElementById("thornBranch2");
	var thornBranch2X = 802;
	var thornBranch2Y = 405;
	var thornBranch2Factor = 0.12;
	var thornBranch2Array = new Array();
	thornBranch2Array.push(thornBranch2Div, thornBranch2X, thornBranch2Y, thornBranch2Factor);
	objectArray.push(thornBranch2Array);
	
	var thornBranch3Div = document.getElementById("thornBranch3");
	var thornBranch3X = 862;
	var thornBranch3Y = 345;
	var thornBranch3Factor = 0.1;
	var thornBranch3Array = new Array();
	thornBranch3Array.push(thornBranch3Div, thornBranch3X, thornBranch3Y, thornBranch3Factor);
	objectArray.push(thornBranch3Array);
	
	var treeBranchDiv = document.getElementById("treeBranch");
	var treeBranchX = 372;
	var treeBranchY = 0;
	var treeBranchFactor = 0.04;
	var treeBranchArray = new Array();
	treeBranchArray.push(treeBranchDiv, treeBranchX, treeBranchY, treeBranchFactor);
	objectArray.push(treeBranchArray);
	
	var treeLeavesLeftDiv = document.getElementById("treeLeavesLeft");
	var treeLeavesLeftX = 80;
	var treeLeavesLeftY = 0;
	var treeLeavesLeftFactor = 0.04;
	var treeLeavesLeftArray = new Array();
	treeLeavesLeftArray.push(treeLeavesLeftDiv, treeLeavesLeftX, treeLeavesLeftY, treeLeavesLeftFactor);
	objectArray.push(treeLeavesLeftArray);
	
	var treeLeavesRightDiv = document.getElementById("treeLeavesRight");
	var treeLeavesRightX = 702;
	var treeLeavesRightY = 0;
	var treeLeavesRightFactor = 0.04;
	var treeLeavesRightArray = new Array();
	treeLeavesRightArray.push(treeLeavesRightDiv, treeLeavesRightX, treeLeavesRightY, treeLeavesRightFactor);
	objectArray.push(treeLeavesRightArray);
}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e)
{
	  if (IE)
	  {
		// grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft
		tempY = event.clientY + document.body.scrollTop
	  } 
	  else 
	  {
		// grab the x-y pos.s if browser is NS
		tempX = e.pageX
		tempY = e.pageY
	  }  
	  // catch possible negative values in NS4
	  if (tempX < 0){tempX = 0}
	  if (tempY < 0){tempY = 0}  
	  
	  moveDiv(tempX);
	  
	  return true
}

function moveDiv(tempX)
{	
	for (var i=0;i<objectArray.length;i++)
	{
		var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
		objectArray[i][0].style.left = yourDivPositionX + 'px';
	}
}

function positionDivs()
{
	for (var i=0;i<objectArray.length;i++)
	{
		objectArray[i][0].style.left = objectArray[i][1] + "px";
		objectArray[i][0].style.top = objectArray[i][2] + "px";
	}
}