// javascript
const app = new Vue({
  el: "#wplms",
  data: {

    // img logo header
    img: "logo",

    // icona ricerca navbar
    search: "fa-search",

    // array oggetti icone e link header
    links:[
      "home",
      "courses",
      "pages",
      "app",
    ],
    account:{
      link: "login",
      icon:"fa-shopping-cart",
    },

    // raccolta foto header
    collection: "fa-images",

    // main
    // array oggetti sezione free app
    settingsApp:[
      {
        icon: 'fa-address-card',
        title: 'Administrator App',
        text: 'Manage the entire site,the students, the istructor and the store.',
      },
      {
        icon: 'fa-film',
        title: 'Instructor App',
        text: 'Create courses, manage students, import questions and get reports',
      },
      {
        icon: 'fa-tv',
        title: 'Student App',
        text: 'Easy access to enrolled courses. Pursue courses, join meetings in TV',
      },
      {
        icon: 'fa-server',
        title: 'Custom Features',
        text: 'All Wplms modules in the App. Conferencing, Calendars.',
      },

    ],

    // icon btn
    iconBtn: "fa-angle-right",

    // sezione device
    // array oggetti immagini
    deviceImgs:[
      {
        folder:"./img/",
        name: "pursue",
        type: ".png",
      },
      {
        folder:"./img/",
        name: "coruse_coure",
        type: ".png",
      },
    ],


  }



});
