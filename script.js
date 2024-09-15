var points = 0;

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from submitting normally
  
  // Get all checkboxes
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var selectedOptions = [];

  // Iterate over each checkbox
  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) { // If checkbox is checked, add its value to the selected options array
    console.log("in checkbox")
      
      selectedOptions.push(checkbox.value);
    }
  });

  // Print the selected options to the console
  console.log("Selected options:", selectedOptions);

  window.location.replace(window.location.origin + `/${selectedOptions[0]}.html`)

  var oneBagButton = document.getElementById("oneBagButton");

  oneBagButton.addEventListener("click", function() {
    // Redirect to a different page when the button is clicked
    points = points + 150;
    window.location.href = "thankyoupg.html";
    
  });

  twoBagButton.addEventListener("click", function() {
    // Redirect to a different page when the button is clicked
    points = points + (150*2);
    window.location.href = "thankyoupg.html";

  });


  
});;
