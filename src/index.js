// write your code here
fetch('http://localhost:3000/images/1')
.then(response => response.json())
.then(data => {
    return populateImageCard(data)
})

//variable declarations
    const cardH2 = document.getElementById('card-title')
    const cardLikes = document.getElementById('like-count')
    const cardImg = document.getElementById('card-image')
    const cardComment = document.querySelectorAll('li')
    const commentList = document.getElementById('comments-list')
    const form = document.getElementById('comment-form')
    const likeBtn = document.getElementById('like-button')

 //what makes the image appear on the page
function populateImageCard (data){

    cardImg.src = data.image 
    cardH2.textContent = data.title
    cardLikes.textContent = parseInt(data.likes)
   

    cardComment.forEach((li, i) => {
        li.textContent = data.comments[i].content
    })

  //click heart to increase likes

    likeBtn.addEventListener('click', () => {
        cardLikes.textContent = parseInt(cardLikes.textContent) +1
        })
}

//doing the form

form.addEventListener('submit', handleCommentForm)

function handleCommentForm (e) {
    e.preventDefault()
    const newLi = document.createElement('li')
    newLi.textContent = e.target.comment.value

    commentList.appendChild(newLi)
}

