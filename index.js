let getActivityBtnEl = document.getElementById("getActivityBtn");
let activityNameEl = document.getElementById("activityName");
let activityTypeEl = document.getElementById("activityType");
let spinnerEl = document.getElementById("spinner");
let activityImgEl = document.getElementById("activityImg");
let resultEl = document.getElementById("result");

getActivityBtnEl.addEventListener("click", function () {
  spinnerEl.classList.remove("d-none");
  let options = {
    method: "GET",
  };
  let url = "https://apis.ccbp.in/random-activity";
  fetch(url, options).then(function (response) {
    return response.json();
  });
});
