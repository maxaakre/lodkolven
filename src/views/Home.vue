<template>
<div class="home">
  <h1>Hej och Välkommen till Brf lödkolven 2</h1>
  <h2>Här kan du hitta lite info om våran förening och skicka mail till oss!</h2>
  <ul>
      <li>Du kan hitta lite olika val som menyn och här nedan</li>
      <li><router-link to="/stadgar">Stadgar</router-link></li>
      <li><router-link to="/info">Info</router-link></li>
      <li><router-link to="/contact">Kontakt</router-link></li>
  </ul>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  h1{
      padding: 1rem 0;
  }
  p{
      padding: 1rem 0;
  }
  ul{
      list-style: none;
      padding: 1rem 0;
  }
  li{
      margin: 1rem auto;
  }
  a{
    text-decoration: none;
    &:hover{
        border-bottom:1px solid black;
    }  
  }
}
@media screen and (min-width: 1024px){
    .home{
        overflow: scroll;
    }
}
</style>