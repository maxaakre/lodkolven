<template>
  <div id="nav">
    <div class="content">
      <img class="avatar" src="../assets/balkony.png" alt="avatar" />
      <div class="person-content">
        <h1>Brf Lödkolven 2</h1>
        <h2>Luxgatan 5</h2>
      </div>

      <div class="links">
        <div class="left">
          
          <a href="mailto:brflodkolven2@gmail.com?Subject=Some%20subject">
            <i class="far fa-envelope"></i>
          </a>
        </div>

        <button class="hamburger right" @click="$store.dispatch('toggleMenu')">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
#nav {
  text-align: center;
  font-family: "Roboto", sans-serif;
  background: rgba(145, 13, 13, 0.8);
  color: #fff;
  .avatar {
    width: 150px;
    height: 165px;
    border-radius: 50%;
    margin: 2rem auto;
  }
  h1 {
    font-size: 24px bold;
    font-weight: 500;
  }
  h2 {
    font-weight: 400;
    font-size: 22px;
  }
  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 1rem;
  }
}
a,
button {
  border: none;
  background: none;
  font-weight: bold;
  color: rgb(49, 46, 46);
  font-size: 20px;
  &.router-link-exact-active {
    color: #000;
    // margin: 1rem;
  }

  i {
    margin: 0.3rem;
     &:hover{
      color: yellow;
  }
  }
}

@media screen and (min-width: 1024px) {
  #nav {
    height: 100vh;
    background: url("../assets/background.jpg") no-repeat center/cover;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: rgba(145, 13, 13, 0.8);
    }
    .content {
      position: relative;
    }
    h1 {
      font-size: 28px;
      padding: 0.4rem 0;
    }
    h2 {
      font-size: 16px;
    }
  }
  .hamburger {
    display: none;
  }
  .links {
    margin: 0 9rem;
    position: relative;
    a {
      color: #fff;
    }
  }
}
</style>
