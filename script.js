// Java Flashcards

let flashcards = [

    {
        question: "What is Java?",
        answer: "Java is a high-level, object-oriented programming language."
    },

    {
        question: "What is a class in Java?",
        answer: "A class is a blueprint used to create objects."
    },

    {
        question: "What is an object?",
        answer: "An object is an instance of a class."
    },

    {
        question: "What is inheritance?",
        answer: "Inheritance allows one class to acquire properties and methods of another class."
    },

    {
        question: "What is polymorphism?",
        answer: "Polymorphism allows the same method or interface to behave differently in different situations."
    }

];


// Current card

let currentIndex = 0;


// Whether answer is currently displayed

let answerVisible = false;


// Display card

function displayCard() {

    if (flashcards.length === 0) {

        document.getElementById("cardType").innerText = "No Cards";

        document.getElementById("cardText").innerText =
            "Please add a flashcard.";

        document.getElementById("counter").innerText =
            "0 cards";

        return;
    }


    let currentCard = flashcards[currentIndex];


    if (answerVisible) {

        document.getElementById("cardType").innerText =
            "Answer";

        document.getElementById("cardText").innerText =
            currentCard.answer;

        document.getElementById("answerButton").innerText =
            "Show Question";

    } else {

        document.getElementById("cardType").innerText =
            "Question";

        document.getElementById("cardText").innerText =
            currentCard.question;

        document.getElementById("answerButton").innerText =
            "Show Answer";
    }


    document.getElementById("counter").innerText =
        "Card " + (currentIndex + 1) +
        " of " + flashcards.length;


    // Put current data inside input boxes

    document.getElementById("questionInput").value =
        currentCard.question;

    document.getElementById("answerInput").value =
        currentCard.answer;
}


// Show Answer

function showAnswer() {

    answerVisible = !answerVisible;

    displayCard();
}


// Next Card

function nextCard() {

    if (flashcards.length === 0) {
        return;
    }

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    answerVisible = false;

    displayCard();
}


// Previous Card

function previousCard() {

    if (flashcards.length === 0) {
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    answerVisible = false;

    displayCard();
}


// Add Card

function addCard() {

    let question =
        document.getElementById("questionInput").value.trim();

    let answer =
        document.getElementById("answerInput").value.trim();


    if (question === "" || answer === "") {

        alert("Please enter both question and answer.");

        return;
    }


    flashcards.push({

        question: question,

        answer: answer

    });


    // Show newly added card

    currentIndex = flashcards.length - 1;

    answerVisible = false;


    // Clear input fields

    document.getElementById("questionInput").value = "";

    document.getElementById("answerInput").value = "";


    displayCard();


    alert("Flashcard added successfully!");
}


// Edit Card

function editCard() {

    if (flashcards.length === 0) {
        return;
    }


    let question =
        document.getElementById("questionInput").value.trim();

    let answer =
        document.getElementById("answerInput").value.trim();


    if (question === "" || answer === "") {

        alert("Please enter both question and answer.");

        return;
    }


    flashcards[currentIndex] = {

        question: question,

        answer: answer

    };


    answerVisible = false;

    displayCard();


    alert("Flashcard updated successfully!");
}


// Delete Card

function deleteCard() {

    if (flashcards.length === 0) {
        return;
    }


    let confirmation =
        confirm("Are you sure you want to delete this flashcard?");


    if (!confirmation) {
        return;
    }


    flashcards.splice(currentIndex, 1);


    if (currentIndex >= flashcards.length) {

        currentIndex = flashcards.length - 1;
    }


    if (currentIndex < 0) {

        currentIndex = 0;
    }


    answerVisible = false;

    displayCard();


    alert("Flashcard deleted successfully!");
}


// Start application

displayCard();