const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const loader = document.getElementById('loader');
const container = document.getElementById('container');
const domScore = document.getElementById('dom-score');
const hud = document.getElementById('hud-item');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded',() =>{
    setTimeout(() =>{
        loader.classList.add('hide');
        container.classList.remove('hide')
    },2000)
})

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
    
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            domScore.innerText = `Your Score : ${scoretext}`;
            startButton.onclick = function(){
                setTimeout(() =>{
                    loader.classList.remove('hide')
                    container.classList.add('hide');
                    hud.classList.add('hide');
                },1)
                window.location.reload();
                    domScore.innerText = ''
            }
            startButton.classList.remove('hide')
            
            // setTimeout(() =>{
            //     window.location.reload();
            //     domScore.innerText = ''
            // },3000)
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"Where does he hope to be in 10 years ?",
        answers:[
            {text:'Living Outside Boaders',correct:false},
            {text:'Owner of his own company',correct:true},
            {text:'CEO of a Company',correct:false},
            {text:'Chairman of a Company',correct:false}
        ]
    },
    {
        questions:"Best gift you ever recieved?",
        answers:[
            {text:'His Religion',correct:false},
            {text:'Video of his friends wishing him on his 20th birthday.',correct:true},
            {text:'His Friends',correct:false},
            {text:'An Iphone',correct:false},
        ]
    },
    {
        questions:"What is his pet's name?",
        answers:[
            {text:'Charlie',correct:false},
            {text:'Daisy',correct:false},
            {text:'Max',correct:false},
            {text:'Rex',correct:true}
        ]
    },
    {
        questions:"3 words to describe Him?",
        answers:[
            {text:'Creative,Flexible,Experience',correct:false},
            {text:'Hardworking,Honest,Energetic',correct:false},
            {text:'Competetive,Interesting,lovable',correct:false},
            {text:'Cool, Humble, Caring',correct:true}
        ]
    },
    {
        questions:"If he had a superpower what would it be?",
        answers:[
            {text:'Time travel',correct:true},
            {text:'Telepotation',correct:false},
            {text:'Flying',correct:false},
            {text:'Mind Control',correct:false}
        ]
    },
    {
        questions:"A schoolmate he lookup to?",
        answers:[
            {text:'Akash',correct:false},
            {text:'Bryan',correct:true},
            {text:'Sandro',correct:false},
            {text:'Roshan',correct:false}
        ]
    },
    {
        questions:"A schoolmate that advice him?",
        answers:[
            {text:'Bryan',correct:false},
            {text:'Teran',correct:false},
            {text:'Azmi',correct:false},
            {text:'Rika',correct:true}
        ]
    },
    {
        questions:"A schoolmate that makes him laugh?",
        answers:[
            {text:'Roshan',correct:true},
            {text:'Akash',correct:false},
            {text:'Sandro',correct:false},
            {text:'Munaj',correct:false}
        ]
    },
    {
        questions:"A schoolmate that inspire him?",
        answers:[
            {text:'Roshan',correct:false},
            {text:'Bryan',correct:false},
            {text:'Sanduni',correct:false},
            {text:'Sandro',correct:true},
        ]
    },
    {
        questions:"A famous person he look up to?",
        answers:[
            {text:'Dwayne Johnson',correct:true},
            {text:'Maithripala Sirisena',correct:false},
            {text:'Ranjan Ramanayake',correct:false},
            {text:'Arnold Schwarzenegger',correct:false}
        ]
    },
    {
        questions:"One thing that he has that others don't have?",
        answers:[
            {text:'love meditation ',correct:false},
            {text:'Ability to work hard',correct:false},
            {text:'Strength endure pain without losing himself.',correct:true},
            {text:'He loves doing laundry',correct:false}
        ]
    },
    {
        questions:"Best advice he ever recieved?",
        answers:[
            {text:'Do what you’re afraid to do',correct:false},
            {text:'Life is all about managing expectations—most of all your own',correct:false},
            {text:'Your life is your responsibility',correct:false},
            {text:'No matter what others say the road will only get rough but never giveup or change yourself just be you and move forward.',correct:true}
        ]
    },
    {
        questions:"An industry he is passinate about?",
        answers:[
            {text:'An Iphone',correct:false},
            {text:'Finance',correct:true},
            {text:'A Laptop',correct:false},
            {text:'Great Education',correct:false}
        ]
    },
    {
        questions:"A moment that changed his life?",
        answers:[
            {text:'Parents Meetings',correct:false},
            {text:'School Vacation day',correct:false},
            {text:'Getting the interact club banned',correct:true},
            {text:'Getting punished',correct:false}
        ]
    },
    {
        questions:"His proudest mommet?",
        answers:[
            {text:'Hearing that im the best Games Captain of our school to date from our madam',correct:true},
            {text:'Bought his mom a gift',correct:false},
            {text:'Got good grade at O/Ls',correct:false},
            {text:'Got Good grades at A/Ls',correct:false}
        ]
    },
    {
        questions:"Best mentor he ever recieved?",
        answers:[
            {text:'Priyangani Teacher',correct:false},
            {text:'Thilini Teacher',correct:false},
            {text:'Ruchira sir',correct:true},
            {text:'Rukman Sir',correct:false}
        ]
    },
    {
        questions:"A person he can't live without ?",
        answers:[
            {text:'Sandro',correct:false},
            {text:'Rika',correct:true},
            {text:'Teran',correct:false},
            {text:'Bryan',correct:false}
        ]
    },
    {
        questions:"A bad habbit he still has?",
        answers:[
            {text:'Getting angry',correct:true},
            {text:'Arrogrance',correct:false},
            {text:'Swearing',correct:false},
            {text:'Fast Food',correct:false}
        ]
    },
    {
        questions:"A good habbit he has?",
        answers:[
            {text:'Eat Healthy',correct:false},
            {text:'Sleep On Time',correct:false},
            {text:'Never Giveup on friends and always Taking Care of them',correct:true},
            {text:'Be Responsible With Money',correct:false}
        ]
    },
]