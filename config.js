const CONFIG = {
    valentineName: "Sanika",

    pageTitle: "so... do you like me? 👀",

    floatingEmojis: {
        hearts: ['♡', '✦', '♥', '⋆', '❥'],
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Be honest... have I started to become a little more than just a friend to you? 👀",
            yesBtn: "Maybe... yes",
            noBtn: "Not really",
            secretAnswer: "I knew there was something there 👀"
        },
        second: {
            text: "Okay, but how much do you like me?",
            startText: "Let me guess...",
            nextBtn: "Okay, next"
        },
        third: {
            text: "So... should we finally meet and see where this goes?",
            yesBtn: "Absolutely",
            noBtn: "Maybe later"
        }
    },

    loveMessages: {
        extreme: "Okay... I think you've made your answer pretty obvious 👀",
        high: "That's definitely more than a little crush.",
        normal: "Hmm... I'll take that as a good sign."
    },

    celebration: {
        title: "Well... looks like we have a date. ✦",
        message: "Now all that's left is choosing the day. And yes, I'm already looking forward to it.",
        emojis: "♡ ✦ 🧸"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "♪ Play something nice",
        stopText: "Stop music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
