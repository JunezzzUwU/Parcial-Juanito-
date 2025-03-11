document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("content");
    const misionBtn = document.getElementById("mision");
    const visionBtn = document.getElementById("vision");
    const equipoBtn = document.getElementById("equipo");

    misionBtn.addEventListener("click", function () {
        content.innerHTML = `
            <div class='mision-vision'>
                <div class='image-placeholder'>Image</div>
                <div>
                    <h2>Misión</h2>
                    <p id='text-content'>Nuestra misión es...</p>
                    <button onclick='changeSize()'>Cambiar tamaño de letra</button>
                    <button onclick='changeColor()'>Cambiar color de letra</button>
                </div>
            </div>
        `;
    });

    visionBtn.addEventListener("click", function () {
        content.innerHTML = `
            <div class='mision-vision'>
                <div class='image-placeholder'>Image</div>
                <div>
                    <h2>Visión</h2>
                    <p id='text-content'>Nuestra visión es...</p>
                    <button onclick='changeSize()'>Cambiar tamaño de letra</button>
                    <button onclick='changeColor()'>Cambiar color de letra</button>
                </div>
            </div>
        `;
    });

    equipoBtn.addEventListener("click", function () {
        content.innerHTML = `
            <div class='equipo'>
                <div class='equipo-container' id='slider'>
                    <div class='equipo-item'>
                        <img src='../images/a.jpg' alt='Empleado 1'>
                        <h3>Nombre 1</h3>
                        <p>Perfil profesional</p>
                        <div class='social-icons'>
                            <a href='#'>🔵</a>
                            <a href='#'>🐦</a>
                            <a href='#'>💼</a>
                        </div>
                    </div>
                    <div class='equipo-item'>
                        <img src='../images/a.jpg' alt='Empleado 2'>
                        <h3>Nombre 2</h3>
                        <p>Perfil profesional</p>
                        <div class='social-icons'>
                            <a href='#'>🔵</a>
                            <a href='#'>🐦</a>
                            <a href='#'>💼</a>
                        </div>
                    </div>
                    <div class='equipo-item'>
                        <img src='../images/a.jpg' alt='Empleado 3'>
                        <h3>Nombre 3</h3>
                        <p>Perfil profesional</p>
                        <div class='social-icons'>
                            <a href='#'>🔵</a>
                            <a href='#'>🐦</a>
                            <a href='#'>💼</a>
                        </div>
                    </div>
                </div>
                <div class='equipo-nav prev' onclick='moveSlide(-1)'>&#10094;</div>
                <div class='equipo-nav next' onclick='moveSlide(1)'>&#10095;</div>
            </div>
        `;
    });
});

function changeSize() {
    const text = document.getElementById("text-content");
    text.style.fontSize = text.style.fontSize === "16px" ? "20px" : "16px";
}

function changeColor() {
    const text = document.getElementById("text-content");
    text.style.color = text.style.color === "black" ? "blue" : "black";
}

let slideIndex = 0;
function moveSlide(step) {
    const slider = document.getElementById("slider");
    const items = document.querySelectorAll(".equipo-item");
    slideIndex = (slideIndex + step + items.length) % items.length;
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}