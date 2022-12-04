const page = document.querySelectorAll('.page');
const header = document.querySelector('.header');
const section = document.querySelector('.section');
const footer = document.querySelector('.footer');
const extra = document.querySelector('.extra');
const load_cpp = document.querySelector('.load-cpp');
const load_js = document.querySelector('.load-js');
const load_py = document.querySelector('.load-py');
const load_css = document.querySelector('.load-css');
const load_nd = document.querySelector('.load-nd');
const txt_4 = document.querySelector('.text-4');
const anim_rec = document.querySelectorAll('.anim-rec');

console.log(anim_rec);



const callback = function(entries){
  // console.log(entries)
  entries.forEach(entry=>{
    if(entry.isIntersecting && entry.target.classList.contains("header")){
      // console.log(entry.target.classList)
      // console.log(entry.isIntersecting)
      document.body.style.backgroundColor = "#e14d2a";
    }
    

    if(entry.isIntersecting && entry.target.classList.contains("section")){
      
      document.body.style.backgroundColor = "#3e6d9c";
    }
    

    if(entry.isIntersecting && entry.target.classList.contains("footer")){
      document.body.style.backgroundColor = "#2F2F2F";
      load_cpp.style.width = "40%";
      load_js.style.width = "50%";
      load_css.style.width = "50%";
      load_py.style.width = "20%";
      load_nd.style.width = "40%";
    }

    if(entry.isIntersecting && entry.target.classList.contains("extra")){
      document.body.style.backgroundColor = "#9A1663";
      setTimeout(()=>{
        txt_4.classList.add('inv-text');
      }, 500);

      setTimeout(()=>{
        txt_4.style.transform = "translateY(-10rem)";
      }, 500);

      setTimeout(()=>{
        for(a of anim_rec){
          a.style.opacity = 1;
        }
      }, 1000);
      
    }
    else{
      txt_4.classList.remove('inv-text')
    }

  })
}

const observer = new IntersectionObserver(callback, {
  threshold: 0.5

})

page.forEach(page=>{
  observer.observe(page)
})











