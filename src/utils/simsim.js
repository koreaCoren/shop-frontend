const sim = () => {
    const body = document.querySelector("body");
    const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
    let index = 0;
    let x = 0;
    let y = 0;

    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }

    window.addEventListener("load", () => {
        const zz = document.createElement("div");
        body.append(zz);
        index++;

        window.addEventListener('mousemove', (e) => {
            x = e.clientX;
            y = e.clientY;
        });

        window.addEventListener("click", () => {
            const zz = document.createElement("div");
            body.append(zz);
            index++;
            zz.style = `position: fixed;
            top: ${y}px;
            left: ${x}px;
            width: 0px;
            height: 0px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background-color :${randomValueFromArray(color)};
            transition: all 2s;
            z-index: ${index};
            `
            setTimeout(() => {
                zz.style.width = "10000px";
                zz.style.height = "10000px";
                zz.style.borderRadius = "0px";
                zz.style.opacity = "0.5";
            }, 1);
        })
    })


}

export default sim;

