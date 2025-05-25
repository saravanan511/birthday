const images = [
    { src: "assets/WhatsApp Image 2025-05-25 at 08.45.19_5a1dba7d.jpg", caption: "Best moments with the best friend 💖💫" },
    { src: "assets/WhatsApp Image 2025-05-25 at 08.49.40_09971c0b.jpg", caption: "💖" },
    { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_a93bbf37.jpg", caption: "mall la sema fun uh nadha gamels la aaditu jolly of irrumchu💖💖💖" },
    { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_4d3d50ec.jpg", caption: "Laughing until we cried 😂" },
  { src: "assets/WhatsApp Image 2025-05-25 at 09.12.56_939abe4d.jpg", caption: "thoomgu moonji😂😂😂 " },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_adf41014.jpg", caption: "kuttachi the kutty mani 😂😂😂" },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_a93bbf37.jpg", caption: "Anothe best day out whit you" },
  { src: "assets/IMG_20230217_210843_745.jpg", caption: "Initial steps and moments of our friendship 💫" },
  { src: "assets/IMG-20230215-WA0011.jpg", caption: "Initial steps and moments of our friendship 💫" },
  { src: "assets/IMG_20230217_210850_063.jpg", caption: "💖" },
  { src: "assets/IMG_20230313_165319.jpg", caption: "Then got a little comfortable made cringe togather 😂💖" },
  { src: "assets/IMG_20230313_165506.jpg", caption: "nalla kuthirukanum vaai laye 😂😂" },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.33.14_3255e27a.jpg", caption: "Had a great lunch time " },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.33.15_2dbc1263.jpg", caption: "💖" },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_4d3d50ec.jpg", caption: "😂💖" },
  { src: "assets/WhatsApp Image 2025-05-25 at 08.45.17_4d3d50ec.jpg", caption: "Laughing until we cried 😂" }
 


];

const bgMusic = document.getElementById("bg-music");
const slideshow = document.getElementById("slideshow");
const mainContent = document.getElementById("main-content");

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  mainContent.classList.remove("hidden");
  bgMusic.play();
  showSlides(0);
});

images.forEach(image => {
  const slide = document.createElement("div");
  slide.className = "slide";

  const img = document.createElement("img");
  img.src = image.src;

  const caption = document.createElement("div");
  caption.className = "caption";
  caption.innerText = image.caption;

  slide.appendChild(img);
  slide.appendChild(caption);
  slideshow.appendChild(slide);
});

function showSlides(index) {
  const slides = document.getElementsByClassName("slide");
  for (let slide of slides) slide.style.display = "none";
  if (index < slides.length) {
    slides[index].style.display = "block";
    setTimeout(() => showSlides(index + 1), 5000);
  } else {
    playFinalAudios();
  }
}

function playFinalAudios() {
  const audio1 = new Audio("assets/audio1.mp3");
  const audio2 = new Audio("assets/audio2.mp3");

  // Lower background music
  bgMusic.volume = 0.2;

  audio1.play();
  audio1.onended = () => {
    audio2.play();

    audio2.onended = () => {
      // Wait 2 seconds after audio2 ends
      setTimeout(() => {
        bgMusic.volume = 0.6; // Restore music volume
        showCake();
      }, 20); // 2000ms = 2 seconds
    };
  };
}




function showCake() {
  document.getElementById("cake-section").classList.remove("hidden");
  speak("Happy Birthday! You're the most amazing friend ever!");
  setTimeout(showLetter, 6000);
}

function showLetter() {
  const letter = `
    From silly selfies to deep heart talks, you've been a constant joy in my life.
    Thank you for your love, loyalty, and all the unforgettable memories.
    Here's to many more adventures ahead. Happy Birthday lakshx_06
    Thank you for all the memories 
    enna dhan veliya sollikatiyum in deep hearts wanna hardly hangout with you...neraiya sirikanum unna adichu RKO podnaum
    kandipa next sem la neraiay veliya porom oh ah ??? need reply !!  

    ONCE again happy Birthday my Dear BITCH...😂💖
  `;
  document.getElementById("friend-letter").innerText = letter;
  document.getElementById("letter-section").classList.remove("hidden");
}

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.9;
  msg.pitch = 1.2;
  window.speechSynthesis.speak(msg);
}
