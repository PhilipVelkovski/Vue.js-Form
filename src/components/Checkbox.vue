<template>
<div>

  <input type="checkbox" 
   
    :checked="checked"
    :id="enterId" 
    @input="(event) => $emit('update:checked', event.target.checked)"
   />
    <label :for="enterId">{{ label }}</label>
</div>
  
</template>

<script>
export default {
  props: {
    label: {
        type:String,
        default:"",
    },
    enterId:{
        type:String,
        default:"",
    },
    checked:{
        type:Boolean,
    }

 

  },
};
</script>

<style  scoped>
input[type="checkbox"] {
  display: inline-block;
    height: 15px;
    width: 50px;
    align-items: baseline;
}
div{
    display: inline-block;
}
</style>
