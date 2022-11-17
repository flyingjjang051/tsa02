Splitting();
const section01TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section01",
    markers: {
      fontSize: "20px",
      indent: 20,
      startColor: "#fff",
      endColor: "#f00",
    },
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});
/* prettier-ignore*/
section01TL
.from(".section01 .txt01 .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
.from(CSSRulePlugin.getRule(".tsa .section01 .txt01:after"),{cssRule:{scaleX:0}})
.from(".section01 .txt02 .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
.from(".section01 .txt0301", { x: 100, opacity: 0})
.from(".section01 .txt0302", { x: -100, opacity: 0})
.from(".section01 .txt0303", { x: 100, opacity: 0})
.from(".section01 .txt04", { scale: 2, opacity:0})

const section02TL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section02",
    markers: {
      fontSize: "20px",
      indent: 20,
      startColor: "#fff",
      endColor: "#f00",
    },
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
  },
});

/* prettier-ignore*/
section02TL
.from(".section02 .title", { backgroundColor:"transparent" })
.from(".section02 .title .char", { x: 100, opacity: 0, stagger: { each: 0.05 } })
.from(CSSRulePlugin.getRule(".tsa .section02 .txt01:after"),{cssRule:{scaleX:0}})
.from(".section02 .mainTxt01", { x: 100, opacity: 0})
.from(".section02 .mainTxt02", { x: -100, opacity: 0})
.from(".section02 .mainTxt03", { x: 100, opacity: 0})
.from(".section02 .circleList li", { x: 100, opacity: 0,stagger:{each:0.5}})
.from(".section02 .cduBox", { scale: 2, opacity:0})
