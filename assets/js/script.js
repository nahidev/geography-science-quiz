const questions = [
    {
        question: "¿A qué continente pertenece Papúa Nueva Guinea?",
        image: "assets/imgs/imagen1.jpg",
        answers:[
            {text: "Europa", correct: false},
            {text: "Asia", correct: false},
            {text: "Oceanía", correct: true},
            {text: "África", correct: false},
        ]
    },
    {
        question: "¿Qué país contiene en su bandera los colores rojo, verde y amarillo?",
        image: "assets/imgs/imagen2.jpg",
        answers:[
            {text: "Egipto", correct: false},
            {text: "Guinea", correct: true},
            {text: "Gabon", correct: false},
            {text: "Filipinas", correct: false},
        ] 
    },
    {
        question: "¿En qué país podemos encontrar las famosas estatuas moái?",
        image: "assets/imgs/imagen3.jpg",
        answers:[
            {text: "Perú", correct: false},
            {text: "Argentina", correct: false},
            {text: "Chile", correct: true},
            {text: "Ecuador", correct: false},
        ]
    },
    {
        question: "¿Cuántos estados tiene Estados Unidos?",
        image: "assets/imgs/imagen4.jpg",
        answers:[
            {text: "50", correct: true},
            {text: "51", correct: false},
            {text: "52", correct: false},
            {text: "55", correct: false},
        ]
    },
    {
        question: "¿Qué países atraviesa el río Amazonas?",
        image: "assets/imgs/imagen5.jpg",
        answers:[
            {text: "Perú, Bolivia, Ecuador, Paraguay, Venezuela y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Colombia y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Paraguay, Colombia y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Colombia, Venezuela y Brasil", correct: true},
        ]
    },
    {
        question: "¿Cuál es el lago más profundo del mundo?",
        image: "assets/imgs/imagen6.jpg",
        answers:[
            {text: "Lago Tanganica", correct: false},
            {text: "Lago Baikal", correct: true},
            {text: "Lago Vostok", correct: false},
            {text: "Lago Caspio", correct: false},
        ]
    },
    {
        question: "¿Cuál es el río más largo de Europa?",
        image: "assets/imgs/imagen7.jpg",
        answers:[
            {text: "Río Danubio", correct: false},
            {text: "Río Ural", correct: false},
            {text: "Río Volga", correct: true},
            {text: "Río Don", correct: false},
        ]
    },
    {
        question: "¿En qué pais hay un mayor número de pirámides?",
        image: "assets/imgs/imagen8.jpg",
        answers:[
            {text: "Sudán", correct: true},
            {text: "Egipto", correct: false},
            {text: "México", correct: false},
            {text: "Etiopía", correct: false},
        ]
    },
    {
        question: "¿País cuya capital NO empiece por la letra K?",
        image: "assets/imgs/imagen9.jpg",
        answers:[
            {text: "Afganistán", correct: false},
            {text: "Kuwait", correct: false},
            {text: "Mongolia", correct: true},
            {text: "Malasia", correct: false},
        ]
    },
    {
        question: "¿Cuál es el país con mayor biodiversidad del planeta?",
        image: "assets/imgs/imagen10.jpg",
        answers:[
            {text: "Colombia", correct: false},
            {text: "Brasil", correct: true},
            {text: "Indonesia", correct: false},
            {text: "México", correct: false},
        ]
    },
    {
        question: "¿Cuál es el país con mayor cantidad de lluvia del mundo?",
        image: "assets/imgs/imagen11.jpg",
        answers:[
            {text: "Reino Unido", correct: false},
            {text: "Islas Salomón", correct: false},
            {text: "Panamá", correct: false},
            {text: "Colombia", correct: true},
        ]
    },
    {
        question: "¿Qué países atraviesa la Cordillera de los Andes?",
        image: "assets/imgs/imagen12.jpg",
        answers:[
            {text: "Argentina, Chile, Bolivia, Perú, Ecuador, Colombia y Venezuela.", correct: true},
            {text: "Argentina, Chile, Perú, Ecuador y Colombia", correct: false},
            {text: "Argentina, Chile, Bolivia, Perú, Ecuador, Colombia, Paraguay y Venezuela.", correct: false},
            {text: "Argentina, Chile, Perú, Ecuador, Colombia, Paraguay y Venezuela.", correct: false},
        ]
    },
    {
        question: "¿Cuál es el lugar habitado más aislado de la tierra?",
        image: "assets/imgs/imagen13.jpg",
        answers:[
            {text: "Ittoqqortoormiit", correct: false},
            {text: "Islas Pitcairn", correct: false},
            {text: "Tristán de Acuña", correct: true},
            {text: "Alert", correct: false},
        ]
    },
    {
        question: "¿Cuál es la ciudad más alta del mundo?",
        image: "assets/imgs/imagen14.jpg",
        answers:[
            {text: "Wenquan", correct: false},
            {text: "Tuiwa", correct: false},
            {text: "La Rinconada", correct: true},
            {text: "Antonio Pampa", correct: false},
        ]
    },
    {
        question: "¿Cómo se llama el lugar mas aislado de la tierra?",
        image: "assets/imgs/imagen15.jpg",
        answers:[
            {text: "Punto Atlas", correct: false},
            {text: "Punto Nemo", correct: true},
            {text: "Punto Horizon", correct: false},
            {text: "Punto Zenith", correct: false},
        ]
    },
    {
        question: "¿Qué país NO tiene un sol en su bandera?",
        image: "assets/imgs/imagen16.jpg",
        answers:[
            {text: "Argentina", correct: false},
            {text: "Ruanda", correct: false},
            {text: "Namibia", correct: false},
            {text: "Sierra Leona", correct: true},
        ]
    },
    {
        question: "¿Dónde podemos encontrar la serpiente taipán conocida como la más venenosa del mundo?",
        image: "assets/imgs/imagen17.jpg",
        answers:[
            {text: "Australia", correct: true},
            {text: "Tailandia", correct: false},
            {text: "India", correct: false},
            {text: "América del Norte", correct: false},
        ]
    },
    {
        question: "¿Qué estado de Estados Unidos tiene la mayor cantidad de lagos?",
        image: "assets/imgs/imagen18.jpg",
        answers:[
            {text: "Minnesota", correct: true},
            {text: "Michigan", correct: false},
            {text: "Wisconsin", correct: false},
            {text: "Ohio", correct: false},
        ]
    },
    {
        question: "¿Qué país está más al sur?",
        image: "assets/imgs/imagen19.jpg",
        answers:[
            {text: "Zambia", correct: false},
            {text: "Angola", correct: false},
            {text: "Botsuana", correct: true},
            {text: "Gabón", correct: false},
        ]
    },
    {
        question: "¿Qué naciones conforman el Reino Unido??",
        image: "assets/imgs/imagen20.jpg",
        answers:[
            {text: "Inglaterra, Escocia y Gales", correct: false},
            {text: "Inglaterra, Irlanda del Norte, Escocia y Gales", correct: true},
            {text: "Inglaterra, Irlanda del Norte, Irlanda, Escocia y Gales", correct: false},
            {text: "Inglaterra, Irlanda del Norte y Escocia", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const questionImage = document.getElementById("question-image");
const backgroundAudio = document.getElementById("background-audio");
const startButton = document.getElementById("start-button");
const stopAudioButton = document.getElementById("stop-audio-button");
const quizContainer = document.querySelector(".quiz");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];

startButton.addEventListener("click", () => {
    startButton.style.display = "none"; 
    quizContainer.style.display = "block"; 
    backgroundAudio.play(); 
    startQuiz();
});

stopAudioButton.addEventListener("click", function() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
});

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = getRandomQuestions(questions, 10);
    nextButton.innerHTML = "Siguiente";
    showQuestion();
    questionImage.style.display = "block";
}

function getRandomQuestions(questions, num){
    let randomQuestions = questions.sort(() => 0.5 - Math.random());
    return randomQuestions.slice(0, num);
}

function showQuestion(){
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
    questionImage.src = currentQuestion.image; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Tu puntuación es de ${score} sobre ${questions.length}.`;
    questionImage.style.display = "none"; 
    nextButton.innerHTML = "Jugar otra vez";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < selectedQuestions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < selectedQuestions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();