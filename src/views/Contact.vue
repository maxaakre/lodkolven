<template>
<div class="contact">

  <h1>Kontakta styrelsen på mailen</h1>
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
        <dt>Suppleant:</dt>
        <dd>
          <h3>Gustaf Hassel</h3>
        </dd>
        <dt>Suppleant:</dt>
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
    text-align:left;
    overflow: scroll;
    padding: 1rem;
  }

dl {
  text-align: left;
  justify-content: space-between;
  padding: 1rem 0;
}
dt {
  padding: .3rem 0;
}

h1 {
  padding: 1rem 0; 
}
a{ 
    padding: 1rem 0; 
     
}
@media screen and (min-width: 1024px) {
  .contact{
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0 1rem;
  }
  h1 {
  
  text-align: left;
}
a{ 
    padding: 1rem 0;  
    margin: 0;
    font-size: 24px;
}
  .info {
    text-align: left;
    padding: 1rem 0;
  }
  .content {
    display: flex;
    flex-flow: column;
  }
  dl{
    text-align: left;
    padding: 0;
  }
  dt,h3{
    font-size: 24px;
  }
}
</style>