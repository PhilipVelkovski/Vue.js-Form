<template>
  <div class="container">
    <div class="header">
     <h1>{{title}}  <i class=" icon bi bi-question-circle">
      <div class="pop-up">
        {{explanation}}       
      </div>
      </i></h1>  
      
    
    </div>
    
  </div>    
</template>
<script>
export default {
    name:"Header",
    props:{
        title: {
          type:String,
          default : '',
        },
        explanation:{
          type:String,
          default:''
        }
    }
}
</script>
<style scoped>
  .bi:hover {
    color:red;
    cursor: pointer;
   
  }
  .bi:hover .pop-up{
    display: inline-block;
    color: rgb(95, 84, 84);
  }
   .icon{
    position: relative;
   }
 
  .pop-up{
    position: absolute;
     
    border: 1px solid;
    top: 0;
    width: 120px;
    font-size: 16px;
    display: none;
    padding: 10px;
    text-align:center;
    border-radius:20px ;
  }
</style>