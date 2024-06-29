const geographyQuestions = [
    {
        question: "¿A qué continente pertenece Papúa Nueva Guinea?",
        image: "assets/imgs/geography/imagen1.jpg",
        answers:[
            {text: "Europa", correct: false},
            {text: "Asia", correct: false},
            {text: "Oceanía", correct: true},
            {text: "África", correct: false},
        ]
    },
    {
        question: "¿Qué país contiene en su bandera los colores rojo, verde y amarillo?",
        image: "assets/imgs/geography/imagen2.jpg",
        answers:[
            {text: "Egipto", correct: false},
            {text: "Guinea", correct: true},
            {text: "Gabon", correct: false},
            {text: "Filipinas", correct: false},
        ] 
    },
    {
        question: "¿En qué país podemos encontrar las famosas estatuas moái?",
        image: "assets/imgs/geography/imagen3.jpg",
        answers:[
            {text: "Perú", correct: false},
            {text: "Argentina", correct: false},
            {text: "Chile", correct: true},
            {text: "Ecuador", correct: false},
        ]
    },
    {
        question: "¿Cuántos estados tiene Estados Unidos?",
        image: "assets/imgs/geography/imagen4.jpg",
        answers:[
            {text: "50", correct: true},
            {text: "51", correct: false},
            {text: "52", correct: false},
            {text: "55", correct: false},
        ]
    },
    {
        question: "¿Qué países atraviesa el río Amazonas?",
        image: "assets/imgs/geography/imagen5.jpg",
        answers:[
            {text: "Perú, Bolivia, Ecuador, Paraguay, Venezuela y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Colombia y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Paraguay, Colombia y Brasil", correct: false},
            {text: "Perú, Bolivia, Ecuador, Colombia, Venezuela y Brasil", correct: true},
        ]
    },
    {
        question: "¿Cuál es el lago más profundo del mundo?",
        image: "assets/imgs/geography/imagen6.jpg",
        answers:[
            {text: "Lago Tanganica", correct: false},
            {text: "Lago Baikal", correct: true},
            {text: "Lago Vostok", correct: false},
            {text: "Lago Caspio", correct: false},
        ]
    },
    {
        question: "¿Cuál es el río más largo de Europa?",
        image: "assets/imgs/geography/imagen7.jpg",
        answers:[
            {text: "Río Danubio", correct: false},
            {text: "Río Ural", correct: false},
            {text: "Río Volga", correct: true},
            {text: "Río Don", correct: false},
        ]
    },
    {
        question: "¿En qué pais hay un mayor número de pirámides?",
        image: "assets/imgs/geography/imagen8.jpg",
        answers:[
            {text: "Sudán", correct: true},
            {text: "Egipto", correct: false},
            {text: "México", correct: false},
            {text: "Etiopía", correct: false},
        ]
    },
    {
        question: "¿País cuya capital NO empiece por la letra K?",
        image: "assets/imgs/geography/imagen9.jpg",
        answers:[
            {text: "Afganistán", correct: false},
            {text: "Kuwait", correct: false},
            {text: "Mongolia", correct: true},
            {text: "Malasia", correct: false},
        ]
    },
    {
        question: "¿Cuál es el país con mayor biodiversidad del planeta?",
        image: "assets/imgs/geography/imagen10.jpg",
        answers:[
            {text: "Colombia", correct: false},
            {text: "Brasil", correct: true},
            {text: "Indonesia", correct: false},
            {text: "México", correct: false},
        ]
    },
    {
        question: "¿Cuál es el país con mayor cantidad de lluvia del mundo?",
        image: "assets/imgs/geography/imagen11.jpg",
        answers:[
            {text: "Reino Unido", correct: false},
            {text: "Islas Salomón", correct: false},
            {text: "Panamá", correct: false},
            {text: "Colombia", correct: true},
        ]
    },
    {
        question: "¿Qué países atraviesa la Cordillera de los Andes?",
        image: "assets/imgs/geography/imagen12.jpg",
        answers:[
            {text: "Argentina, Chile, Bolivia, Perú, Ecuador, Colombia y Venezuela.", correct: true},
            {text: "Argentina, Chile, Perú, Ecuador y Colombia", correct: false},
            {text: "Argentina, Chile, Bolivia, Perú, Ecuador, Colombia, Paraguay y Venezuela.", correct: false},
            {text: "Argentina, Chile, Perú, Ecuador, Colombia, Paraguay y Venezuela.", correct: false},
        ]
    },
    {
        question: "¿Cuál es el lugar habitado más aislado de la tierra?",
        image: "assets/imgs/geography/imagen13.jpg",
        answers:[
            {text: "Ittoqqortoormiit", correct: false},
            {text: "Islas Pitcairn", correct: false},
            {text: "Tristán de Acuña", correct: true},
            {text: "Alert", correct: false},
        ]
    },
    {
        question: "¿Cuál es la ciudad más alta del mundo?",
        image: "assets/imgs/geography/imagen14.jpg",
        answers:[
            {text: "Wenquan", correct: false},
            {text: "Tuiwa", correct: false},
            {text: "La Rinconada", correct: true},
            {text: "Antonio Pampa", correct: false},
        ]
    },
    {
        question: "¿Cómo se llama el lugar mas aislado de la tierra?",
        image: "assets/imgs/geography/imagen15.jpg",
        answers:[
            {text: "Punto Atlas", correct: false},
            {text: "Punto Nemo", correct: true},
            {text: "Punto Horizon", correct: false},
            {text: "Punto Zenith", correct: false},
        ]
    },
    {
        question: "¿Qué país NO tiene un sol en su bandera?",
        image: "assets/imgs/geography/imagen16.jpg",
        answers:[
            {text: "Argentina", correct: false},
            {text: "Ruanda", correct: false},
            {text: "Namibia", correct: false},
            {text: "Sierra Leona", correct: true},
        ]
    },
    {
        question: "¿Dónde podemos encontrar la serpiente taipán conocida como la más venenosa del mundo?",
        image: "assets/imgs/geography/imagen17.jpg",
        answers:[
            {text: "Australia", correct: true},
            {text: "Tailandia", correct: false},
            {text: "India", correct: false},
            {text: "América del Norte", correct: false},
        ]
    },
    {
        question: "¿Qué estado de Estados Unidos tiene la mayor cantidad de lagos?",
        image: "assets/imgs/geography/imagen18.jpg",
        answers:[
            {text: "Minnesota", correct: true},
            {text: "Michigan", correct: false},
            {text: "Wisconsin", correct: false},
            {text: "Ohio", correct: false},
        ]
    },
    {
        question: "¿Qué país está más al sur?",
        image: "assets/imgs/geography/imagen19.jpg",
        answers:[
            {text: "Zambia", correct: false},
            {text: "Angola", correct: false},
            {text: "Botsuana", correct: true},
            {text: "Gabón", correct: false},
        ]
    },
    {
        question: "¿Qué naciones conforman el Reino Unido??",
        image: "assets/imgs/geography/imagen20.jpg",
        answers:[
            {text: "Inglaterra, Escocia y Gales", correct: false},
            {text: "Inglaterra, Irlanda del Norte, Escocia y Gales", correct: true},
            {text: "Inglaterra, Irlanda del Norte, Irlanda, Escocia y Gales", correct: false},
            {text: "Inglaterra, Irlanda del Norte y Escocia", correct: false},
        ]
    },
];

