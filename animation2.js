const observer = new IntersectionObserver( (entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("list")
        } else{
            entry.target.classList.remove("list")
        }
        
    })    
})

const hiddenElement = document.querySelectorAll(".second2");
hiddenElement.forEach((el) => observer.observe(el));