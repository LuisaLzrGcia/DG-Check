document.addEventListener("DOMContentLoaded", function () {
    // validarCuestionario()
});

const validarCuestionario = () => {

}

const getValues = () => {
    pregunta(11)
    pregunta(12)
    pregunta(13)
}

const validarArea1 = () => {
    const respA1 = [
        pregunta(11),
        pregunta(12),
        pregunta(13),
        pregunta(14)
    ]

    const contestadoA1 = contestado(respA1);

    console.log(respA1)
    if (contestadoA1 == 0) {
        document.getElementById("bttnA1").removeAttribute("href")
        window.location.href = "./area-2.html";
        localStorage.removeItem("area1")
        localStorage.setItem("area1", JSON.stringify(respA1))
    }
}

const validarArea2 = () => {
    const respA2 = [
        pregunta(21),
        pregunta(22),
        pregunta(23)
    ]

    const contestadoA2 = contestado(respA2);
    console.log(respA2)
    if (contestadoA2 == 0) {
        document.getElementById("bttnA2").removeAttribute("href")
        window.location.href = "./area-3.html";
        localStorage.removeItem("area2")
        localStorage.setItem("area2", JSON.stringify(respA2))
    }
}

const validarArea3 = () => {
    const respA3 = [
        pregunta(31),
        pregunta(32),
        pregunta(33),
        pregunta(34)
    ]

    const contestadoA3 = contestado(respA3);
    console.log(respA3)
    if (contestadoA3 == 0) {
        document.getElementById("bttnA3").removeAttribute("href")
        window.location.href = "./area-4.html";
        localStorage.removeItem("area3")
        localStorage.setItem("area3", JSON.stringify(respA3))
    }
}

const validarArea4 = () => {
    const respA4 = [
        pregunta(41),
        pregunta(42),
        pregunta(43)
    ]

    const contestadoA4 = contestado(respA4);
    console.log(respA4)
    if (contestadoA4 == 0) {
        document.getElementById("bttnA4").removeAttribute("href")
        window.location.href = "./area-5.html";
        localStorage.removeItem("area4")
        localStorage.setItem("area4", JSON.stringify(respA4))
    }
}

const validarArea5 = () => {
    const respA5 = [
        pregunta(51),
        pregunta(52),
        pregunta(53)
    ]

    const contestadoA5 = contestado(respA5);
    console.log(respA5)
    if (contestadoA5 == 0) {
        document.getElementById("bttnA5").removeAttribute("href")
        window.location.href = "./area-6.html";
        localStorage.removeItem("area5")
        localStorage.setItem("area5", JSON.stringify(respA5))
    }
}

const validarArea6 = () => {
    const respA6 = [
        pregunta(61),
        pregunta(62),
        pregunta(63),
        pregunta(64),
        pregunta(65)
    ]

    const contestadoA6 = contestado(respA6);
    console.log(respA6)
    if (contestadoA6 == 0) {
        document.getElementById("bttnA6").removeAttribute("href")
        window.location.href = "./datos.html";
        localStorage.removeItem("area6")
        localStorage.setItem("area6", JSON.stringify(respA6))
    }
}

const contestado = (respuestas) => {
    let lleno = 0;

    respuestas.forEach(element => {
        if (element == 0) {
            console.log(element)
            lleno++;
        }
    });

    return lleno;
}

const pregunta = (num) => {
    let valorResp;
    const pregunta = document.getElementById(`resp${num}`)
    for (let i = 0; i < 5; i++) {
        let respuestaSel = pregunta.children[i].children[0]
        if (respuestaSel.checked == true) {
            valorResp = parseInt(respuestaSel.getAttribute("value"));
            break;
        } else {
            valorResp = 0;
        }
    }
    return valorResp;
}