<template>
  <div>
    <Header :catsArrayCount="catsArrayFromBackend.length" />
    <Main
      :catsArrayFromBackend="catsArrayFromBackend"
      :quantity="quantity"
      :toggleFavorites="toggleFavorites"
      :showNextCats="showNextCats"
      :sortCats="sortCats"
      @upToTop="scrollToTop"
    />
    <Footer />
    <FavoritesModal :modal="favoritesModalSettings" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import FavoritesModal from "@/components/FavoritesModal";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
    FavoritesModal,
  },
  data: () => ({
    quantity: 6,
    favoritesCats: [],
    timerHolderForClosingModal: null,
    timerHolderForScroll: null,
    timerHolderForScroll2: null,
    catsArrayFromBackend: [],
    scrolled: null,
    scrollSpeed: 0.94,
    sortingPriceCriteria: "toHighPrice",
    sortingAgeCriteria: "toHighAge",
    favoritesModalSettings: {
      isShow: false,
      message: "",
      counter: null,
    },
  }),
  created() {
    this.randomCats(359);
    window.addEventListener("scroll", function () {
      if (window.pageYOffset) {
        document.getElementById("up").style.display = "block";
      }

      if (!window.pageYOffset) {
        document.getElementById("up").style.display = "none";
      }
    });
  },

  methods: {
    getRandomNumber(min, max) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    },

    randomCats(count) {
      let id = 1;
      for (let i = 0; i < count; i++) {
        let name = null;
        let color = null;
        let age = this.getRandomNumber(1, 24);
        let price = this.getRandomNumber(500, 20000);
        let isSold = this.getRandomNumber(0, 1) ? true : false;
        let discount = this.getRandomNumber(0, 1)
          ? `-${this.getRandomNumber(1, 40)}%`
          : "";

        switch (this.getRandomNumber(1, 10)) {
          case 1:
            name = "Азиатская кошка";
            break;
          case 2:
            name = "Той-бобтейл";
            break;
          case 3:
            name = "Дракон Ли, Ли Хуа ( Ли Мао )";
            break;
          case 4:
            name = "Американская многопалая кошка";
            break;
          case 5:
            name = "Кольцехвостая кошка (Американский рингтейл)";
            break;
          case 6:
            name = "Кохона (Гавайская бесшерстная кошка)";
            break;
          case 7:
            name = "Той-бобтейл";
            break;
          case 8:
            name = "Эгейская кошка";
            break;
          case 9:
            name = "Рагамаффин";
            break;
          case 10:
            name =
              "Анатолийская короткошерстная кошка (Турецкая короткошерстная кошка)";
            break;
        }

        switch (this.getRandomNumber(1, 10)) {
          case 1:
            color = "Темный окрас";
            break;
          case 2:
            color = "Дымчатый окрас";
            break;
          case 3:
            color = "Полосатый хвост";
            break;
          case 4:
            color = "Кольцевой окрас";
            break;
          case 5:
            color = "Трехцветный окрас";
            break;
          case 6:
            color = "Белый окрас";
            break;
          case 7:
            color = "Многоцветный окрас";
            break;
          case 8:
            color = "Полосатый окрас";
            break;
          case 9:
            color = "Пятнистый окрас";
            break;
          case 10:
            color = "Однотонный окрас";
            break;
        }
        this.catsArrayFromBackend.push({
          id: id++,
          discount: discount,
          liked: false,
          src: `img/cat${this.getRandomNumber(1, 3)}.png`,
          name: name,
          color: color,
          age: age,
          paws: 4,
          price: price,
          isSold: isSold,
        });
      }
    },

    showNextCats(count) {
      this.quantity += count;
      if (this.catsArrayFromBackend.length <= this.quantity) {
        this.quantity = this.catsArrayFromBackend.length;
      }
    },

    toggleFavorites(idFromObject) {
      let isNeedDelete = true;
      if (!(this.favoritesCats.indexOf(idFromObject) > -1)) {
        this.favoritesCats.push(idFromObject);
        this.favoritesCats.sort(function (a, b) {
          return a - b;
        });
        isNeedDelete = false;
        console.log("pushed", this.favoritesCats);
        this.favoritesModalSettings.isShow = true;
        this.favoritesModalSettings.message =
          "Добавлено в избранное! В избранном:";
        this.favoritesModalSettings.counter = this.favoritesCats.length;
      }

      if (this.favoritesCats.indexOf(idFromObject) > -1 && isNeedDelete) {
        this.favoritesCats.splice(this.favoritesCats.indexOf(idFromObject), 1);
        this.favoritesCats.sort(function (a, b) {
          return a - b;
        });
        console.log("deleted", this.favoritesCats);
        this.favoritesModalSettings.isShow = true;
        this.favoritesModalSettings.message =
          "Удалено из избранного! В избранном:";
        this.favoritesModalSettings.counter = this.favoritesCats.length;
      }

      clearTimeout(this.timerHolderForClosingModal);
      this.timerHolderForClosingModal = setTimeout(() => {
        this.favoritesModalSettings.isShow = false;
      }, 2000);
    },

    scrollToTop(positionY) {
      if (positionY > 10) {
        window.scrollTo(0, positionY);
        positionY = positionY * this.scrollSpeed;
        this.timerHolderForScroll = setTimeout(
          () => this.scrollToTop(positionY),
          7
        );
      } else {
        clearTimeout(this.timerHolderForScroll);
        window.scrollTo(0, 0);
      }
    },

    sortCats(criteria) {
      if (criteria == "price") {
        switch (this.sortingPriceCriteria) {
          case "toHighPrice":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemA.price - itemB.price;
              });
              this.sortingPriceCriteria = "toLowPrice";
              document
                .getElementById("ageSortButton")
                .classList.remove("sortInUse");
              document.getElementById("priceSort").classList.remove("toLow");
              document.getElementById("priceSort").classList.add("toBig");
              document
                .getElementById("priceSortButton")
                .classList.add("sortInUse");
            }
            break;
          case "toLowPrice":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemB.price - itemA.price;
              });
              this.sortingPriceCriteria = "toHighPrice";
              document
                .getElementById("ageSortButton")
                .classList.remove("sortInUse");
              document.getElementById("priceSort").classList.remove("toBig");
              document.getElementById("priceSort").classList.add("toLow");
              document
                .getElementById("priceSortButton")
                .classList.add("sortInUse");
            }
            break;
        }
      }

      if (criteria == "age") {
        switch (this.sortingAgeCriteria) {
          case "toHighAge":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemA.age - itemB.age;
              });
              this.sortingAgeCriteria = "toLowAge";
              document
                .getElementById("priceSortButton")
                .classList.remove("sortInUse");
              document.getElementById("ageSort").classList.remove("toLow");
              document.getElementById("ageSort").classList.add("toBig");
              document
                .getElementById("ageSortButton")
                .classList.add("sortInUse");
            }
            break;
          case "toLowAge":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemB.age - itemA.age;
              });
              this.sortingAgeCriteria = "toHighAge";
              document
                .getElementById("priceSortButton")
                .classList.remove("sortInUse");
              document.getElementById("ageSort").classList.remove("toBig");
              document.getElementById("ageSort").classList.add("toLow");
              document
                .getElementById("ageSortButton")
                .classList.add("sortInUse");
            }
            break;
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

button {
  cursor: pointer;
}

@media screen and (min-width: 310px) {
  html {
    font-size: 12px;
  }
}

@media (min-width: 576px) {
  html {
    font-size: 14px;
  }
}

@media screen and (min-width: 568px) and (max-width: 927px) and (orientation: landscape) {
  #html {
    font-size: 13px;
  }
}

@media (min-width: 992px) {
  html {
    font-size: 12px;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 14px;
  }
}

@media (min-width: 1440px) {
  html {
    font-size: 16px;
  }
}

.flex {
  display: flex;
}

.margin-0-auto {
  margin: 0 auto;
}

.j-c-center {
  justify-content: center;
}

.j-c-space-between {
  justify-content: space-between;
}

.j-c-space-evenly {
  justify-content: space-evenly;
}

.j-c-space-around {
  justify-content: space-around;
}

.flex-d-column {
  flex-direction: column;
}

.text-a-center {
  text-align: center;
}

.a-i-center {
  align-items: center;
}

.block {
  display: block;
}

.a-i-flex-start {
  align-items: flex-start;
}
</style>
