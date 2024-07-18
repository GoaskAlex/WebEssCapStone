window.onload = () => {
    const mobileMenuIcon = document.getElementById("mobile-menu-button");
    mobileMenuIcon.addEventListener("click", () => {
      if (mobileMenuIcon.classList.contains("open")){
        mobileMenuIcon.classList.remove("open");
      }else{
        mobileMenuIcon.classList.add("open");
      }
  })
    const ticketMenu = document.getElementById("ticket-menu-item");
    ticketMenu.addEventListener("click", () => {
      if (ticketMenu.classList.contains("open")){
        ticketMenu.classList.remove("open");
      }else{
        ticketMenu.classList.add("open");
      }
  })

  const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", () => {
      if (document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
      }else{
        document.body.classList.add("dark");
      }
  })
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const carousel = document.getElementById("carousel");

  nextButton.addEventListener("click",()=>{
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft += itemWidth;
  })
  previousButton.addEventListener("click",()=>{
    const itemWidth = carousel.getElementsByTagName("div")[0].clientWidth;
    carousel.scrollLeft -= itemWidth;
  })

}
