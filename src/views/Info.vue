<template>
<div class="wrapper">
    <h1>Info!</h1>
    <p><b>Information om Stadgar hittar du under fliken info till mäklare.</b></p>
    <p>Om du ska hyra ut din lägenhet kolla under fliken andrahandsthyrning innan du funderar på det!</p>
    <router-link to="/Uthyrning">Andrahandsuthyrning</router-link>
    <p><a href="mailto:brflodkolven2@gmail.com?Subject=Some%20subject">Maila</a> om ni tycker det saknas något eller har förslag!</p>
    <h2>Om olycka inträffat med din lägenhet</h2>
    <p>kontakta alltid styrelsen och 112 om det behövs</p>
    <h2>Om hiss stannat</h2>
    <p>kontakta Hissen AB i vårat granhus om du fastnat i hissen och styrelsen om det bara är ett litet problem</p>
    <a href="tel:08-6184848">08-618 48 48</a>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    padding:1rem ;
    text-align: left;
      h1{
      padding: 1rem 0;
  }
    p{   
        padding: 1rem 0;
    }
    a{
        padding: 0;
    }
}
@media screen and (min-width: 1024px){
    .wrapper{
        text-align: left;
        h1{
            padding: 1rem 0 4rem;
        }
        p{   
            padding: 1rem 0;
        }
    }
}
</style>