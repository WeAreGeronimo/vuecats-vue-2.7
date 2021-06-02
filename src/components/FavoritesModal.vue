<template>
  <div
    v-show="modal.isShow"
    class="favorites-modal j-c-center a-i-center"
    id="favorites-modal"
  >
    {{ modal.message + " " + modal.counter }}
  </div>
</template>

<script>
export default {
  name: "FavoritesModal",
  props: {
    modal: Object
  }
};
</script>

<style lang="scss">
.favorites-modal {
  font-family: "Montserrat", sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 25rem;
  background: #395f34;
  margin: 0 0 1.25rem 1.25rem;
  border: 2px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 1.25rem 1.25em;
  z-index: 10;
}
</style>
