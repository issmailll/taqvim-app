// ---------------------------------------------------------------------------------------------------------
"use strict";
const Items = document.querySelectorAll(".pray-item");

async function getTime() {
  const request = await fetch(
    "https://islomapi.uz/api/present/day?region=Toshkent"
  );
  const respons = await request.json();
  renderTimes(respons.times);
}
getTime();

function renderTimes(arr) {
  const times = Object.values(arr);
  times.forEach((time, index) => {
    Items[index].querySelector("p").textContent = time;
  });
}
// ---------------------------------------------------------------------------------------------------------