const scienceQuestions = [
    {
        question:"¿Qué significa ADN?",
        image:"assets/imgs/science/imagen1.jpg",
        answers:[
            {text: "Ácido desoxirribonucleico", correct: true},
            {text: "Ácido deoxirribonucleico", correct: false},
            {text: "Ácido ribonucleico", correct: false},
            {text: "Ácido ribonucleico desoxi", correct: false},
        ]
    },
    {
        question:"¿Cuál es el periodo orbital aproximado del cometa Halley?",
        image:"assets/imgs/science/imagen2.jpg",
        answers:[
            {text: "50 años", correct: false},
            {text: "67 años", correct: false},
            {text: "76 años", correct: true},
            {text: "100 años", correct: false},
        ]
    },
    {
        question:"¿Cuál fue el área de conocimiento de Michael Faraday?",
        image:"assets/imgs/science/imagen3.jpg",
        answers:[
            {text: "La química y la física", correct: false},
            {text: "El electromagnetismo y la electroquímica", correct: true},
            {text: "La física y la medicina", correct: false},
            {text: "La astronomía y la matemática", correct: false},
        ]
    },
    {
        question:"¿Dónde se ubica el observatorio de neutrinos Super-Kamiokande?",
        image:"assets/imgs/science/imagen4.jpg",
        answers:[
            {text: "China", correct: false},
            {text: "Japón", correct: true},
            {text: "Estados Unidos", correct: false},
            {text: "Rusia", correct: false},
        ]
    },
    {
        question:"¿Cuál es la estrella más cercana a la Tierra sin contar con el Sol?",
        image:"assets/imgs/science/imagen5.jpg",
        answers:[
            {text: "Próxima Centauri", correct: true},
            {text: "Alfa Centauri A", correct: false},
            {text: "ALfa Centauri B", correct: false},
            {text: "Estrella de Barnard", correct: false},
        ]
    },
    {
        question:"¿En qué año nació Isaac Newton siguiendo el actual calendario gregoriano?",
        image:"assets/imgs/science/imagen6.jpg",
        answers:[
            {text: "4 de enero de 1643", correct: true},
            {text: "25 de diciembre de 1642", correct: false},
            {text: "4 de enero de 1731", correct: false},
            {text: "25 de diciembre de 1731", correct: false},
        ]
    },
    {
        question:"¿Qué NO sucede en la física cuántica?",
        image:"assets/imgs/science/imagen7.jpg",
        answers:[
            {text: "Un objeto puede estar en varios estados a la vez (superposición)", correct: false},
            {text: "Las partículas pueden comunicarse instantáneamente a cualquier distancia (entrelazamiento cuántico)", correct: false},
            {text: "El observador puede influir en el resultado de un experimento", correct: false},
            {text: "Las partículas siguen trayectorias definidas y previsibles", correct: true},
        ]
    },
    {
        question:"¿Cuándo publicó Charles Darwin el libro 'El origen de las especies'?",
        image:"assets/imgs/science/imagen8.png",
        answers:[
            {text: "1859", correct: true},
            {text: "1839", correct: false},
            {text: "1789", correct: false},
            {text: "1889", correct: false},
        ]
    },
    {
        question:"¿Cuál ha sido la única persona en recibir dos premios Nobel?",
        image:"assets/imgs/science/imagen9.jpg",
        answers:[
            {text: "Albert Einstein", correct: false},
            {text: "Marie Curie", correct: true},
            {text: "Alexander Fleming", correct: false},
            {text: "Nelson Mandela", correct: false},
        ]
    },
    {
        question:"¿Quién fue la primera mujer en ir al espacio?",
        image:"assets/imgs/science/imagen10.jpg",
        answers:[
            {text: "Sally Ride", correct: false},
            {text: "Svetlana Savitskaya", correct: false},
            {text: "Valentina Tereshkova", correct: true},
            {text: "Helen Sharman", correct: false},
        ]
    },
    {
        question:"¿Cuántos grados Fahrenheit (°F) son 0°C?",
        image:"assets/imgs/science/imagen11.jpg",
        answers:[
            {text: "0°F", correct: false},
            {text: "10°F", correct: false},
            {text: "26°F", correct: false},
            {text: "32°F", correct: true},
        ]
    },
    {
        question:"¿Qué significan las siglas NASA?",
        image:"assets/imgs/science/imagen12.png",
        answers:[
            {text: "National Aeronautics and Space Administration", correct: true},
            {text: "National Aerospace and Space Administration", correct: false},
            {text: "North American Space Administration", correct: false},
            {text: "National Aerospace and Space Agency", correct: false},
        ]
    },
    {
        question:"¿Cuál es el tiempo de la rotación de Marte?",
        image:"assets/imgs/science/imagen13.jpg",
        answers:[
            {text: "24 h 14 min 20,6 s", correct: false},
            {text: "24 h 37 min 22,7 s", correct: true},
            {text: "25 h 01 min 30,3 s", correct: false},
            {text: "23 h 56 min 4,1 s", correct: false},
        ]
    },
    {
        question:"¿Cuál es el objetivo de la Iniciativa BRAIN?",
        image:"assets/imgs/science/imagen14.jpg",
        answers:[
            {text: "Determinar la secuencia de pares de bases químicas que componen el ADN", correct: false},
            {text: "Trazar un mapa de la actividad de cada neurona en el cerebro humano", correct: true},
            {text: "Realizar una reforma constitucional que busca integrar a la privacidad mental como una garantía estatal", correct: false},
            {text: "Diseñar un proyecto de psicología educativa", correct: false},
        ]
    },
    {
        question:"¿Qué significa la fórmula 𝐸=𝑚𝑐²?",
        image:"assets/imgs/science/imagen15.jfif",
        answers:[
            {text: "La energía de un cuerpo en movimiento (E) se puede calcular como la masa (m) multiplicada por la aceleración (c) al cuadrado.", correct: false},
            {text: "La energía cinética (E) de un objeto se puede calcular como la masa (m) multiplicada por la velocidad (v) al cuadrado.", correct: false},
            {text: "La energía de un cuerpo en reposo (E) se puede calcular como la masa relativista aparente (m) multiplicada por la velocidad de la luz (c = aproximadamente 3 × 108 m/s) al cuadrado.", correct: true},
            {text: "La energía potencial (E) de un objeto se puede calcular como la masa (m) multiplicada por la gravedad (g) y la altura (h)", correct: false},
        ]
    },
    {
        question:"¿Quién presentó la popular serie documental Cosmos en 1980?",
        image:"assets/imgs/science/imagen16.jpg",
        answers:[
            {text: "Neil deGrasse Tyson", correct: false},
            {text: "Ann Druyan", correct: false},
            {text: "Steven Soter", correct: false},
            {text: "Carl Sagan", correct: true},
        ]
    },
    {
        question:"¿Qué fue el Proyecto Genoma Humano?",
        image:"assets/imgs/science/imagen17.png",
        answers:[
            {text: "Una investigación destinada a secuenciar el ADN humano y cartografiar todos sus genes", correct: true},
            {text: "Una iniciativa para identificar y eliminar genes no funcionales en humanos", correct: false},
            {text: "Una investigación destinada a descubrir la composición química del cerebro humano", correct: false},
            {text: "Un proyecto para secuenciar el ADN de todas las especies animales", correct: false},
        ]
    },
    {
        question:"¿Cuál NO es una etapa del método científico?",
        image:"assets/imgs/science/imagen18.jpg",
        answers:[
            {text: "Observación", correct: false},
            {text: "Publicación", correct: true},
            {text: "Hipótesis", correct: false},
            {text: "Experimentación", correct: false},
        ]
    },
    {
        question:"¿Qué es el Gran Colisionador de Hadrones?",
        image:"assets/imgs/science/imagen19.jpeg",
        answers:[
            {text: "El mayor dispositivo para medir el nivel de radiación en el espacio exterior", correct: false},
            {text: "El desacelerador de partículas más grande del mundo", correct: false},
            {text: "El acelerador de partículas más grande del mundo", correct: true},
            {text: "El mayor dispotivo para medir el nivel de radiación terrestre", correct: false},
        ]
    },
    {
        question:"¿Qué es la fusión nuclear?",
        image:"assets/imgs/science/imagen20.png",
        answers:[
            {text: "Es la división de un núcleo en núcleos más livianos", correct: false},
            {text: "El fenómeno donde los electrones se mueven a través de un material conductor", correct: false},
            {text: "El proceso por el cual varios núcleos atómicos de carga similar se unen y forman un núcleo más pesado", correct: true},
            {text: "Un proceso en el que los núcleos atómicos se desintegran espontáneamente", correct: false},
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
const geographyButton = document.getElementById("geography-button");
const scienceButton = document.getElementById("science-button");
const quizSelection = document.getElementById("quiz-selection");

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let currentQuiz = [];

geographyButton.addEventListener("click", () =>{
    currentQuiz = geographyQuestions;
    startButton.style.display = "block";
    quizSelection.style.display= "none";
    document.querySelector("h1").innerText = "Quiz de Geografia";
})

scienceButton.addEventListener("click", () =>{
    currentQuiz = scienceQuestions;
    startButton.style.display = "block";
    quizSelection.style.display= "none";
    document.querySelector("h1").innerText = "Quiz de Ciencia";
})

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
    selectedQuestions = getRandomQuestions(currentQuiz, 10);
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