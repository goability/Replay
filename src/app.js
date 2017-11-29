
var playbackImageModule = angular.module('PlaybackImageModule', []);


playbackImageModule.controller('PlaybackImageController', function PlaybackImageController($scope){

  //Initialize local VARS

  $scope.headerTitle = "REPLAY";
  $scope.imageDefault = '/images/ImportCAM3/20171128/1800/cam32017112818052501.jpg';
  $scope.imageDefaultFolder = '/images/importCAM3/';
  $scope.currentImageMonth = "DECEMBER";
  $scope.currentImageYear = "2017";

  $scope.currentCameras = [
    {
      name : "Camera1",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera2",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera3",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera4",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera5",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera6",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },
    {
      name : "Camera7",
      status : "ON",
      maplocationX : 100,
      maplocationXY : 50,
    },

  ];
  $scope.CurrentImages = [
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818052501.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818052501.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818052801.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818053101.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818053401.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818053701.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818054001.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818054301.jpg'
    },
    {
      camera : 'Camera1',
      path : '/images/ImportCAM3/20171128/1800/cam32017112818054601.jpg'
    },
  ];
  $scope.WelcomeMessage = "Hello";

});
var myIndex = 1;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log("There are " + x.length + " pictures");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       x[myIndex].style.display = "block";
       console.log(x[i].style);
    }
    if (++myIndex >= x.length-1) {myIndex = 1}

    setTimeout(carousel, 200); // Change image every 2 seconds
};
