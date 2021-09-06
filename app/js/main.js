window.onscroll = function showHeader() {
  var header = document.querySelector(".header");
  if (window.pageYOffset > 0) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
};

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const list = document.querySelector(".sort-menu__menu"),
  items = document.querySelectorAll(".blocks__item"),
  listItems = document.querySelectorAll(".sort-menu__item");

function filter() {
  list.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;
    const target = event.target;

    listItems.forEach((listItem) =>
      listItem.classList.remove("sort-menu__item--active")
    );
    target.classList.add("sort-menu__item--active");

    switch (targetId) {
      case "all":
        getItems("blocks__item");
        break;
      case "branding":
        getItems(targetId);
        break;
      case "photography":
        getItems(targetId);
        break;
      case "design":
        getItems(targetId);
        break;
      case "mobile":
        getItems(targetId);
        break;
    }
  });
}

filter();

function getItems(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

jQuery(document).ready(function () {
  $(".phone").mask("+380 (99) 999-99-99");

  jQuery(".mail__sand").click(function () {
    var form = jQuery(this).closest("form");

    if (form.valid()) {
      form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          form.css("opacity", "1");
          form.find(".status").html("sucsessful");
          //$('#myModal').modal('show') // для бутстрапа
        },
        error: function () {
          form.find(".status").html("error");
        },
      });
    }
  });
});
