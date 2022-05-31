gsap.registerPlugin(ScrollTrigger);

//HEADER
gsap.fromTo(".header__text", { opacity: 0, y: 50 }, {
    scrollTrigger: "header",
    opacity: 1,
    y: 0,
    delay: .3,
    ease: Power0.easeNone
});

gsap.fromTo(".header__scroll", { opacity: 0, y: 50 }, {
    scrollTrigger: "header",
    opacity: 1,
    y: 0,
    delay: .3,
    ease: Power0.easeNone
});

//ARTISTS
gsap.fromTo(".artists .artist__title", { opacity: 0, y: 50 }, {
    scrollTrigger: ".artists",
    opacity: 1,
    y: 0,
    delay: .3,
    ease: Power0.easeNone
});

gsap.fromTo(".artists__gallery", { opacity: 0, y: 50 }, {
    scrollTrigger: ".artists",
    opacity: 1,
    y: 0,
    delay: .5,
    ease: Power0.easeNone
});

//TICKETS
gsap.fromTo(".tickets .tickets__title", { opacity: 0, y: 50 }, {
    scrollTrigger: ".tickets",
    opacity: 1,
    y: 0,
    delay: .3,
    ease: Power0.easeNone
});

gsap.fromTo(".ticket__card__silver", { opacity: 0, y: 50 }, {
    scrollTrigger: ".tickets",
    opacity: 1,
    y: 0,
    delay: .5,
    ease: Power0.easeNone
});

gsap.fromTo(".ticket__card__gold", { opacity: 0, y: 50 }, {
    scrollTrigger: ".tickets",
    opacity: 1,
    y: 0,
    delay: .6,
    ease: Power0.easeNone
});

gsap.fromTo(".ticket__card__platinum", { opacity: 0, y: 50 }, {
    scrollTrigger: ".tickets",
    opacity: 1,
    y: 0,
    delay: .7,
    ease: Power0.easeNone
});

//CONTACT
gsap.fromTo(".contact h1", { opacity: 0, y: 50 }, {
    scrollTrigger: ".contact",
    opacity: 1,
    y: 0,
    delay: .3,
    ease: Power0.easeNone
});

gsap.fromTo(".contact__container", { opacity: 0, y: 50 }, {
    scrollTrigger: ".contact",
    opacity: 1,
    y: 0,
    delay: .5,
    ease: Power0.easeNone
});