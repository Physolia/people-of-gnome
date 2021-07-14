const postSection = document.querySelector("#post-section");
const posts = postSection.querySelectorAll(".member-post");
let postsArray = [...posts]; //converts NodeList to Array
let collections = [];

const message = document.getElementById("message");

const isHidden = (post) => {
  return post.style.display == "none"
}

const filterPostBySearch = () => {
  const input = document.querySelectorAll("#filter-posts")[0];
  const filter = input.value.toUpperCase();

  for (let i = 0; i < posts.length; i++) {
    let title = posts[i].querySelectorAll("#post-title")[0];
    let txtValue = title.textContent || title.innerText;

    if (!posts[i].classList.contains("tag-locked")) {
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        posts[i].style.display = "";
        posts[i].classList.remove('search-locked');
      } else {
        posts[i].style.display = "none";
        posts[i].classList.add('search-locked');
      }
    } else {
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        posts[i].classList.remove('search-locked');
      } else {
        posts[i].classList.add('search-locked');
      }
    }
  }
  if (postsArray.every(isHidden)) {
    message.style.display = "";
    message.innerHTML = "No matched posts found"
  } else {
    message.style.display = "none";
  }
}


const filterPostByTags = (tag) => {
  const buttonTag = document.getElementById(tag);
  const tagName = buttonTag.innerText;

  if (buttonTag.classList.contains("unselected-tag")) {
    buttonTag.classList.add('selected-tag');
    buttonTag.classList.remove('unselected-tag');
    collections.push(tagName);
  } else {
    buttonTag.classList.add('unselected-tag');
    buttonTag.classList.remove('selected-tag');
    collections  = collections.filter(item => item !== tagName);
  }

  for (let i = 0; i < posts.length; i++) {
    let tagsArray = [];
    let tag = posts[i].querySelectorAll("#post-tag");

    for (let j = 0; j < tag.length; j++) {
      tagsArray[j] = tag[j].textContent || tag[j].innerText;
    }

    if (!posts[i].classList.contains("search-locked")) {
      if (collections.every(v => tagsArray.includes(v))) {
        posts[i].style.display = "";
        posts[i].classList.remove('tag-locked');
      } else {
        posts[i].style.display = "none";
        posts[i].classList.add('tag-locked');
      }
    } else {
      if (collections.every(v => tagsArray.includes(v))) {
        posts[i].classList.remove('tag-locked');
      } else {
        posts[i].classList.add('tag-locked');
      }
    }
  }
  if (postsArray.every(isHidden)) {
    message.style.display = "";
    message.innerHTML = "No matched posts found"
  } else {
    message.style.display = "none";
  }
}