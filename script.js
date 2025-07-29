window.addEventListener("scroll", () => {
    const compartilhadas = document.querySelector(".compartilhadas");
    const scrollPosition = window.scrollY + window.innerHeight;
  
    if (compartilhadas && scrollPosition >= compartilhadas.offsetTop + 100) {
      compartilhadas.classList.add("visible");
    }
  });
  