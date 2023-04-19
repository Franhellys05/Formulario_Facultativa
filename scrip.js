const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backtBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=>{
    allInput.forEach(input => {
        if(input.value != " "){
            form.classList.add('secActive');
        } else{
            form.classList.remove('secActive');
            
        }
    })
})

backtBtn.addEventListener("click", ()=> form.classList.remove('secActive'));

