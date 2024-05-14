let countSpan = document.querySelector(".count span");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questionsObject = JSON.parse(this.responseText);
            let questionsCount = questionsObject.length;
            createBullets(questionsCount);
        }
    };
    myRequest.open("GET","questions.json", true);
    myRequest.send();
}
getQuestions();
function createBullets (num) {
    countSpan.innerHTML = num;
    for (let i = 0; i < num; i++) {
        let theBullet = document.createElement("span");
        if (i === 0) {
            theBullet.className = "on";
            theBullet.innerHTML = i;
        }
        bulletsSpanContainer.appendChild(theBullet);
    }
}