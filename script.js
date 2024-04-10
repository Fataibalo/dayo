document.addEventListener("DOMContentLoaded", function () {
    const quantityIcons = document.querySelectorAll(".fa-plus-circle, .fa-minus-circle");
    const deleteIcons = document.querySelectorAll(".fa-trash-alt");
    const likeIcons = document.querySelectorAll(".fa-heart");
  
    // Function to update the quantity of items
    function updateQuantity(icon, increment) {
      const cardBody = icon.closest(".card-body");
      const quantityElement = cardBody.querySelector(".quantity");
      let quantity = parseInt(quantityElement.textContent);
      quantity += increment;
      if (quantity < 0) quantity = 0;
      quantityElement.textContent = quantity;
      updateTotalPrice();
    }
  
    // Function to delete an item
    function deleteItem(icon) {
      const card = icon.closest(".card");
      card.remove();
      updateTotalPrice();
    }
  
    // Function to toggle like status
    function toggleLike(icon) {
      icon.classList.toggle("far");
      icon.classList.toggle("fas");
      icon.classList.toggle("text-danger");
    }
  
    // Function to update total price
    function updateTotalPrice() {
      let totalPrice = 0;
      document.querySelectorAll(".card").forEach(card => {
        const quantity = parseInt(card.querySelector(".quantity").textContent);
        const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
        totalPrice += quantity * unitPrice;
      });
      document.querySelector(".total").textContent = totalPrice.toFixed(2) + " $";
    }
  
    // Event listeners for quantity buttons
    quantityIcons.forEach(icon => {
      icon.addEventListener("click", function () {
        const increment = icon.classList.contains("fa-plus-circle") ? 1 : -1;
        updateQuantity(icon, increment);
      });
    });
  
    // Event listeners for delete icons
    deleteIcons.forEach(icon => {
      icon.addEventListener("click", function () {
        deleteItem(icon);
      });
    });
  
    // Event listeners for like icons
    likeIcons.forEach(icon => {
      icon.addEventListener("click", function () {
        toggleLike(icon);
      });
    });
  });
  