// Implement the SLEEP function in JavaScript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to remove a video from the list
async function deleteWatchLaterVideos() {
  try {
    // Get a list of videos
    const items = document.querySelectorAll("#contents ytd-playlist-video-renderer");

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Click on the Kebab Menu in the video
      const dropdownButton = item.querySelector('yt-icon-button.dropdown-trigger > button[aria-label]');
      dropdownButton.click();

      // Wait 100 milliseconds
      await sleep(1000);

      // Click on Delete button
      const deleteButton = document.querySelector("tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer").children[2];
      deleteButton.click();

      // Wait 100 milliseconds
      await sleep(1000);
    }
  } catch (error) {
    console.error(error);
  }
}

// Perform the function of deleting videos.
deleteWatchLaterVideos();
