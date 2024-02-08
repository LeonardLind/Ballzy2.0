const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 380;

const currentFrame = (index) => `./ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
    ".ball-text-1",
    {
      opacity: 1,
    },
    {
      opacity: 0,
      scrollTrigger: {
        scrub: 0,
        start: "1%",
        end: "4%",
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 0 });
      },
    }
  );

  gsap.fromTo(
    ".ball-text-2",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 0,
        start: "7%",
        end: "18%", 
      },
      onComplete: () => {
        gsap.to(".ball-text-2", { opacity: 0 });
      },
    }
  );
  
  

  gsap.fromTo(
    ".ball-text-3",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 0,
        start: "23%",
        end: "40%",
      },
      onComplete: () => {
        gsap.to(".ball-text-3", { opacity: 0 });
      },
    }
  );

  gsap.fromTo(
    ".ball-text-4",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 0,
        start: "47%",
        end: "63%",
      },
      onComplete: () => {
        gsap.to(".ball-text-4", { opacity: 0 });
      },
    }
  );

  gsap.fromTo(
    ".ball-text-5",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 0,
        start: "67%",
        end: "77%",
      },
      onComplete: () => {
        gsap.to(".ball-text-5", { opacity: 0 });
      },
    }
  );

gsap.fromTo(
  ".ball-text-6",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 0,
      start: "82%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 1 });
    },
  }
);

gsap.fromTo(
    ".get-ballzy-button",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 0,
        start: "82%",
      },
      onComplete: () => {
        gsap.to(".ball-text", { opacity: 1 });
      },
    }
  );



images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}