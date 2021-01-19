document.documentElement.classList.add('js-enabled');
const e_nav = document.querySelector('nav');
const e_top = e_nav.offsetTop
console.log(`e_nav.offsetTop => ${e_top}`);
window.addEventListener('scroll', function (){
    if (window.scrollY >= e_top ){
        document.body.className = "fixed-nav";
    }
    else {
        document.body.className="";
    }
})