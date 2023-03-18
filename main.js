function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteWatchLaterVideos() {
  // Get a list of videos
  const items = document.querySelectorAll("ytd-playlist-video-renderer");

  console.log(items);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Click on the Kebab Menu in the video
    const dropdownButton = item.querySelector('yt-icon-button.dropdown-trigger > button[aria-label]');
    dropdownButton.click();

    // Click on Delete button
    const deleteButton = document.querySelector("tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer").children[2];
    deleteButton.click();

    await sleep(1000);
  }
}

deleteWatchLaterVideos();
