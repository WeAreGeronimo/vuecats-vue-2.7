<template>
  <section class="main" id="main">
    <div class="main-sort flex j-c-space-between">
      <div class="main-choose">Сортировать по:</div>
      <button
        class="main-chooseButton flex"
        id="priceSortButton"
        @click="sortCats('price')"
      >
        Цене<img class="main-arrow" id="priceSort" src="img/arrow.png" />
      </button>
      <button
        class="main-chooseButton flex"
        id="ageSortButton"
        @click="sortCats('age')"
      >
        Возрасту<img class="main-arrow" id="ageSort" src="img/arrow.png" />
      </button>
    </div>
    <div class="main-list flex" id="catList">
      <div
        v-for="cat in catsToShow(catsArrayFromBackend, quantity)"
        :key="cat.id"
        class="main-item"
        :id="`item_${cat.id}`"
      >
        <button
          class="main-like"
          @click="(cat.liked = !cat.liked), toggleFavorites(cat.id)"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 46 42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              width="100%"
              height="100%"
              class="main-heart"
              d="M33.7812 0.695312C31.2851 0.695312 28.9966 1.4863 26.9794 3.04634C25.0456 4.54197 23.758 6.44693 23
                            7.83214C22.242 6.44684 20.9544 4.54197 19.0206 3.04634C17.0034 1.4863 14.7149 0.695312
                            12.2188 0.695312C5.25298 0.695312 0 6.39293 0 13.9485C0 22.1112 6.55347 27.696 16.4746 36.1505C18.1593
                            37.5863 20.0689 39.2138 22.0538 40.9494C22.3154 41.1785 22.6514 41.3047 23 41.3047C23.3486
                            41.3047 23.6846 41.1785 23.9462 40.9495C25.9312 39.2136 27.8408 37.5862 29.5265
                            36.1496C39.4465 27.696 46 22.1112 46 13.9485C46 6.39293 40.747 0.695312 33.7812 0.695312Z"
              :fill="cat.liked ? 'red' : 'white'"
              :fill-opacity="cat.liked ? '0.8' : '0.5'"
              stroke="black"
              stroke-opacity="0.5"
            />
          </svg>
        </button>
        <div
          v-show="cat.discount"
          class="main-discount flex j-c-center a-i-center"
          style=""
        >
          {{ cat.discount }}
        </div>
        <img class="main-picture block" :src="cat.src" />
        <div class="main-infosWrapper">
          <div
            class="main-name"
            :style="{
              fontSize: cat.name.length > 24 ? '1rem' : '1.5rem',
              lineHeight: cat.name.length > 24 ? '1.2rem' : '1.875rem',
            }"
          >
            {{ cat.name }}
          </div>
          <div class="main-info flex j-c-space-evenly">
            <div class="main-color" title="">{{ cat.color }}</div>
            <div class="main-agesWrapper">
              <span class="main-age block">Возраст</span>
              <span class="main-yearsOld block">{{ cat.age }} мес.</span>
            </div>
            <div class="main-pawsWrapper">
              <div class="main-paws block">Кол-во лап</div>
              <div class="main-count block">{{ cat.paws }}</div>
            </div>
          </div>
          <div class="main-price">{{ cat.price }} руб.</div>
        </div>
        <button class="main-buy block" :disabled="cat.isSold">
          {{ cat.isSold ? "Продано" : "Купить" }}
        </button>
      </div>
    </div>
    <div class="main-bottomBar flex j-c-center">
      <button class="main-showMore" id="nextCats" @click="showNextCats(20)">
        Показать еще 20
      </button>
    </div>
    <button class="main-up" id="up" @click="upToTop()"></button>
  </section>
</template>

<script>
export default {
  name: "Main",
  props: {
    catsArrayFromBackend: Array,
    quantity: Number,
    toggleFavorites: Function,
    showNextCats: Function,
    sortCats: Function,
  },
  methods: {
    upToTop() {
      this.$emit("upToTop", window.pageYOffset);
    },

    catsToShow(array, quantity) {
      let filteredArray = array.filter(function (item, i) {
        return i < quantity;
      });
      console.log(array, quantity);
      return filteredArray;
    },
  },
};
</script>

