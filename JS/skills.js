const navbar = document.querySelector('.navbar');
const linkArray = Array.from(document.querySelectorAll('.links'));
const linkBorder = "<div class='link-border'></div>";
const border = document.querySelector('.border');
const pointer = document.querySelector('.pointer');
const hamburger = document.querySelector('.hamburger');
/////
const skillArray = Array.from(document.querySelectorAll('.h-sk'));
const numDisplay = document.querySelector('#number-display');
const skillTitle = document.querySelector('#skill-title');
const polyline = document.querySelector('#polyline');
const polylineTwo = document.querySelector('#polyline-two');
const circle = document.querySelector('#circle');
const code = document.querySelector('.code');
const scrollCode = document.querySelector('.scroll-code');
const branchNode = document.querySelector('.branch-node');
const branches = document.querySelector('.branches');

function animateSkills(target){
    $(skillArray).each((index, skill)=>{
        if(skill === target){
            skill.classList.add('selected');
            $(skillTitle).text($(skill).text());
            $(numDisplay).text('0' + (index + 1));
        } else {
            skill.classList.remove('selected');
        }
    })
}
function animateBranches(circle, polyLine, polyLineTwo, numDisplay){
    //animate circle
    $(circle).css({
        'display' : 'block',
        'animation' : 'circle .5s linear reverse'
    });
    //animate first poly
    $(polyLine).css({
        'display' : 'block',
        'animation' : 'dash-one .5s linear reverse'
    });
    //animate second poly
    $(polyLineTwo).css({
        'display' : 'block',
        'animation' : 'dash-two .5s linear reverse'
    });
    //animate numDisplay
    $(numDisplay).css({
        'animation' : 'appear .1s linear forwards',
        'top' : event.target.offsetTop.toString() - 25 + 'px'
    });
    //animate branchNode
    $(branchNode).css({
        'position' : 'absolute',
        'top' : event.target.offsetTop.toString() - 7 + 'px'
    });
}
function animateScrollCode(){
    $(skillTitle).css('animation', 'appear .1s linear forwards');
    $(code).css({
        'position' : 'relative',
        'top' : event.target.offsetTop.toString() - 442 + 'px'
        });
    $(scrollCode).css('display', 'block');  
}

skillArray.forEach((skill)=>{
    skill.addEventListener('click', (event)=>{
        //animate skills
        animateSkills(event.target);
        //animate and reveal tree branches
        animateBranches(circle, polyline, polylineTwo, numDisplay);
        //animate scrolling code
        animateScrollCode();
    })
})

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
        //animate border
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




