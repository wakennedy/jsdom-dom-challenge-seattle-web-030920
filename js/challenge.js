const counter = document.getElementById("counter");
const pause = document.getElementById("pause");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const likes = document.querySelector('.likes');
const commentForm = document.getElementById("comment-form");

//global and defaulted
let interval 
let paused = false

//more creation
let commentList = document.createElement('ul')
commentList.id = 'commentList'
let list = document.getElementById('list')
list.appendChild(commentList)

//start timer
document.addEventListener("DOMContentLoaded", function() {
    interval = setInterval(updateCounter, 1000)
});

//functions
function like() {
    let num = parseInt(counter.innerHTML)
    let element = document.getElementById(num.toString())
    if (element) {
        element.class = element.class +1
        element.innerHTML = `${element.id} was liked ${element.class} times.`
    }
    else {
        let l = document.createElement('li')
        l.id = num 
        l.class = 1 
        l.innerHTML = `${num} was liked ${l.class} time`
        likes.appendChild(l)
    }
}
function pauseResume() {
    if(paused) {
        pause.innerHTML = "pause"
        interval = setInterval(updateCounter, 1000)
        paused = false
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        document.getElementById('submit').disabled = false
    } else {
        paused = true 
        clearInterval(interval)
        pause.innerHTML = "resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true 
        document.getElementById('submit').disabled = true 
    }
}


//listeners
plus.addEventListener("click", function(e) {
    let num = parseInt(counter.innerHTML) + 1
    counter.innerHTML = num
});
minus.addEventListener("click", function(e){
    let num = parseInt(counter.innerHTML) - 1
    counter.innerHTML = num
});
heart.addEventListener("click", function(e){
    like()
});
pause.addEventListener("click", function(e){
    pauseResume()
})

function updateCounter() {
    let num = parseInt(counter.innerHTML) + 1
    counter.innerHTML = num
}

commentForm.addEventListener("submit", function(e){
    e.preventDefault()
    let li = document.createElement('li')
    li.innerHTML = document.getElementById('comment-input').value 
    commentList.appendChild(li)
    e.target.reset()
})