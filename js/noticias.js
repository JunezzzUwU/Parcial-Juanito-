document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("newsModal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");

    window.openModal = function (title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "flex";
    };

    window.closeModal = function () {
        modal.style.display = "none";
    };

    closeButton.addEventListener("click", function () {
        closeModal();
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});