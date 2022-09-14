const app = Vue.createApp({
  data() {
    return {
      url: "url",
      showDetails: true,
      details: [
        {
          title: "data",
          author: "data",
          img: "assets/images/1.jpg",
          isFav: true,
        },
        {
          title: "data",
          author: "data",
          img: "assets/images/2.jpg",
          isFav: false,
        },
        {
          title: "data",
          author: "data",
          img: "assets/images/3.jpg",
          isFav: true,
        },
      ],
      title: "Vue",
      author: "Lee",
      age: 9,
      x: 0,
      y: 0,
    };
  },

  methods: {
    changeTitle(title) {
      //   this.title = "Title changed by changeTitle methods";
      this.title = title;
    },
    toggleShowDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleHideDetails() {
      this.showDetails = false;
    },
    handleEvent(event, data) {
      console.log(event, data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    handleFav(detail) {
      detail.isFav = !detail.isFav;
    },
    computed: {
      filteredDetails() {
        return  this.books.filter((detail) => {detail.isFav})
      }
    }
  },
  // template: "<h2>I am the template</h2>",
});

app.mount("#app");
