// Get the elements
const openPopupButton = document.getElementById('Open');
const popupOverlay = document.getElementById('popupOverlay');
const closePopupButton = document.getElementById('ClosePopup');

// Show the popup when "New Asset" button is clicked
openPopupButton.addEventListener('click', function () {
  popupOverlay.style.display = 'flex'; // Show popup
});

// Close the popup when the "Close" button is clicked
closePopupButton.addEventListener('click', function () {
  popupOverlay.style.display = 'none'; // Hide popup
});

// Optional: Close the popup if the user clicks outside the popup content
popupOverlay.addEventListener('click', function (e) {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = 'none';
  }
});
