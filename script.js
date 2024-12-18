
function openModal(a) { //a is string for image source
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalimg").src=a;
    document.getElementById("modallink").href=a;
  }
  

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
}



