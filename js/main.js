// javascript
const app = new Vue({
  el: "#wplms",
  data: {

    // img logo header
    img: "logo",

    // array oggetti icone e link header
    navbarList:{
      link:[
        "home",
        "courses",
        "pages",
        "app",
      ],
      iconNavbar: "fa-search",
    },
    account:{
      link: "login",
      icon:"fa-shopping-cart",
    },



  }



});
