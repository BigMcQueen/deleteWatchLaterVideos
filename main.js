function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteWatchLaterVideos() {
  // Get a list of videos
  const items = document.querySelectorAll("ytd-playlist-video-renderer");

  console.log(items);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const dropdownButton = item.querySelector('yt-icon-button.dropdown-trigger > button[aria-label]');

    dropdownButton.click();

    await sleep(1000);
  }
}

deleteWatchLaterVideos();
