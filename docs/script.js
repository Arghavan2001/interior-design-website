document.addEventListener('DOMContentLoaded',()=>{

   



    //start mobile menu
    const hamber = document.getElementById('hamber');
    const mobile_nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    const crosses = document.querySelectorAll('.cross');

    hamber.addEventListener('click', ()=>{
        mobile_nav.classList.add('open');
    });

    crosses.forEach(cross=>{
        cross.addEventListener('click', () => {
            mobile_nav.classList.remove('open');
        });
    });

    overlay.addEventListener('click', () => {
        mobile_nav.classList.remove('open');
    });

    window.addEventListener('resize', () => {
        mobile_nav.classList.remove('open')
    })

    

    //end mobile menu

    //start moving menu

    //get menubar
    const menu_bar = document.getElementById('menu-bar');

 
   
    //get view port height
    function viewHeight(){
        return window.visualViewport.height;
    }

    let vp_height = viewHeight();
    
    window.addEventListener('resize',() => {
        vp_height =viewHeight();
    })

    //handle menu through
    let scrollY = window.scrollY;


    if(scrollY > 0.8 * vp_height){
        if(menu_bar){
       
        menu_bar.style.backgroundColor = 'black';
        menu_bar.style.top = `0`;
        }

     
  
    }else{
        if(menu_bar){

            menu_bar.style.top = `-${scrollY}px`;
     
            }

    }
       
    
    //handle transition through scroll
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

       

        if (scrollY <=  0.8 * vp_height) {

            if(menu_bar){
               
                menu_bar.style.top = `-${scrollY}px`;
                menu_bar.style.backgroundColor = 'transparent';
            }
           
          
            
        } else if(scrollY > 0.8 * vp_height){
            if(menu_bar){
           
            menu_bar.style.backgroundColor = 'black';
            menu_bar.style.top = `0`;
            }

      
        }

     
        
    })



    //end moving menu


    //start handle hero btns

    
    //get menubar height


    function getMenuBarHeight(){
        return menu_bar.offsetHeight;
    }
