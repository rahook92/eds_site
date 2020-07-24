
const navbar = document.querySelector('.navbar');
const linkArray = Array.from(document.querySelectorAll('.links'));
const linkBorder = "<div class='link-border'></div>";
const border = document.querySelector('.border');
const pointer = document.querySelector('.pointer');
const hamburger = document.querySelector('.hamburger');


function getPointerPos(target){
    const rect = target.getBoundingClientRect();
    const res = rect.y + ((rect.height / 2) - 4);
    return res;
}

function animateNavBorder(event){
    if(event.type === 'mouseover'){
        $(border).css({
            'width' : '3px',
            'height' : '100%',
            'background' : 'linear-gradient(180deg, #66DBE2 0%, rgba(255, 255, 255, 0.9) 100%)'
        });
        $(pointer).css({
            'opacity' : '1',
            'top' : getPointerPos(event.target).toString() + 'px'
        });
    } else {
        $(border).css({
            'width' : '1px',
            'height' : '95%',
            'background' : 'linear-gradient(#FFFCFC, rgba(32, 32, 32, 0.5))'
        });
        $(pointer).css('opacity', '0');
    }
}

function animateHamburger(event){
    if(event.type === 'mouseover'){
        $(hamburger).css('display', 'none');
    } else {
        $(hamburger).css('display', 'block');
    }
}

linkArray.forEach((link)=>{
    link.addEventListener('mouseover', (event)=>{
        //insert link borders
        $(linkBorder).insertBefore(event.target);
        $(linkBorder).insertAfter(event.target);
        //animate link
        $(event.target).css('animation', 'grow .1s linear forwards');
        //animate borde
        animateNavBorder(event);
        //hide hamburger
        animateHamburger(event);
    })
    link.addEventListener('mouseout', (event)=>{
        //remove link borders
        const borders = $('.link-border').toArray();
        $(borders).remove();
        //animate link
        $(event.target).css('animation', 'shrink .1s linear forwards');
        //animate border
        animateNavBorder(event);
        //redisplay hamburger
        animateHamburger(event);
    })
})