window.onload = function() {
  // Get the target element
  let element = document.getElementById("level");  // ✅ fixed lowercase d

  let level = 0;

  // Traverse up through parent elements until reaching null
  while (element) {
    level++;
    element = element.parentElement;
  }

  // Show result
  alert("The level of the element is: " + level);
};
