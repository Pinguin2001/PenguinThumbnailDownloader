// Global variables
var videoid = {};

// On document loaded
document.addEventListener("DOMContentLoaded", function () {
  // Load home
  openPage("Home");
});

// When user entered a video link and hit the enter key, show thumbnail resolution options
document.getElementById("VideoURLInput").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    ShowResOptions();
  }
});

// Navigation bar
function openNav() {
  document.querySelector(".Nav").style.width = "200px";
}

function closeNav() {
  document.querySelector(".Nav").style.width = "0px";
}

function openPage(pageName) {
  var page = document.querySelectorAll(".page");
  for (var i = 0; i < page.length; i++) {
    page[i].style.display = "none";
  }
  if (window.innerWidth < 700) {
    closeNav();
  }
  document.getElementById(pageName).style.display = "block";
}

// Home
function ShowResOptions() {
  document.querySelector(".DownloadOptionsContainer").style.display = "block";
  document.querySelector(".ThumbnailContainer").style.display = "none";
}

function GetVideoID() {
  var VideoURLInputValue = document.getElementById("VideoURLInput").value;
  if (VideoURLInputValue.includes("watch")) {
    videoid = VideoURLInputValue.substr(32);
  } else if (VideoURLInputValue.includes("embed")) {
    videoid = VideoURLInputValue.substr(30);
  } else if (VideoURLInputValue.includes("youtu.be")) {
    videoid = VideoURLInputValue.substr(17);
  } else {
    alert("The link you entered cannot be processed");
  }
}

function LoadThumbnail() {
  var SelectedRes = document.querySelector('input[name="quality"]:checked');
  if (!SelectedRes) {
    alert("Please verify you selected a quality option");
  } else {
    GetVideoID();
    document.querySelector(".ThumbnailContainer .Thumbnail").src =
      "https://img.youtube.com/vi/" + videoid + SelectedRes.value;
    document.querySelector(".ThumbnailContainer").style.display = "block";
  }
}
