//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const waveSvg = document.querySelectorAll(".wave-svg")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
waveSvg.forEach(object => {

    gsap.set( object, {  
        width: '150vw',
        left:'-50vw'
      });

// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "bottom top",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          //marker to false to turn off
          markers: false,
      }
    }).to(object,{
        left:'0',
    })
})

//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const spinningboy = document.querySelectorAll(".spinningboy")
// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
spinningboy.forEach(object => {
// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "bottom top",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).to(object,{
        rotate:'180',
        //ROTATES 1 LOOP 360 per screen 
        //90 is one quarter rotation per screen therefore 1/4 speed
    })
})

//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const slideIn = document.querySelectorAll(".slidein")


// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
slideIn.forEach(object => {

    gsap.set( object, {  
        left:'-100vw',
      });

// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
          trigger: object,
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "bottom top",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).to(object,{
        left:'0',
        //ROTATES 1 LOOP 360 per screen 
        //90 is one quarter rotation per screen therefore 1/4 speed
    })
})

//js off on mobile?

//  first we are finding all of the elements that have a class of scroll-in-from-bottom
const spinningMenu = document.querySelectorAll(".spinningmenu")
// for each of them we are going to attach a gsap animation ( like a jekyll for loop just in js :D )
spinningMenu.forEach(object => {
// we start with a gsap timeline
    let tl = gsap.timeline({
    // here's where we start attching the animation to the scroll
      scrollTrigger: {
      	// this is what is triggering the start of the animation
        //scroll on whole body instead of scrolling on object
          trigger: document.querySelector('body'),
        	// this one takes in to bits of info. the first is the part of the trigger element thats causing the trigger to start and the second one is where on the screen. both of them can be either top, center, bottom or a percentage (% are from the top of the container( as in trigger element or screen) )   
          start: "top bottom",
			// same as start but the end point of the animation          
          end: "bottom top",
          // now this is the most important line of code its what turns the triggers from a start point in to locking it to the scroll
          scrub: true,
          // last but not least this helps us to visualize the script
          markers: false,
      }
    }).to(object,{
        rotate:'180',
        "--svgcolor": "#fec001"
        //ROTATES 1 LOOP 360 per screen 
        //90 is one quarter rotation per screen therefore 1/4 speed
    }).to(object,{
      rotate:'360',
      "--svgcolor": " #ff9676"
      //ROTATES 1 LOOP 360 per screen 
      //90 is one quarter rotation per screen therefore 1/4 speed
    }).to(object,{
      rotate:'560',
      "--svgcolor": "#e26a07"
      //ROTATES 1 LOOP 360 per screen 
      //90 is one quarter rotation per screen therefore 1/4 speed
  })
})

//BURGER MENU
const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu')

function toggleBurger() {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('active')
}

burgerButton.addEventListener('click', toggleBurger)
