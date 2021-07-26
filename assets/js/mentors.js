let date = new Date();
let currentYear = "#" + date.getFullYear();
let type = "all";

let gsocSection = mentorsSection.querySelector(`.gsoc-section-${date.getFullYear()}`);
let outreachySection = mentorsSection.querySelector(`.outreachy-section-${date.getFullYear()}`);
let hr = mentorsSection.querySelector(`.horizontal-rule-${date.getFullYear()}`);

let gsocMentorsList = gsocSection.querySelector(".gnome-members-list");
let outreachyMentorsList = outreachySection.querySelector(".gnome-members-list");

let gsocMessage = mentorsSection.querySelector(`.gsoc-message-${date.getFullYear()}`);
let outreachyMessage = mentorsSection.querySelector(`.outreachy-message-${date.getFullYear()}`);

if (gsocMentorsList.innerHTML.replace(/\s/g,'')[0] == undefined) {
  gsocMessage.innerHTML = "No entries found.";
} else {
  gsocMessage.innerHTML = "";
}

if (outreachyMentorsList.innerHTML.replace(/\s/g,'')[0] == undefined) {
  outreachyMessage.innerHTML = "No entries found.";
} else {
  outreachyMessage.innerHTML = "";
}

$(document).ready(function () {
  $('.group').hide();
  $(currentYear).show();
  $('#selectYear').change(function () {
    $('.group').hide();
    $('#' + $(this).val()).show();
  })
});

const sortMentors = (event) => {
  let val = event.target.value;

  if (val[0] == "2") {
    let year = val;
    gsocSection = mentorsSection.querySelector(`.gsoc-section-${year}`);
    outreachySection = mentorsSection.querySelector(`.outreachy-section-${year}`);
    hr = mentorsSection.querySelector(`.horizontal-rule-${year}`);
  
    gsocMessage = mentorsSection.querySelector(`.gsoc-message-${year}`);
    outreachyMessage = mentorsSection.querySelector(`.outreachy-message-${year}`);
  } else {
    type = val;
  }

  gsocMentorsList = gsocSection.querySelector(".gnome-members-list");
  outreachyMentorsList = outreachySection.querySelector(".gnome-members-list");

  if (type == 'all') {
    gsocSection.style.display = "";
    outreachySection.style.display = "";
    hr.style.display = "";
  }
  else if (type == 'gsoc') {
    gsocSection.style.display = "";
    outreachySection.style.display = "none";
    hr.style.display = "none";
  }
  else {
    outreachySection.style.display = "";
    gsocSection.style.display = "none";
    hr.style.display = "none";
  }
  
  if (gsocMentorsList.innerHTML.replace(/\s/g,'')[0] == undefined) {
    gsocMessage.innerHTML = "No entries found.";
  } else {
    gsocMessage.innerHTML = "";
  }

  if (outreachyMentorsList.innerHTML.replace(/\s/g,'')[0] == undefined) {
    outreachyMessage.innerHTML = "No entries found.";
  } else {
    outreachyMessage.innerHTML = "";
  }
}