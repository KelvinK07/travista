const faqList = document.querySelectorAll(".FAQCard");
faqList.forEach((FAQ)=>{
    FAQ.addEventListener("click",()=>{
        FAQ.classList.toggle("active");
    });
});