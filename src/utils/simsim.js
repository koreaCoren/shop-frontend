const sim = () => {
    const body = document.querySelector("body");
    const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    let index = 0;
    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }
    window.addEventListener("load", () => {
        const zz = document.createElement("div");
        body.append(zz);
        index++;
        zz.style = `position: fixed;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100vh;
        transform: translate(-50%, -50%);
        background-color :${randomValueFromArray(color)};
        z-index: ${index};
        `
        setInterval(() => {
            zz.style.backgroundColor = randomValueFromArray(color);
        }, 100);
    })

    window.addEventListener("click", () => {
        const zz = document.createElement("div");
        body.append(zz);
        index++;
        zz.style = `position: fixed;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color :${randomValueFromArray(color)};
        transition: all .5s;
        z-index: ${index};
        `
        setTimeout(() => {
            zz.style.width = "100%";
            zz.style.height = "100vh";
            zz.style.borderRadius = "0px";
            zz.style.opacity = "0.5";
        }, 500);
    })
}

export default sim;

