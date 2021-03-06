// javascript
const app = new Vue({
  el: "#wplms",
  data: {

    // img logo header
    logo:{
      folder:"./img/",
      name: "logo",
      type: ".png",
    },

    // icona ricerca navbar
    search: "fa-search",

    // array oggetti icone e links header
    links:[
      "home",
      "courses",
      "pages",
      "app",
    ],

    // array links login
    linksLogin:[
      "setting",
      "profile",
      "diary",
    ],

    // riferimento per aggiunta links login
    login: true,

    account:{
      link: "login",
      icon:"fa-shopping-cart",
      output:"logout"
    },

    // raccolta foto header
    collection: "fa-images",

    // galleria immagini header
    gallery:[
      "./img/1-1.jpg",
      "./img/course5.png",
      "./img/course8.png",
    ],

    // riferimento per galleria immagini header
    indexGallery: 0,

    // riferimento per visione galleria
    show: false,

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

    // sezione Courses
    // array di oggetti immagini e testi
    courses:[
        {
          img: {
            folder:"./img/",
            name: "course4",
            size: "-310x186",
            type: ".png",
          },
          title: "Software training reloaded",
          sections: {
            secOne: "information tech",
            secTwo: "machine learning",
            secThree: "technology",
          },
        },
        {
          img: {
            folder:"./img/",
            name: "course3",
            size: "-310x186",
            type: ".png",
          },
          title: "Data mining",
          sections: {
            secOne: "",
            secTwo: "data",
            secThree: "",
          },
        },
        {
          img: {
            folder:"./img/",
            name: "course2-1",
            size: "-310x186",
            type: ".png",
          },
          title: "Design Dynamics",
          sections: {
            secOne: "",
            secTwo: "design",
            secThree: "information tech",
          },
        },
        {
          img: {
            folder:"./img/",
            name: "course6",
            size: "-310x186",
            type: ".png",
          },
          title: "Understanding Color Psychology",
          sections: {
            secOne: "",
            secTwo: "design",
            secThree: "",
          },
        },
        {
          img: {
            folder:"./img/",
            name: "course7",
            size: "-310x186",
            type: ".png",
          },
          title: "Impact of a Minimalist Design",
          sections: {
            secOne: "",
            secTwo: "design",
            secThree: "",
          },
        },
        {
          img: {
            folder:"./img/",
            name: "course1",
            size: "-310x186",
            type: ".png",
          },
          title: "Machine Learning Tools",
          sections: {
            secOne: "",
            secTwo: "intelligence",
            secThree: "technology",
          },
        },
    ],

    // sezione brands
    // array oggetti immagine brands
    brands:[
      {
        folder:"./img/",
        name: "logo2",
        size: "-120x47",
        type: ".png",
      },
      {
        folder:"./img/",
        name: "logo5",
        size: "-120x47",
        type: ".png",
      },
      {
        folder:"./img/",
        name: "logo4",
        size: "-120x29",
        type: ".png",
      },
      {
        folder:"./img/",
        name: "logo3",
        size: "-120x57",
        type: ".png",
      },
    ],

    // sezione customers
    // array di oggetti per info customers
    information:[
      {
        title: "A must for trainers",
        text: "There are many variatons of passages of Lorem Ipsum available, but the majority have suffered...",
        img: {
          folder:"./img/",
          avatar: "instructor3",
          size: "-100x100",
          type: ".jpg",
        },
        name: "JP Mcgraw",
        section: "ABC Inc.",
      },
      {
        title: "Great platform for low cost courses",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
        img: {
          folder:"./img/",
          avatar: "instructor1",
          size: "-100x100",
          type: ".jpg",
        },
        name: "Martha Penn",
        section: "ABC Inc.",
      },
      {
        title: "Quality hands on training tool",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered...",
        img: {
          folder:"./img/",
          avatar: "instructor2",
          size: "-100x100",
          type: ".jpg",
        },
        name: "Mikhail",
        section: "CEO, FinTech",
      },
    ],

    // footer
    // oggetto arrays lista di link
    linksAbout:[
      "About Company",
      "Register",
      "Activate",
      "All Courses",
      "Groups Directory",
      "Members Directory",
      "Education & LMS",
      "Custom Features",
      "Support",
    ],
    linksCourses:[
      "Top Courses",
      "Design Dynamics",
      "Internet of Things Security",
      "Deep Virtual Reality",
      "Artificial Intelligence",
      "Machine Learning Tools",
      "Brands",
      "Gallery",
      "Design Dynamics",
    ],
    linksCategories:[
      "Popular Categories",
      "Register",
      "Activate",
      "All Courses",
      "Groups Directory",
      "Members Directory",
      "App",
      "Platform",
      "Trainers",
    ],

    // icon footer
    top: "fa-angle-double-up",
  },
  methods:{

    // aggiunta link al login
    add(){
      return this.links.concat(this.linksLogin);
    },

    // change image right in gallery header
    nextImg(){
      this.indexGallery += 1;

      if (this.indexGallery > this.gallery.length - 1) {
         this.indexGallery = 0;
      }
    },

    // change image left in gallery header
    prevImg(){
      this.indexGallery -= 1;

      if (this.indexGallery < 0) {
         this.indexGallery = this.gallery.length - 1;
      }
    },

  }

});
