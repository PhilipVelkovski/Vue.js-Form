<template>
  <h1>Choose Type of Injury</h1>
  <form>
    <div>
      <span><input type="checkbox" name="urgent" />
      <label for="urgrent"> Urgent </label>
      </span>
      <span>
      <input type="checkbox" name="checkup" />
      <label for="checkup"> Checkup </label>
      </span>
    </div>
  </form>
</template>

<script>
export default {
  name: "PatientCause",
};
</script>
<style scoped>
input[type="checkbox"] {
  display: inline-block;
  width: 20px;
  height: 20px;
}
div {
  display: flex;
  justify-content: space-around;
  align-content: space-between;
}
label{
    margin: 0%;
}
span{
    
    align-items: baseline;
    display: flex;
    justify-content: center;
}
</style>