<template>
<div class="contact">

  <h1>Kontakt oss på styrelse mailen</h1>
   <a href="mailto:brflodkolven2@gmail.com?Subject=Some%20subject">
            <i class="far fa-envelope">brflodkolven2@gmail.com</i>
   </a>
   <h2>Medlemmar i styrelsen:</h2>
  <div class="content">
      <dl class="info dl-vertical dl">
        <dt>Ordförande:</dt>
        <dd>
        <h3>Annika Wrètsen</h3>
        </dd>
        <dd></dd>
        <dt>Sekreterare:</dt>
        <dd>
          <h3>Max Aakre</h3>
        </dd>
        <dt>Kassör:</dt>
        <dd>
          <h3>Gunnar Stenberg</h3>
        </dd>
        <dt>Suppleant</dt>
        <dd>
          <h3>Gustaf Hassel</h3>
        </dd>
        <dt>Suppleant</dt>
        <dd>
         <h3>Emma Nilsson</h3>
        </dd>
      </dl>
    </div>
          
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact{
    display: flex;
    flex-direction: column;
    text-align:center;
    overflow: scroll;
  }

dl {
  text-align: center;
  justify-content: space-between;
  padding: 1rem;
}
dt {
  padding: 1rem 0;
}

h1 {
  padding: 1rem;
  margin: 0 auto;
}
a{ 
    padding: 1rem;  
    margin: auto;
}
ul{
    width: 100%;
    text-align: center;
    margin-left:38% ;
    list-style: none;
}
@media screen and (min-width: 1024px) {
  .contact{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 1rem;
  }
  h1 {
  
  margin: 0 ;
}
a{ 
    padding: 1rem 0;  
    margin: 0;
}
  .info {
    text-align: left;
    padding: 1rem;
  }
  .content {
    display: flex;
    flex-flow: column;
  }
  // h1 {
  //   font-size: 24px;
  // }
}
</style>