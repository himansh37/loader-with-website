$(document).ready(function () {
  let load = $(".scramble");
  load.scramble(3000, 20, "alphabet", true);
});

// let tl = gsap.timeline();
// tl.to("#loader", {
//   y: "-100%",
//   opacity: 0,
//   delay: 3,
//   duration: 1,
//   ease: "Expo.easeInOut",
// });
let tl = gsap.timeline();
tl.to(
  "#loader",
  {
    // y: "-100%",
    scale: 2,
    opacity: 0,
    delay: 3,
    duration: 0.5,
    ease: "Expo.easeInOut",
  },
  "b"
)
  .to(
    "#loader",
    {
      y: "-100%",
      opacity: 0,
      delay: 3.2,
      duration: 1,
      ease: "Expo.easeInOut",
    },
    "b"
  )
  .from(
    "#back2",
    {
      scale: 0,
      rotate: 270,
      delay: 3.4,
    },
    "b"
  )
  .from(
    ".letter",
    {
      scale: 0,
      rotate: 270,
      delay: 3.5,
    },
    "b"
  )
  .from(
    "#btn",
    {
      scale: 0,
      delay: 3.45,
    },
    "b"
  );

let tl2 = gsap.timeline();
tl2
  .from(
    ".id1,.id3, .id5, .id7",
    {
      y: "-10px",
      repeat: -1,
      duration: 0.5,
      ease: "Expo.ease",
      yoyo: true,
    },
    "nimo"
  )
  .from(
    ".id2,.id4, .id6",
    {
      y: "-10px",
      repeat: -1,
      duration: 0.55,
      ease: "Expo.ease",
      yoyo: true,
    },
    "nimo"
  )
  .from("#back2", {
    y: "10px",
    repeat: -1,
    duration: 0.55,
    ease: "Expo.ease",
    yoyo: true,
  })
  .from("#back1", {
    y: "50px",
    x: "50px",
    repeat: -1,
    duration: 4,
    ease: "Expo.ease",
    yoyo: true,
  });

function hello() {
  window.location.href = "./two good/index.html";
}

function example() {
  let tl2 = gsap.timeline();
  tl2.to(".id1, .id2, .id3, .id4,.id5,.id6,.id7,#back2,#back1,#loader2", {
    // y: "-100%",
    scale: 2,
    rotate: 120,
    opacity: 0,
    duration: 0.4,
    ease: "Expo.easeInOut",
  });

  setTimeout(hello, 700);
}
