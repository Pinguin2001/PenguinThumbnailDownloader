/* Global variables */
var videoid = {};

/* On document loaded */
$(document).ready(function() {
  /* Responive Nav */
  opencloseNav();
  /* Load home */
  openPage("Home");
});

$(window).resize(function() {
  opencloseNav();
});

/* When user entered a video link and hit the enter key, show thumbnail resolution options */
$("#VideoURLInput")[0].addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    ShowResOptions();
  }
});

/* Navigation bar */
function opencloseNav() {
  /* if windows width > 700 show navigation bar on the left side
  else hide it behind the hamburger menu button */
  if ($(window).width() > 700) {
    openNav();
  }
  else {
    closeNav();
  }
}

function openNav() {
  $('.Nav').width("200px");
}

function closeNav() {
  $('.Nav').width("0px");
}


function openPage(pageName) {
  var page = $(".page");
  for (i = 0; i < page.length; i++) {
    $(page[i]).hide();
  }
  if ($(window).width() < 700) {
    closeNav();
  }
  $("#" + pageName).show();
}

/* Home */
function ShowResOptions() {
  $(".DownloadOptionsContainer").show();
  $(".ThumbnailContainer").hide();
}

function GetVideoID() {
  var VideoURLInputValue = $("#VideoURLInput").val();
  if (VideoURLInputValue.includes("watch"))
  {
    videoid = VideoURLInputValue.substr(32);
  }
  else if (VideoURLInputValue.includes("embed"))
  {
    videoid = VideoURLInputValue.substr(30);
  }
  else if (VideoURLInputValue.includes("youtu.be"))
  {
    videoid = VideoURLInputValue.substr(17);
  }
  else {
    alert("The link you entered cannot be processed");
  }
}

function LoadThumbnail() {
  var SelectedRes = $('input:radio[name="quality"]:checked').val();
  if (!SelectedRes)
  {
    alert("Please verify you selected a quality option");
  }
  else {
    GetVideoID();
    $(".ThumbnailContainer .Thumbnail").attr("src", "https://img.youtube.com/vi/" + videoid + SelectedRes);
    $(".ThumbnailContainer").show();
  }
}