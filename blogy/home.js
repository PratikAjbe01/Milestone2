function displayForm() {
    console.log("hey its working");
    let form = document.getElementsByClassName('blog-form')[0];
    let cardDisplay=document.getElementsByClassName('card-display')[0];
    form.style.display = "flex";
    cardDisplay.style.display="none";
}
let title=document.getElementById('title');
let description=document.getElementById('description');
let content=document.getElementById('content');
let blogcards=document.getElementById('blogcards');
showBlogs();
function addBlogs() {
  let blog = localStorage.getItem('blog');
  let blogArray = blog ? JSON.parse(blog) : [];

  const blogObj = {              
    blogtitle: title.value,
    blogdescription: description.value,
    blogcontent: content.value,
  };

  title.value = '';
  description.value = '';
  content.value = '';
  blogArray.push(blogObj);
  localStorage.setItem('blog', JSON.stringify(blogArray));
  showBlogs();
}

function showBlogs() {
    let blogsHTML = '';
    let blog = localStorage.getItem('blog');
    if (blog === null) {
      return;
    } else {
      blog = JSON.parse(blog);
      console.log(blog);
    }
    for (let i = 0; i < blog.length; i++) {
        let cardId = `card-${i}`;
        let readMoreId = `read-more-${i}`;
        blogsHTML += `
          <div class="card" id="${cardId}">
            <div class="top"><i class="fa-solid fa-circle-xmark"></i>
            <img src="" alt="blog-image">

            <h1>${blog[i].blogtitle}</h1></div>
            <p><b>${blog[i].blogdescription}</b></p>
            <button onclick="showReadMore(${i})">Read More</button>
          </div>
          <div class="read-more-content" id="${readMoreId}" style="display:none;">
          <div class="top"><i class="fa-solid fa-circle-xmark" onclick="closeBlog(${i})"></i>
            <img src="" alt="blog-image">
            <h1>${blog[i].blogtitle}</h1></div>
            <p><b>${blog[i].blogdescription}</b></p>
            <p id="content-p">${blog[i].blogcontent}</p>
          </div>
        `;
    }
    
    blogcards.innerHTML = blogsHTML;
    
    // Change background color of notes
    
  }
 
  function showReadMore(ind) {
    let cardId = `card-${ind}`;
    let readMoreId = `read-more-${ind}`;
    let displayReadMoreCard = document.getElementById(readMoreId);
    let card = document.getElementById(cardId);

    if (displayReadMoreCard.style.display === 'none') {
      displayReadMoreCard.style.display = 'block';
      card.style.display = 'none';
    } else {
      displayReadMoreCard.style.display = 'none';
      card.style.display = 'block';
    }
  }
  function closeBlog(ind){
    let cardId = `card-${ind}`;
    let readMoreId = `read-more-${ind}`;
    let displayReadMoreCard = document.getElementById(readMoreId);
    let card = document.getElementById(cardId);

    if (displayReadMoreCard.style.display === 'block') {
      displayReadMoreCard.style.display = 'none';
      card.style.display = 'block';
    } else {
      displayReadMoreCard.style.display = 'block';
      card.style.display = 'none';
    }
  }