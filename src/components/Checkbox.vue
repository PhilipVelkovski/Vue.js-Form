<template>
<div>
  <input type="checkbox" 
    :checked="checked"
    :id="enterId"
    v-bind="$attrs"
    @click="$emit('clickbox',this.checked)" 
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
        type:[String],
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
