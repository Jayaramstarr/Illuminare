const navList = document.querySelector('.nav-list');
const arrowHeads = document.querySelectorAll('.arrowhead');
const contents = document.querySelector('.contents');
const navListItems = document.querySelectorAll('.nav-list-items');
const userPresence = document.querySelector('.userPresence');
const bgImgContainer = document.querySelector('.background-img-container');


navListItems.forEach( item => {
    item.addEventListener('click', () => {
        if(item.dataset.itemName)
        {
            document.getElementById(item.dataset.itemName).scrollIntoView();
            console.log(document.getElementById(item.dataset.itemName).firstElementChild);
        }
    })
});



const sections = document.querySelectorAll('.section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  navListItems.forEach((link) => {
      link.classList.remove('active');
      link.style.borderBottom = "";
  });
  navListItems[index].classList.add('active');
  navListItems[index].style.borderBottom = "2px solid black";
}

changeLinkState();

// About

const dpImageContainer = document.querySelector('.dp-img-container');
const speechBubble = document.querySelector('.speech-bubble');

var isPresent = function(element) {
	var position = element.getBoundingClientRect();
	if((position.top >= 0 && position.bottom <= window.innerHeight) || (position.top < window.innerHeight && position.bottom >= 0)) 
        return true;
    return false;
}



window.addEventListener('scroll', () => {

    changeLinkState();

    if(window.scrollY!=0)
        navList.classList.add('scroll');
    else
        navList.classList.remove('scroll');

    if(isPresent(dpImageContainer))
        dpImageContainer.style.animation = 'dp-rotate 1.5s linear forwards';
    else
        dpImageContainer.style.animation = '';

    if(isPresent(speechBubble))
        speechBubble.style.animation = 'speech-bubble-pop 1s ease forwards';
    else
        speechBubble.style.animation = '';

});


// Contact

const contactContainer = document.querySelector('.contact-container'); 
const contactInfoContainer = document.querySelector('.contact-info-container'); 

const clearInputs = () => {
    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('number').value='';
}

const allClear = () => {
    contactContainer.style.display = 'none';
    clearInputs();
    contactInfoContainer.style.transform = 'translate(-50%,100%)';
}

document.querySelector('.contact').addEventListener('click', () => {
    contactContainer.style.display = 'block';
});

document.querySelector('.contact-close').addEventListener('click', allClear);

document.querySelector('.submit').addEventListener('click', allClear);

document.querySelector('.click-here').addEventListener('click', () => {
    contactInfoContainer.style.transform = 'translate(-50%,-50%)';
});

document.querySelector('.info-close').addEventListener('click', () => {
    clearInputs();
    contactInfoContainer.style.transform = 'translate(-50%,100%)';
});





// Work

const works = document.querySelectorAll('.work');
const individualWorkContainer = document.querySelector('.individual-work-container');
const individualWork = document.querySelector('.individual-work');

const renderIndividualWork = (workName,index) => {


    individualWork.style.background = `url('images/work/background/bg-img-${index}.jpg')`;
    individualWork.style.backgroundSize = 'cover';

    individualWork.innerHTML = `
    
        <div class="individual-title">${workName.charAt(0).toUpperCase() + workName.slice(1)}</div>
        <div class="individual-images-container">
            <div class="individual-image" id="image-set-1">
                <img src="images/work/${workName}/img-11.jpg" alt="" srcset="">
                <img class="hover-image" src="images/work/${workName}/img-12.jpg" alt="" srcset="">
            </div>
            <div class="individual-image" id="image-set-2">
                <img src="images/work/${workName}/img-21.jpg" alt="" srcset="">
                <img class="hover-image" src="images/work/${workName}/img-22.jpg" alt="" srcset="">
            </div>
            <div class="individual-image" id="image-set-3">
                <img src="images/work/${workName}/img-31.jpg" alt="" srcset="">
                <img class="hover-image" src="images/work/${workName}/img-32.jpg" alt="" srcset="">
            </div>
        </div>
        
    `;

    individualWorkContainer.style.display = 'block';    
}

document.querySelector('.individual-close').addEventListener('click', () => {
    individualWork.style.background = '';
    individualWork.innerHTML='';
    individualWorkContainer.style.display = 'none';
});

works.forEach( work => {
    work.addEventListener('click', () => {
        renderIndividualWork(work.id,work.dataset.indexNumber)
    });
});



// const navHeart = document.querySelector(".nav-heart");
// const navCart = document.querySelector(".nav-cart");
// const listObjects = {
//     "skincare":["Scrubs and Exfoliators","Facewash and Cleansers","Moisturizers"],
//     "haircare":["Shampoos","Conditioners","Oils and Wax"],
//     "fragrance":["Perfumes","Colognes","Deodrants"],
//     "clothing":["Shirts and T-shirts","Jackets and Hoodies","Pants"],
//     "lifestyle":["Bathroom Accessories","Travel Accessories"],
//     "about":[""]
// }

// navListItems.forEach( item => {
//     item.addEventListener('click', () => {
//         const listElement = item.id;
//         navListItems.forEach( e => {
//             if(e.classList.contains('liBackgroundColor') && e!=item)
//             {
//                 e.classList.remove('liBackgroundColor');
//                 e.firstElementChild.classList.remove('show-arrow');
//                 contents.classList.remove('showContents');
//             }
//         });

//         item.classList.toggle('liBackgroundColor');
//         item.firstElementChild.classList.toggle('show-arrow');
//         contents.classList.toggle('showContents');
//         if(contents.classList.contains('showContents'))
//         {
//             contents.innerHTML = `
//                 <ul>
//                     ${listObjects[item.id][0] ? `<li><a href="${listObjects[item.id][0]=="Shirts and T-shirts"? "http://localhost:3000/shirts-tshirts":"#"}">${listObjects[item.id][0]}</a></li><hr>`:""}
//                     ${listObjects[item.id][1] ? `<li><a href="#">${listObjects[item.id][1]}</a></li><hr>`:""}
//                     ${listObjects[item.id][2] ? `<li><a href="#">${listObjects[item.id][2]}</a></li><hr>`:""}
//                     ${listObjects[item.id][3] ? `<li><a href="#">${listObjects[item.id][3]}</a></li><hr>`:""}
                    
//                 </ul>
//             `;
//         }
//     });
// });

// window.onload = function(){
//     document.onclick = function(e){
        
//         let a = e.target;
//         let els = [];
//         while (a) {
//             els.unshift(a);
//             a = a.parentNode;
//         }
//         els.splice(0,1);
//         els = els.map( item => item.tagName); 
//         if(!els.includes("NAV"))
//         {
//             contents.classList.remove('showContents');
//             navListItems.forEach( item => {
//                 item.classList.remove('liBackgroundColor');
//             item.firstElementChild.classList.remove('show-arrow');
//             })
//         }
//     };
// }