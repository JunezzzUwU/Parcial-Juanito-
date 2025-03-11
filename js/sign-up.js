document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signUpForm");
    const btnCancelar = document.getElementById("cancelar");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const estrato = document.getElementById("estrato").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const grupoSanguineo = document.getElementById("grupoSanguineo").value;
        const genero = document.querySelector('input[name="genero"]:checked')?.value;
        const actividades = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.value)
                                .join(", ");

        if (!nombre || !apellido || !email || !telefono || !fechaNacimiento || !grupoSanguineo || !genero) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        alert(`Datos ingresados:\nNombre: ${nombre} ${apellido}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha de Nacimiento: ${fechaNacimiento}\nGrupo Sanguíneo: ${grupoSanguineo}\nGénero: ${genero}\nActividades: ${actividades}`);
    });

    btnCancelar.addEventListener("click", function() {
        window.location.href = "admin.html";
    });
});
