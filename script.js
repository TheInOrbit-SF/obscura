gsap.registerPlugin(ScrollTrigger);
gsap.from(".ttl",{
	opacity:0,
	y:40,
	duration:2,
	ease: "power4.out",
	stagger: 0.4,
	scrollTrigger: {
        trigger: ".ttl",
        start: "top 50%",
        
    }
});
gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{
        opacity:0,
        y:100,
		yoyo: true,
        scrollTrigger:{
			scrub: true,
            trigger:section,
            start:"top 80%",
            end: "top 20%"
        }
    });

});
gsap.from(".card",{
	opacity:0,
	y:40,
	duration:2,
	ease: "power4.out",
	stagger: 1,
	scrollTrigger: {
		scrub: true,
        trigger: ".card",
        start:"top 80%",
        end: "top 20%"
    }
});
