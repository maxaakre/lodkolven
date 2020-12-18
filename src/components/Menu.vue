<template>
  <div>
    <div class="menu" :class="{ toggle: isMenuOpen }">
      <router-link to="/" tabindex="0" @click.native="$store.dispatch('toggleMenu')">Start</router-link>
      <router-link to="/Info" @click.native="$store.dispatch('toggleMenu')">Info</router-link>
      <router-link to="/Uthyrning" @click.native="$store.dispatch('toggleMenu')">Andrahandsuthyrning</router-link>
      <router-link to="/Infomaklare" @click.native="$store.dispatch('toggleMenu')">Info för mäklare</router-link>
      <router-link to="/Contact" @click.native="$store.dispatch('toggleMenu')">Kontakt</router-link>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["isMenuOpen"]),
    ...mapActions(["toggleMenu"])
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: none;
  text-align: right;

  width: 100%;
  a {
    display: block;
    padding: 20px;
  }
  &.toggle {
    display: block;
  }
  :hover{
      color: #ff9900;
  }
}
@media screen and (min-width: 1024px) {
  .menu {
    display: block;
    background: none;
    position: relative;
  }
  a {
    color: #fff;
    font-size: 28px;
    &:active{
      color: #ff9900;
    }
  }
}  
</style>
