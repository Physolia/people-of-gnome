---
---
let date = new Date();
const editions = Object.keys({{ site.data.activities.gsoc.editions | jsonify }});
const currentYear = editions[editions.length - 1];

let type = "all";

let gsocSection = outreachSection.querySelector(`.gsoc-section-${currentYear}`);
let outreachySection = outreachSection.querySelector(`.outreachy-section-${currentYear}`);
let hr = outreachSection.querySelector(`.horizontal-rule-${currentYear}`);

let gsocList = gsocSection.querySelector(".gnome-members-list");
let outreachyList = outreachySection.querySelector(".gnome-members-list");

let gsocMessage = outreachSection.querySelector(`.gsoc-message-${currentYear}`);
let outreachyMessage = outreachSection.querySelector(`.outreachy-message-${currentYear}`);

gsocMessage.innerHTML = gsocList.innerHTML.replace(/\s/g,'')[0] === undefined ? "No entries found." : "";
outreachyMessage.innerHTML = outreachyList.innerHTML.replace(/\s/g,'')[0] === undefined ? "No entries found." : "";

document.addEventListener("DOMContentLoaded", function() { 
  [...document.querySelectorAll('.group')].forEach(year => year.style.display = "none");
  document.getElementById(currentYear).style.display = "";
});

const sort = (event) => {
  let val = event.target.value;

  if (val[0] === "2") {
    let year = val;

    [...document.querySelectorAll('.group')].forEach(eachYear => eachYear.style.display = "none");
    document.getElementById(year).style.display = "";

    gsocSection = outreachSection.querySelector(`.gsoc-section-${year}`);
    outreachySection = outreachSection.querySelector(`.outreachy-section-${year}`);
    hr = outreachSection.querySelector(`.horizontal-rule-${year}`);
  
    gsocMessage = outreachSection.querySelector(`.gsoc-message-${year}`);
    outreachyMessage = outreachSection.querySelector(`.outreachy-message-${year}`);
  } else {
    type = val;
  }

  gsocList = gsocSection.querySelector(".gnome-members-list");
  outreachyList = outreachySection.querySelector(".gnome-members-list");

  if (type === 'all') {
    gsocSection.style.display = "";
    outreachySection.style.display = "";
    hr.style.display = "";
  }
  else if (type === 'gsoc') {
    gsocSection.style.display = "";
    outreachySection.style.display = "none";
    hr.style.display = "none";
  }
  else {
    outreachySection.style.display = "";
    gsocSection.style.display = "none";
    hr.style.display = "none";
  }
  
  gsocMessage.innerHTML = gsocList.innerHTML.replace(/\s/g,'')[0] === undefined ? "No entries found." : "";
  outreachyMessage.innerHTML = outreachyList.innerHTML.replace(/\s/g,'')[0] === undefined ? "No entries found." : "";
}
