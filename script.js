const questions = [
    "What’s a small detail about yourself that you’d love for me to notice?",
    "What is a song that feels like a warm hug to you?",
    "If we had a free weekend and a full tank of gas, where are we driving?",
    "Describe your absolute perfect, slow Sunday morning.",
    "What’s a compliment you received once that you’ve never forgotten?",
    "If you could have any animal as a perfectly behaved pet, what would it be?",
    "What was the first thing that made you smile today?",
    "What’s your favorite comfort food when it’s raining outside?",
    "Do you prefer a deep conversation or a comfortable silence?",
    "If you could teach me one thing you love in 10 minutes, what would it be?",
    "☕ Describe your drink like a fancy food critic.",
    "🍰 If we shared a dessert, would it be chocolate or fruit?",
    "👀 Spot a person in the cafe. What is their 'secret' life story?",
    "✨ Tell me one thing you like about the vibe of this cafe.",
    "🍵 If you had to pick a coffee name for me, what would it be?",
    "What’s a 'green flag' you look for in a person's personality?",
    "What’s the best trip you’ve ever taken?",
    "What’s your favorite way to recharge after a long day?",
    "What’s something you’re currently looking forward to?",
    "What’s the most spontaneous thing you’ve ever done?",
    "What’s a small, 'useless' detail about yourself that you’d love for someone to notice?",
    "What is a song that feels like a warm hug to you?",
    "If we had a free weekend and a full tank of gas, where are we driving?",
    "What’s one thing you’re proud of this week, no matter how small?",
    "Describe your absolute perfect, slow Sunday morning.",
    "What’s a compliment you received once that you’ve never forgotten?",
    "What’s the most spontaneous thing you’ve ever done?",
    "If you could have any animal as a perfectly behaved pet, what would it be?",
    "What’s a 'boring' hobby you secretly find really interesting?",
    "What was the first thing that made you smile today?",
    "What’s your favorite way to recharge after a long day?",
    "If you could teach me one thing you love in 10 minutes, what would it be?",
    "What’s a 'green flag' you look for in a person's personality?",
    "What’s your favorite comfort food when it’s raining outside?",
    "Is there a movie or book character you feel like you relate to most?",
    "What’s the best trip you’ve ever taken?",
    "What’s something you’re currently looking forward to?",
    "Do you prefer a deep conversation or a comfortable silence?",
    "What’s a skill or talent you’ve always wanted to learn?",
    "If you could go back and tell your 5-year-old self one thing, what would it be?"
];

// URLs for cute characters (Placeholders - you can use your own GIFs)
const characters = [
    "https://image.spreadshirtmedia.net/image-server/v1/compositions/T1459A839PA4459PT28X7Y0D308828821W8515H10000/views/1/peanuts-snoopy-love-sticker.webp?appearanceId=839&width=700&height=1050",

];

let currentIndex = 0;
const card = document.getElementById('card');
const text = document.getElementById('question-text');
const charImg = document.getElementById('char-img');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function toggleFlip() {
    card.classList.toggle('is-flipped');
}

function nextCard() {
    card.classList.remove('is-flipped');
    
    // Change character every time you click 'Next'
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    charImg.src = randomChar;

    setTimeout(() => {
        currentIndex++;
        if (currentIndex >= questions.length) {
            shuffle(questions);
            currentIndex = 0;
        }
        text.innerText = questions[currentIndex];
    }, 300);
}

// Initial Setup
shuffle(questions);
text.innerText = questions[0];
charImg.src = characters[0];