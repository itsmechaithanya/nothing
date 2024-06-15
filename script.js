function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();

function loader(){
    var tl = gsap.timeline()
    tl.from("#loader h3",{
        x:50,
        opacity:0,
        duration:1,
        delay:.5,
        stagger:0.1
    })
    tl.to("#loader h3",{
        opacity:0,
        x:-50,
        duration:1,
        stagger:0.1
    })
    tl.to("#loader",{
        opacity:0
    })
    tl.to("#loader",{
        display:"none"
    })

}
loader();