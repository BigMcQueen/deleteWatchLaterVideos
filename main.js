function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteWatchLaterVideos() {
  // Get a list of videos
  const items = document.querySelectorAll("ytd-playlist-video-renderer");

  console.log(items)
}

deleteWatchLaterVideos();
