<template>
<div class="home">
  <h1>Hej och Välkommen till Brf lödkolven 2</h1>
  <h2>Här kan du hitta lite info om våran förening och skicka mail till oss!</h2>
  <ul>
      <li>Du kan hitta lite olika val som menyn till vänster!</li>
      <li>Du har även lite bra att veta under <router-link to="/Info">Info!</router-link></li>
      <li>Du kan även läsa inför försäljning och kontakt med mäklare under <router-link to="/Infomaklare">Info för mälare</router-link> där svarar vi på många frågor man brukar få inför försäljning!</li>
      <li>om du tänkt hyra ut din lägenhet i andrahand MÅSTE du läsa! <router-link to="/Uthyrning">Andrahandsuthyrning</router-link></li>
      <li>Vill du komma i kontakt med oss i styrelsen kan du trycka på mail Ikonen eller klicka <a href="mailto:brflodkolven2@gmail.com?Subject=Some%20subject">här!</a></li> 

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
  text-align: left;
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
        text-align: left;
    }
}
</style>