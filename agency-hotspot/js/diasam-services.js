/* ===================================
    DiaSam Services Modal Functionality
====================================== */

// Open service modal
function openServiceModal(serviceId) {
  const modalId = serviceId + "-modal";
  const modal = document.getElementById(modalId);

  if (modal) {
    // Add active class to show modal
    modal.classList.add("active");

    // Lock body scroll
    document.body.classList.add("modal-open");

    // Add escape key listener
    document.addEventListener("keydown", handleEscapeKey);
  }
}

// Close service modal
function closeServiceModal(modalId) {
  const modal = document.getElementById(modalId);

  if (modal) {
    // Remove active class to hide modal
    modal.classList.remove("active");

    // Unlock body scroll
    document.body.classList.remove("modal-open");

    // Remove escape key listener
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

// Close modal when clicking on backdrop (not on modal content)
function closeModalOnBackdrop(event, modalId) {
  // Check if the click was directly on the modal overlay (not on its children)
  if (event.target.classList.contains("service-modal")) {
    closeServiceModal(modalId);
  }
}

// Handle escape key press
function handleEscapeKey(event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    // Find all active modals and close them
    const activeModals = document.querySelectorAll(".service-modal.active");
    activeModals.forEach((modal) => {
      modal.classList.remove("active");
    });

    // Unlock body scroll
    document.body.classList.remove("modal-open");

    // Remove this event listener
    document.removeEventListener("keydown", handleEscapeKey);
  }
}

// Add keyboard accessibility to service cards
document.addEventListener("DOMContentLoaded", function () {
  const serviceCards = document.querySelectorAll(".clickable-feature");

  serviceCards.forEach((card) => {
    // Make cards keyboard accessible
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");

    // Add keyboard event listener
    card.addEventListener("keydown", function (event) {
      // Trigger on Enter or Space key
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.keyCode === 13 ||
        event.keyCode === 32
      ) {
        event.preventDefault();
        // Trigger the click event
        card.click();
      }
    });
  });

  // Add keyboard navigation for modal close buttons
  const closeButtons = document.querySelectorAll(".modal-close");

  closeButtons.forEach((button) => {
    button.addEventListener("keydown", function (event) {
      if (
        event.key === "Enter" ||
        event.key === " " ||
        event.keyCode === 13 ||
        event.keyCode === 32
      ) {
        event.preventDefault();
        button.click();
      }
    });
  });
});

// Prevent modal content clicks from closing the modal
document.addEventListener("DOMContentLoaded", function () {
  const modalContents = document.querySelectorAll(".modal-container");

  modalContents.forEach((content) => {
    content.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
});
