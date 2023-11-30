const headingInformationList = document.querySelectorAll(".headingInformation-SubHeading");
const contentSections = document.querySelectorAll(".headingInformation-Info > div");
headingInformationList.forEach((information, index)=>{
    information.addEventListener("click",()=>{
        headingInformationList.forEach((FAQitem)=>{
            FAQitem.classList.remove("active");
        });
        contentSections.forEach((section)=>{
            section.style.display = "none";
        });
        contentSections[index].style.display = "block";
        information.classList.add("active");
    });
});

window.onload = ()=>{
    contentSections.forEach((section)=>{
        section.style.display = "none";
    });
    contentSections[0].style.display = "block";
    headingInformationList[0].classList.add("active");
};