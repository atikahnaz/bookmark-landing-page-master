document.addEventListener("DOMContentLoaded", () => {
  var elementBookmark = document.getElementById("bookmark");
  var elementSearch = document.getElementById("search");
  var elementShare = document.getElementById("share");

  function showFeatures(item) {
    elementBookmark.classList.toggle("hidden", item !== "bookmark");
    elementSearch.classList.toggle("hidden", item !== "search");
    elementShare.classList.toggle("hidden", item !== "share");
  }
  document
    .getElementById("bookmarkBtn")
    .addEventListener("click", () => showFeatures("bookmark"));
  document
    .getElementById("searchBtn")
    .addEventListener("click", () => showFeatures("search"));
  document
    .getElementById("shareBtn")
    .addEventListener("click", () => showFeatures("share"));
});
