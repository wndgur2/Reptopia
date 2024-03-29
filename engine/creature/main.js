/*
  cage.js
  2021.01.27
  Functions for Cages.
*/
/*
  1.3.14
    1. cage 초기설정 추가
*/

//Element setting
var canvasEl = document.getElementById("cage");
canvasEl.width = innerWidth;
canvasEl.height = innerHeight;
var ctxBackground = canvasEl.getContext("2d");

//객체를 총괄하는 배열
var eyes = [], waves = [], objects = [];
var cageList = document.getElementsByClassName("cage");
var cageCtxList = [];

//현재 프레임
var frame = 0;

//Animation frame objects.
var initAnimation;
var cageAnimations = [0, 0, 0, 0, 0];

//conts
const timeSlow = 1;
const reactFrame = 10 * timeSlow;
const eyeRange = 25;

//Cages 초기설정(바닥 하나, creatures 둘)
for(cageN=0;cageN<cageList.length;cageN++){
  cageCtxList.push(cageList[cageN].getContext("2d"));
  objects.push([  new ObjectR(cageList[cageN], cageCtxList[cageN],
      'wall', 0, cageList[cageN].height-100, 1, 10000,
      cageList[cageN].width, 100, [120,80,30]),
    randomObject('creature', cageList[cageN], cageCtxList[cageN], 10),
    randomObject('creature', cageList[cageN], cageCtxList[cageN], 700)]);
}

cageLoop(0);
showCageInfo(0);