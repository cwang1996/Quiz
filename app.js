const play = document.querySelector('.play');
const header = document.querySelector('.header');
const end = document.querySelector('.end');
const quiz1 = document.querySelector('.quiz1');
const quiz2 = document.querySelector('.quiz2');
const quiz3 = document.querySelector('.quiz3');
const quiz4 = document.querySelector('.quiz4');
const slaugh = document.querySelector('.spongebob');
const slaugh2 = document.querySelector('.spongebob2');
const audio = document.getElementById('laugh');
const results = document.querySelector('.results');

slaugh.addEventListener("mouseenter", function(){
    audio.play();
    audio.volume = 0.4;
});

slaugh.addEventListener("mouseleave", function(){
    audio.pause();
    audio.currentTime = 0;
})

slaugh2.addEventListener("mouseenter", function(){
    audio.play();
    audio.volume = 0.4;
});

slaugh2.addEventListener("mouseleave", function(){
    audio.pause();
    audio.currentTime = 0;
})

let score = 0;

function playGame(){
    play.addEventListener('click', function(){
        quiz1.style.display = 'block';
        header.style.display = 'none';
    });
}

function question1(){
    quiz1.style.display = 'none';
    quiz2.style.display = 'block'
}

function question2(){
    quiz2.style.display = 'none';
    quiz3.style.display = 'block';
}

function question3(){
    quiz3.style.display = 'none';
    endGame();
}

function correctAnswer1(){
    score++;
    quiz1.style.display = 'none';
    quiz2.style.display = 'block';
}

function correctAnswer2(){
    score++;
    quiz2.style.display = 'none';
    quiz3.style.display = 'block';
}

function correctAnswer3(){
    score++;
    quiz3.style.display = 'none';
    endGame();
}

function endGame(){
    if(score === 3) {
        results.innerHTML = `You got ${score} answers correct. Nice!`;
        end.style.display = 'block';
    }
    else if(score > 1 && score < 3) {
        results.innerHTML = `You got ${score} answer(s) correct. Not bad.`;
        end.style.display = 'block';
    } 
    else {
        results.innerHTML = `You got ${score} answers correct. Better luck next time.`;
        end.style.display = 'block';
    }
}

playGame();
