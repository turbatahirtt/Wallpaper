jQuery(function() {
  var background = null;
  var skylineMap = {
    "nature 1": "nature1",
    "nature 2": "nature2",
    "urban 1": "urban1",
    "urban 2": "urban2",
    "desert 1": "desert1",
    "desert 2": "desert2",
  }

  $('.dropdown-submenu a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  $('.item').on("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
  })

  $('.background').on("click", function(e) {
    let color = e.target.innerHTML;
    background = color;
    $(".main").css("background", "none")
    if (color === "Light"){
      $(".main").css("background-color", "#87CEEB")
    } else if (color === "Dark"){
      $(".main").css("background-color", "#152238")
    } else {
      $(".main").css("background-color", "white")
    }
  })

  $('.sun').on("click", function(e) {
    if (background === "Dark") {
      $(".main").css("background", "linear-gradient(to bottom, #071B26 30%, #8A3B12 80%)")
    } else {
      $(".main").css("background", "linear-gradient(to bottom, #87CEEB 30%, #e1c45e 80%)")
    }
  })

  $('.moon').on("click", function(e) {
    if (background === "Dark") {
      $(".main").css("background", "linear-gradient(to bottom, #071B26 60%, #FCF8E3 90%)")
    } else {
      $(".main").css("background", "linear-gradient(to bottom, #87CEEB 30%, #FCF8E3 80%)")
    }
  })

  $('.image').on("click", function(e) {
    let image = e.target.innerHTML.toLowerCase().replace(" ", "");
    $(".pattern").css("background-image", "url(" + image + ".png)");
    $(".pattern").css("background-repeat", "no-repeat");
    $(".pattern").css("background-attachment", "fixed");
    $(".pattern").css("background-size", "cover");
  })

  $('.skyline').on("click", function(e) {
    let image = e.target.innerHTML.toLowerCase();
    $(".skyline-container").css("background-image", "url(" + skylineMap[image] + ".png)");
    $(".skyline-container").css("background-repeat", "no-repeat");
    $(".skyline-container").css("background-attachment", "fixed");
    $(".skyline-container").css("background-size", "100% 100%");
  })

  $('.animals').on("click", function(e) {
    let image = e.target.innerHTML.toLowerCase();
    $(".animals-container").css("background-image", "url(" + image + ".png)");
    $(".animals-container").css("background-repeat", "no-repeat");
    $(".animals-container").css("background-attachment", "fixed");
    $(".animals-container").css("background-size", "100% 100%");
  })

})