if(menu_bar){
    let menuBarHeight = getMenuBarHeight();
    window.addEventListener('resize',() => {
        menuBarHeight = getMenuBarHeight();
    });
}

    const to_design = document.getElementById('to-design');
    const design = document.getElementById('design');
    
    const to_rebuild = document.getElementById('to-rebuild');
    const rebuild = document.getElementById('rebuild');
    
    const to_decoration = document.getElementById('to-decoration');
    const decoration = document.getElementById('decoration');
    

    if(to_design){
        to_design.addEventListener('click', (e) => {
            e.preventDefault();
    
            let designOffset = design.offsetTop;
            window.scrollTo({ top: designOffset - getMenuBarHeight(), behavior: 'smooth' })
    
        })
    }

    if(to_rebuild){
        to_rebuild.addEventListener('click', (e) => {
            e.preventDefault();
    
            let rebuildOffset = rebuild.offsetTop;
            window.scrollTo({ top: rebuildOffset - getMenuBarHeight(), behavior: 'smooth' })
    
        })
    }

    if(to_decoration){
        to_decoration.addEventListener('click', (e) => {
            e.preventDefault();
    
            let decorationOffset = decoration.offsetTop;
            window.scrollTo({ top: decorationOffset - getMenuBarHeight(), behavior: 'smooth' })
    
        })
    }
    //end handle hero btns

     //start handle accardion
     const accardions = document.querySelectorAll('.accardion');
     const pannels = document.querySelectorAll('.pannel')
  
 
     accardions.forEach(accardion => {
         accardion.addEventListener('click',() => {
             accardion.classList.toggle('accardion-active');
 
 
 
         
             //finding next pannel
             let pannel = accardion.nextElementSibling;
             
             //finding the father
             const father_pannel = pannel.closest('.father-pannel');
      
            
           
           
            
             //if the clicked maxHeight was 0
             if(!pannel.style.maxHeight){
                 pannel.style.maxHeight = pannel.scrollHeight + 'px';
                 if(father_pannel && father_pannel != pannel){
                     father_pannel.style.maxHeight = father_pannel.scrollHeight + pannel.scrollHeight + 'px';
                     console.log(father_pannel.scrollHeight);
 
                 }
         
              
             }else{
                 pannel.style.maxHeight = null;
 
                 if(father_pannel === pannel){
                     father_pannel.querySelectorAll('.pannel').forEach(pannel => {
                         pannel.style.maxHeight = null;
                     });
 
                     const childs = father_pannel.querySelectorAll('.accardion');
                     childs.forEach(child => {
                         child.classList.remove('accardion-active');
                     })
                 }
                
             }
         })
     });
 
     window.addEventListener('resize',() => {
         accardions.forEach(accardion => {
             accardion.classList.remove('accardion-active');
         });
 
         pannels.forEach(pannel => {
             pannel.style.maxHeight = null;
         });
     });
 
     crosses.forEach(cross=>{
         cross.addEventListener('click', () => {
            accardions.forEach(accardion => {
                accardion.classList.remove('accardion-active');
            });
    
            pannels.forEach(pannel => {
                pannel.style.maxHeight = null;
            });
         });
     });
 
     overlay.addEventListener('click', () => {
        accardions.forEach(accardion => {
            accardion.classList.remove('accardion-active');
        });

        pannels.forEach(pannel => {
            pannel.style.maxHeight = null;
        });
     });
 
    
     //end handle accardion

    // start order registration form validation
    const order_form = document.getElementById('order-form');
    
    if(order_form){
        order_form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            let valid = true;
            order_form.querySelectorAll('.error-msg').forEach(er => er.textContent = "");
    
            const name = order_form.elements['name'];
            const phone = order_form.elements['phone'];
    
            // name validation
            if(name.value.trim().length < 5){
                name.nextElementSibling.textContent='نام و نام خانوادگی معتبر وارد کنید';
                valid = false;
            }
    
            // phone validation
            if(!/^09\d{9}|۰۹[۰-۹]{9}$/.test(phone.value.trim())){
                phone.nextElementSibling.textContent='شماره همراه معتبر وارد کنید';
                valid = false;
            }
    
            if(valid){
                order_form.reset();
                order_form.querySelector('.success-msg').textContent='کارشناسان ما، در اسرع وقت با شما تماس خواهند گرفت';
                setTimeout(()=>order_form.submit(),1000);
            }
        });
    }
  
    // end order registration form validation

      //start handle msg form validation
      const msg_form = document.getElementById('msg-form');
 
      if(msg_form){
          msg_form.addEventListener('submit', (e) => {
        
              e.preventDefault();
      
      
               //get data
               const name = msg_form.elements['name'];
               const concept = msg_form.elements['concept'];
               const description = msg_form.elements['description'];
      
               //reset
               let valid = true;
               msg_form.querySelectorAll('.error-msg').forEach(er => er.textContent = "");
      
               //validate name
               if (name.value.trim().length < 3) {
                   name.nextElementSibling.textContent = "لطفا نام معتبر وارد کنید.";
                   valid = false;
               }
      
               //validate phone
               if (concept.value.trim().length < 3) {
                  concept.nextElementSibling.textContent = "لطفا موضوع معتبر وارد کنید.";
                  valid = false;
              }
      
               //valildate concept
               if (description.value.trim().length < 5) {
                  description.nextElementSibling.textContent = "لطفا پیام معتبر وارد کنید.";
                  valid = false;
              }
      
               if (valid) {
                   msg_form.reset();
                   msg_form.querySelector('.success-msg').textContent = "به زودی پیام ارزشمند شما را بررسی میکنیم.";
                   setTimeout(() => msg_form.submit(), 1000);
               }
          })
      }
       //end handle msg form validation
});




 //swiper
 if(typeof Swiper !== 'undefined'){
    var mySwipwer = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        lazy:{
            loadPrevNext: true
        },
            breakpoints:{
                
                0:{slidesPerView: 1},
                768:{slidesPerView: 2},
                1024:{slidesPerView: 3},
                
            },
        autoplay:{
            delay: 3000
        },
        on:{
            init: function(){
                document.querySelectorAll('.swiper').forEach(swiper=>{
                    swiper.style.visibility = 'visible';
                    swiper.style.opacity = 1;
                })
            }
        }
    });



}


    //AOS
    if(typeof AOS !== 'undefined'){
        setTimeout(()=>{
            AOS.init({
                once: true,
                duration: 700,
                easing: "ease-out-cubic"
            },1000);
        })
    }



//CounterUp

if(typeof countUp !== 'undefined'){

function toPersianNumber(number) {
    const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return number.toString().replace(/\d/g, d => persianDigits[d]);
  }

const counter1 = new countUp.CountUp('year', 15, { duration: 3, formattingFn: toPersianNumber, enableScrollSpy: true, scrollSpyOnce:true  });
if (!counter1.error) counter1.start();

// شمارنده دوم
const counter2 = new countUp.CountUp('satisfication', 3200, { duration: 3, formattingFn: toPersianNumber, enableScrollSpy: true, scrollSpyOnce:true });
if (!counter2.error) counter2.start();

// شمارنده سوم
const counter3 = new countUp.CountUp('projects', 780, { duration: 2, formattingFn: toPersianNumber, enableScrollSpy: true, scrollSpyOnce:true  });
if (!counter3.error) counter3.start();

}