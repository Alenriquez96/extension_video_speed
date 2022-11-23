let videos = document.getElementsByTagName("video");

window.addEventListener("keypress", function (e) {
  if (e.key === "e") {
    for (let i = 0; i < videos.length; i++) {
      videos[i].playbackRate < 15.999999999999961
        ? (videos[i].playbackRate += 0.1)
        : (videos[i].playbackRate += 0.0);
      console.log(videos[i].playbackRate);
    }
  } else if (e.key === "q") {
    for (let i = 0; i < videos.length; i++) {
      videos[i].playbackRate > 0.10000000000000103
        ? (videos[i].playbackRate -= 0.1)
        : (videos[i].playbackRate -= 0.0);
      console.log(videos[i].playbackRate);
    }
  }
});
