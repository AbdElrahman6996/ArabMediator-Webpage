function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "reponsive-nav") {
    x.className += " responsive";
  } else {
    x.className = "reponsive-nav";
  }
}

function secondmyFunction() {
  var x = document.getElementById("txt-section");
  if (x.className === "hero-section") {
    x.className += " hide";
  } else {
    x.className = "hero-section";
  }
}
