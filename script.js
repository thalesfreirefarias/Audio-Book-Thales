const audioChapter = document.getElementById("audio-chapter");
const buttonNext = document.getElementById("forward");
const buttonPlayPause = document.getElementById("play-pause");
const buttonBackward = document.getElementById("backward");
const chapterName = document.getElementById("chapter");

const numberChapter = 10;
let playing = 0;
let currentChapter = 1;

function playBook() {
    audioChapter.play();
    buttonPlayPause.classList.remove('bi-play-circle');
    buttonPlayPause.classList.add('bi-pause-circle');
}

function pauseBook() {
    audioChapter.pause();
    buttonPlayPause.classList.remove('bi-pause-circle');
    buttonPlayPause.classList.add('bi-play-circle');

}

function playOrPause() {
    if (playing === 0) {
        playBook();
        playing = 1;
    } else {
        pauseBook();
        playing = 0;
    }
}

function nextBook(){
    if(currentChapter === numberChapter){
        currentChapter = 1;
    }else{
        currentChapter = currentChapter+1;
    }
    audioChapter.src = "./books/dom-casmurro/" + currentChapter + '.mp3';
    playBook();
    playing = 1;
    chapterChangeName();
}

function backwardBook(){
    if(currentChapter === 1){
        currentChapter = numberChapter;
    }else{
        currentChapter = currentChapter-1;
    }
    audioChapter.src = "./books/dom-casmurro/" + currentChapter + '.mp3';
    playBook();
    playing = 1;
    chapterChangeName();

}

function chapterChangeName(){
    chapterName.innerText = "Capitulo " + currentChapter;

}


buttonPlayPause.addEventListener('click', playOrPause);
buttonNext.addEventListener('click', nextBook);
buttonBackward.addEventListener('click', backwardBook);
// buttonPlayPause.onclick = playBook; //
