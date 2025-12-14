setTimeout(() => {
    const controler = document.getElementById("controler");

    controler.onclick = () => {
        controler.classList.add("show");
    };

    document.addEventListener("click", (e) => {
        if (!controler.contains(e.target)) {
            if (controler.classList.contains("show")) {
                controler.classList.remove("show");
            }
        }
    });
}, 1000)