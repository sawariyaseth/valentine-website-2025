# 💝 Valentine's Day Website 2026 💝

A beautiful, interactive Valentine's Day website that lets you create a personalized experience for someone special. Customize the questions, messages, emojis, colors, animations, and music — then share your own website online. 💖

🌟 **[Live Demo](#)** | 🚀 **[Quick Start](#-quick-start-guide)** | 🌐 **[Deploy Your Website](#4-make-it-live)**

---

## ✨ Features

* 💖 Floating hearts and cute bears
* 🎵 Custom background music
* 📏 Interactive love meter that goes beyond 100%
* 🏃 Playful "No" buttons that move away
* 💌 Hidden answer for the first question
* 🎉 Celebration screen after saying "Yes"
* 🎨 Easy customization through `config.js`
* 📱 Responsive design for desktop and mobile
* 🚀 Easy deployment with GitHub Pages or Netlify
* ⚡ Built with plain HTML, CSS, and JavaScript

---

# 🚀 Quick Start Guide

## 1. Get Your Own Copy

You can create your own version of this project in two ways:

### Fork the Repository

1. Click **Fork** at the top of this GitHub repository.
2. Select your GitHub account.
3. Wait for GitHub to create your copy.
4. Open your new repository.

You now have your own version of the Valentine's website. 💝

### Or Clone It

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_REPOSITORY_NAME
```

---

# 2. Customize Your Website

The easiest way to customize the website is through:

```text
config.js
```

Open `config.js` and change the values to match your own Valentine.

## 💌 Basic Information

```javascript
valentineName: "Sanika",
pageTitle: "so... do you like me? 👀"
```

`valentineName` is the name displayed on the website.

`pageTitle` is the title shown in the browser tab.

---

## 💖 Questions and Buttons

```javascript
questions: {
    first: {
        text: "Do you like me?",
        yesBtn: "Yes",
        noBtn: "No",
        secretAnswer: "I don't like you, I love you! ❤️"
    },

    second: {
        text: "How much do you love me?",
        startText: "This much!",
        nextBtn: "Next ❤️"
    },

    third: {
        text: "Will you be my Valentine...?",
        yesBtn: "Yes!",
        noBtn: "No"
    }
}
```

You can completely change the questions and button text.

For example:

```javascript
first: {
    text: "Be honest... have I become a little more than just a friend to you? 👀",
    yesBtn: "Maybe... yes",
    noBtn: "Not really",
    secretAnswer: "I knew there was something there 👀"
}
```

---

# 3. Customize the Love Meter

The love meter can go beyond 100%.

```javascript
loveMessages: {
    extreme: "Okay... I think you've made your answer pretty obvious 👀",
    high: "That's definitely more than a little crush.",
    normal: "Hmm... I'll take that as a good sign."
}
```

The messages change depending on how far the love meter is moved.

---

# 🎉 Customize the Final Celebration

After the final **Yes** button is clicked, the celebration screen appears.

```javascript
celebration: {
    title: "Well... looks like we have a date. ✦",
    message: "Now all that's left is choosing the day. And honestly, I'm already looking forward to it.",
    emojis: "♡ ✦ 🧸"
}
```

You can replace these with your own message.

---

# 🎨 Customize the Colors

The website uses a simple color configuration:

```javascript
colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
}
```

You can experiment with different color combinations using:

* [Coolors](https://coolors.co/)
* [Color Hunt](https://colorhunt.co/)

---

# ✨ Customize Animations

Animation settings can also be changed:

```javascript
animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
}
```

### What they control

| Setting              | Description                        |
| -------------------- | ---------------------------------- |
| `floatDuration`      | How quickly floating elements move |
| `floatDistance`      | How far they move sideways         |
| `bounceSpeed`        | Speed of bouncing animations       |
| `heartExplosionSize` | Size of the final heart effect     |

---

# 🎵 Add Background Music

You can add your own MP3 file as background music.

The website expects a direct audio URL.

Example:

```javascript
music: {
    enabled: true,
    autoplay: true,
    musicUrl: "YOUR_MUSIC_URL_HERE",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
}
```

### Cloudinary

One option is to upload your MP3 to Cloudinary and use the generated direct media URL.

Your URL will look similar to:

```text
https://res.cloudinary.com/your-cloud-name/video/upload/your-file.mp3
```

Then add it to:

```javascript
musicUrl: "YOUR_CLOUDINARY_URL"
```

### Important

Some browsers block music from automatically playing before the user interacts with the page.

If autoplay doesn't work, the **Play Music** button can still be used.

Also make sure you have permission to use the music you upload.

---

# 🌐 4. Make It Live

## GitHub Pages

GitHub Pages is a simple way to host this project for free.

1. Open your repository.
2. Go to **Settings**.
3. Open **Pages**.
4. Under **Source**, select your `main` branch.
5. Save the settings.
6. Wait for GitHub Pages to deploy the website.

Your website will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

---

## Netlify

You can also deploy the project using Netlify.

1. Create a Netlify account.
2. Select **Add new site**.
3. Choose **Import an existing project**.
4. Connect your GitHub repository.
5. Select the repository.
6. Deploy the website.
7. Customize your domain if you want.

Netlify will provide you with a public URL.

---

# 📁 Project Structure

The project is intentionally simple:

```text
valentine-website/
│
├── index.html
├── styles.css
├── script.js
├── theme.js
├── config.js
└── README.md
```

### `index.html`

Contains the structure of the website.

### `styles.css`

Controls the visual design, layout, buttons, animations, and responsive behavior.

### `script.js`

Controls the website's interactions and logic.

### `theme.js`

Applies the configured colors and animation settings.

### `config.js`

Contains the customizable content and settings.

---

# 🛠️ Technologies

This project uses:

* HTML5
* CSS3
* Vanilla JavaScript
* GitHub Pages / Netlify for deployment

No frameworks are required.

---

# 💡 Tips

Before sharing your website:

* ✅ Test every button
* ✅ Test the love meter
* ✅ Test the music
* ✅ Check the website on your phone
* ✅ Make sure the "No" button stays inside the screen
* ✅ Test the final celebration
* ✅ Make sure your music URL works
* ✅ Check your spelling and personalized messages

Most importantly, **test the website before sending the link to your special someone.** 😄

---

# 💝 Make It Your Own

The goal of this project is to give you a starting point.

Change the:

* Questions
* Names
* Button text
* Emojis
* Colors
* Music
* Celebration message
* Animations

and make the experience personal to you.

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute the project according to the terms of the license.

---

## 💖 Have Fun

Made for creating something a little more personal than
