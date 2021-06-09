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
    sortingPriceCriteria: "TO_HIGH_PRICE",
    sortingAgeCriteria: "TO_HIGH_AGE",
    favoritesModalSettings: {
      isShow: false,
      message: "",
      counter: null,
    },
    classSettings: {
      TO_HIGH_PRICE: function () {
        document.getElementById('ageSortButton').classList.remove('sortInUse');
        document.getElementById('priceSort').classList.remove('toLow');
        document.getElementById('priceSort').classList.add('toBig');
        document.getElementById('priceSortButton').classList.add('sortInUse');
      },
      TO_LOW_PRICE: function () {
        document.getElementById('ageSortButton').classList.remove('sortInUse');
        document.getElementById('priceSort').classList.remove('toBig');
        document.getElementById('priceSort').classList.add('toLow');
        document.getElementById('priceSortButton').classList.add('sortInUse');
      },
      TO_HIGH_AGE: function () {
        document.getElementById('priceSortButton').classList.remove('sortInUse');
        document.getElementById('ageSort').classList.remove('toLow');
        document.getElementById('ageSort').classList.add('toBig');
        document.getElementById('ageSortButton').classList.add('sortInUse');
      },
      TO_LOW_AGE: function () {
        document.getElementById('priceSortButton').classList.remove('sortInUse');
        document.getElementById('ageSort').classList.remove('toBig');
        document.getElementById('ageSort').classList.add('toLow');
        document.getElementById('ageSortButton').classList.add('sortInUse');
      },
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
      const catsBreeds = {
        1: "Азиатская кошка",
        2: "Той-бобтейл",
        3: "Дракон Ли, Ли Хуа ( Ли Мао )",
        4: "Американская многопалая кошка",
        5: "Кольцехвостая кошка (Американский рингтейл)",
        6: "Кохона (Гавайская бесшерстная кошка)",
        7: "Персидская кошка",
        8: "Эгейская кошка",
        9: "Рагамаффин",
        10: "Анатолийская короткошерстная кошка (Турецкая короткошерстная кошка)",
      };
      const catsColors = {
        1: "Темный окрас",
        2: "Дымчатый окрас",
        3: "Полосатый хвост",
        4: "Кольцевой окрас",
        5: "Трехцветный окрас",
        6: "Белый окрас",
        7: "Многоцветный окрас",
        8: "Полосатый окрас",
        9: "Пятнистый окрас",
        10: "Однотонный окрас",
      };

      for (let i = 0; i < count; i++) {
        this.catsArrayFromBackend.push({
          id: id++,
          discount: this.getRandomNumber(0, 1) ? `-${this.getRandomNumber(1, 40)}%` : '',
          liked: false,
          src: `img/cat${this.getRandomNumber(1, 3)}.png`,
          name: catsBreeds[this.getRandomNumber(1, 10)],
          color: catsColors[this.getRandomNumber(1, 10)],
          age: this.getRandomNumber(1, 24),
          paws: 4,
          price: this.getRandomNumber(500, 20000),
          isSold: this.getRandomNumber(0, 1) ? true : false,
        });
      }
    },

    isInclude(array, catsId) {
      return array.indexOf(catsId) > -1;
    },
    
    showNextCats(count) {
      this.quantity += count;
      if (this.catsArrayFromBackend.length <= this.quantity) {
        this.quantity = this.catsArrayFromBackend.length;
      }
    },

    toggleFavorites(catsId) {
      let isNeedDelete = true;
      if (!this.isInclude(this.favoritesCats, catsId)) {
        this.favoritesCats.push(catsId);
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

      if (this.isInclude(this.favoritesCats, catsId) && isNeedDelete) {
        this.favoritesCats.splice(this.favoritesCats.indexOf(catsId), 1);
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
          case "TO_HIGH_PRICE":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemA.price - itemB.price;
              });
              this.classSettings[this.sortingPriceCriteria]();
              this.sortingPriceCriteria = "TO_LOW_PRICE";
            }
            break;
          case "TO_LOW_PRICE":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemB.price - itemA.price;
              });
              this.classSettings[this.sortingPriceCriteria]();
              this.sortingPriceCriteria = "TO_HIGH_PRICE";
            }
            break;
        }
      }

      if (criteria == "age") {
        switch (this.sortingAgeCriteria) {
          case "TO_HIGH_AGE":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemA.age - itemB.age;
              });
              this.classSettings[this.sortingAgeCriteria]();
              this.sortingAgeCriteria = "TO_LOW_AGE";
            }
            break;
          case "TO_LOW_AGE":
            {
              this.catsArrayFromBackend.sort(function (itemA, itemB) {
                return itemB.age - itemA.age;
              });
              this.classSettings[this.sortingAgeCriteria]();
              this.sortingAgeCriteria = "TO_HIGH_AGE";
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
