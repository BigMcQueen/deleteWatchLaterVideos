// Delay function to wait for a specified number of milliseconds
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function to click an element
async function clickElement(element) {
  if (!element) {
    throw new Error("Element is null or undefined");
  }
  element.click();
  await delay(1000); // Assume we need to wait after each click
}

// Function to remove a video from the playlist
async function deleteVideo(item) {
  try {
    // Click on the Kebab Menu in the video
    const dropdownButton = item.querySelector('yt-icon-button.dropdown-trigger > button[aria-label]');
    await clickElement(dropdownButton);

    // Click on Delete button
    const deleteButton = document.querySelector("tp-yt-paper-listbox.style-scope.ytd-menu-popup-renderer").children[2];
    await clickElement(deleteButton);
  } catch (error) {
    console.error(`Error deleting video: ${error.message}`);
  }
}

// Function to remove videos from the playlist
async function deleteWatchLaterVideos() {
  // Get a list of videos
  const items = document.querySelectorAll("#contents ytd-playlist-video-renderer");

  // Delete each video
  for (const item of items) {
    await deleteVideo(item);
  }
}

// Perform the function of deleting videos.
deleteWatchLaterVideos();