<style lang="scss">
.main {
  margin: 2.375rem auto 0;
  width: 77.5rem;
  max-width: 1240px;
  font-family: "Montserrat", sans-serif;

  button:disabled {
    background: #1f2021;
    cursor: unset;

    &:before {
      background: transparent;
    }
  }

  &-sort {
    width: 28.25rem;
    margin: 0 0 0 1.75rem;
    position: relative;
  }

  &-choose {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }

  &-chooseButton {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    letter-spacing: 1px;
    position: relative;
  }

  &-arrow {
    display: block;
    width: 1rem;
    height: 1rem;
    margin: 0.25rem 0 0 0.25rem;
  }

  &-list {
    margin: 2.25em auto 0;
    flex-wrap: wrap;
    padding: 0 1.25rem;
  }

  &-item {
    width: 23.75rem;
    position: relative;
    margin: 0 0.625rem 1.375rem;
  }

  &-discount {
    position: absolute;
    width: 4.875rem;
    max-width: 78px;
    height: 2.5rem;
    max-height: 40px;
    font-size: 1rem;
    line-height: 1.25rem;
    background: #e52d2d;
    color: #ffffff;
    text-align: center;
    border-radius: 10px;
    top: 7%;
    left: 10%;
  }

  &-like {
    position: absolute;
    background: transparent;
    top: 6%;
    right: 7%;
    width: 3.75rem;
    height: 2.75rem;
    background-size: cover;
    border: none;
  }

  &-picture {
    width: 100%;
  }

  &-infosWrapper {
    background: #f3f3f3;
    padding: 1.875rem 1.875rem 1.75rem 1.875rem;
  }

  &-name {
    line-height: 1.875rem;
    font-weight: 700;
    min-height: 3.75rem;
  }

  &-agesWrapper,
  &-pawsWrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  &-agesWrapper,
  &-pawsWrapper,
  &-color {
    width: 25.4%;
  }

  &-yearsOld,
  &-count {
    line-height: 1.25rem;
    font-size: 1rem;
    font-weight: 700;
  }

  &-age,
  &-paws,
  &-color {
    line-height: 0.938rem;
    font-size: 0.75rem;
  }

  &-info {
    width: 21.5rem;
    margin: 1.375rem 0 0;
  }

  &-price {
    margin: 1.188rem 0 0 0;
    font-size: 1.5rem;
    line-height: 1.875rem;
    font-weight: 700;
  }

  &-buy {
    background: #6ebbd3;
    border: none;
    width: 100%;
    border-radius: 0 0 10px 10px;
    font-family: inherit;
    padding: 1.375rem 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.25rem;
    position: relative;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #0b5375;
      border-radius: 0 0 10px 10px;
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-duration: 0.5s;
      transition-duration: 0.5s;
      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;
    }
  }

  &-color {
    position: relative;

    &:before {
      content: "";
      position: absolute;
      height: 1.625rem;
      max-height: 26px;
      width: 0.25rem;
      max-width: 4px;
      background: #6ebbd3;
      left: -25%;
    }
  }

  &-showMore {
    width: 23.75rem;
    max-width: 380px;
    background: none;
    border: 1px solid #cacaca;
    border-radius: 10px;
    font-family: inherit;
    font-size: 0.875rem;
    line-height: 1.063rem;
    padding: 1.6rem 0;
    margin: 3rem 0 0 0;
    position: relative;
    -webkit-transition-property: color, border-color;
    transition-property: color, border-color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      background: #6ebbd3;
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
      -webkit-transition-property: transform, opacity;
      transition-property: transform, opacity;
      -webkit-transition-duration: 0.2s;
      transition-duration: 0.2s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }

    &:active {
      background: #2098d1;
      color: #ffffff;
    }
  }

  &-bottomBar {
    width: inherit;
    position: relative;
  }

  &-up {
    display: none;
    position: fixed;
    width: 3.75rem;
    height: 3.75rem;
    right: 5%;
    bottom: 5%;
    background: #6ebbd3;
    border: 2px solid #ffffff;
    z-index: 10;

    &:before {
      content: "❮";
      transform: rotate(90deg);
      position: absolute;
      top: 16%;
      left: 42%;
      font-size: 1.875rem;
      color: #ffffff;
    }
  }
}

