document.addEventListener("DOMContentLoaded", () => {
  var elementBookmark = document.getElementById("bookmark");
  var elementSearch = document.getElementById("search");
  var elementShare = document.getElementById("share");

  document
    .getElementById("q1")
    .addEventListener("click", () => showAnswer("answer1"));
  document
    .getElementById("q2")
    .addEventListener("click", () => showAnswer("answer2"));
  document
    .getElementById("q3")
    .addEventListener("click", () => showAnswer("answer3"));
  document
    .getElementById("q4")
    .addEventListener("click", () => showAnswer("answer4"));

  function showAnswer(question) {
    document.getElementById(question).classList.toggle("hidden");
    changeArrow();
  }
  function changeArrow() {
    console.log("arrow");
    document.getElementById("arrow1").classList.toggle("stroke-soft-Red");
  }

  function showFeatures(item, barRed) {
    elementBookmark.classList.toggle("hidden", item !== "bookmark");
    document
      .getElementById("redBookmark")
      .classList.toggle("hidden", barRed !== "redBookmark");
    document
      .getElementById("bookmarkBtn")
      .classList.toggle("text-Very-Dark-Blue", barRed === "redBookmark");

    elementSearch.classList.toggle("hidden", item !== "search");
    document
      .getElementById("redSearch")
      .classList.toggle("hidden", barRed !== "redSearch");
    document
      .getElementById("searchBtn")
      .classList.toggle("text-Very-Dark-Blue", barRed === "redSearch");

    elementShare.classList.toggle("hidden", item !== "share");
    document
      .getElementById("redShare")
      .classList.toggle("hidden", barRed !== "redShare");
    document
      .getElementById("shareBtn")
      .classList.toggle("text-Very-Dark-Blue", barRed === "redShare");
  }

  document
    .getElementById("bookmarkBtn")
    .addEventListener("click", () => showFeatures("bookmark", "redBookmark"));
  document
    .getElementById("searchBtn")
    .addEventListener("click", () => showFeatures("search", "redSearch"));
  document
    .getElementById("shareBtn")
    .addEventListener("click", () => showFeatures("share", "redShare"));
});

function showMenu() {
  document.getElementById("hamburgerMenu").classList.toggle("hidden");
}
