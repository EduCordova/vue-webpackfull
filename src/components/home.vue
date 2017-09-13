<template>
  <div class="app1">

   <div class="parallax" :style="uri" >
    <h1 id="header" >{{title1}}</h1>
    <h5 id="header2" >{{title2}}</h5>
  </div>
    
</div>

</template>

<script>
 

  export default {

    mounted(){
    
     
    },

    data(){
      return{
        title1:"PET SHELTER",
        title2:"TRUJILLO",

      }
      
    },
    computed:{
      uri(){
               var imag="https://images5.alphacoders.com/374/thumb-1920-374329.jpg";
               var ids = `background-image:url("${imag}")`
               return ids;
      }
    }
  }


</script>




<style scoped>

 .app1{
   margin:-16px;

 }
.parallax{
    
    min-height: 570px; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0px ;
  
    position:relative;

}
h1{
  font-size:4em;
}
#header{
 position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
    width: 100%;
    padding: 0px 20px;
    margin: 0 auto;
    vertical-align:middle;
    text-align:center;
    color: white;
}
#header2{
 position: absolute;
  top: 60%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
    width: 100%;
    padding: 0px 20px;
    margin: 0 auto;
    vertical-align:middle;
    text-align:center;
    color: white;
}


   @media only screen and (max-device-width: 1024px) {
    .parallax {
        background-attachment: scroll;
        min-height: 200px;
    }
    .app1{
   margin:-24px;

 }
      h1{
        font-size: 2em;
    }
    }


    @media (max-width:600px) {
    .parallax {
        background-attachment: scroll;
        min-height: 200px;
    }
    .app1{
   margin:-24px;

 }
      h1{
        font-size: 2em;
    }
    }

</style>