.toBig {
  transform: rotate(180deg);
}

.toLow {
  transform: rotate(0deg);
}

.sortInUse {
  border-bottom: 2px solid black;
}

@-webkit-keyframes pulse {
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes pulse {
  50% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@-webkit-keyframes pulseUpArrow {
  50% {
    top: 10%;
  }
}

@keyframes pulseUpArrow {
  50% {
    top: 10%;
  }
}

@media screen and (min-width: 279px) and (max-width: 927px) and (orientation: portrait),
  (min-height: 279px) and (max-height: 541px) and (orientation: landscape) {
  .main {
    padding: 4rem 0 0;
    width: 95%;

    &-list {
      width: 100%;
      flex-wrap: wrap;
    }

    &-picture {
      border-radius: 10px 10px 0 0;
    }

    &-item {
      width: 100%;
      margin: 0 auto 1.375rem;
    }

    &-sort {
      margin: 0 0 0 1rem;
    }

    &-agesWrapper,
    &-color,
    &-pawsWrapper {
      width: 100%;
      margin: 0.4rem 0;
      text-align: center;
    }

    &-info {
      width: unset;
      flex-wrap: wrap;
      margin: unset;
    }

    &-age,
    &-color,
    &-paws {
      line-height: 1.2rem;
      font-size: 1rem;
      text-align: left;
    }

    &-color:before {
      left: -4%;
      top: -15%;
    }

    &-agesWrapper,
    &-pawsWrapper {
      display: flex;
      flex-direction: row;
    }

    &-age,
    &-paws {
      width: 40%;
    }

    &-bottomBar {
      width: 100%;
    }

    &-like {
      width: 4.75rem;
      height: 3.75rem;
    }
  }
}

@media screen and (min-width: 567px) and (max-width: 927px) and (orientation: landscape) {
  .main {
    padding: 0;

    &-item {
      width: 48%;
    }

    &-sort {
      width: 60%;
    }

    &-name {
      min-height: 5rem;
    }
  }
}

@media only screen and (width: 768px) and (height: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) {
  .main {
    padding: 0;

    &-sort {
      width: 60%;
    }

    &-item {
      width: 30%;
    }
  }
}

@media only screen and (min-width: 280px) and (max-width: 653px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) {
  #html {
    font-size: 12px;
  }

  .main {
    padding: 4rem 0 0;
    width: 100%;

    &-item {
      width: 100%;
    }

  }
}

@media (max-width: 767px) {
  .header {
    position: fixed;
    top: 0;
    z-index: 2;
  }
}

@media (min-width: 992px) {
  .main {
    &-heart {
      &:hover {
        fill-opacity: 1;
      }
    }

    &-like {
      &:hover {
        animation: pulse 0.5s infinite;
      }
    }

    &-buy {
      &:hover {
        &:before {
          -webkit-transform: scaleY(1);
          transform: scaleY(1);
          -webkit-transition-timing-function: cubic-bezier(
            0.52,
            1.64,
            0.37,
            0.66
          );
          transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        }
      }
    }

    &-up {
      &:hover {
        &:before {
          -webkit-animation-name: pulseUpArrow;
          animation-name: pulseUpArrow;
          -webkit-animation-duration: 0.5s;
          animation-duration: 0.5s;
          -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
      }
    }

    &-showMore {
      &:hover {
        color: #ffffff;
        border-color: transparent;

        &:before {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
    }
  }
}
</style>
