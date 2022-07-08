<template>
 <form>
   <div>
    <label >Name: </label>
    <input type="fname" required> <br>
    <label >Surname: </label>
    <input type="lname"> <br>
    <label>Age: </label>
    <input type="age">
    <label >Email: </label>
    <input type="email"> <br>
    <label >Phone: </label>
    <input type="phone">
    

    
   </div>
 </form>


</template>

<script> 
export default{
    name:'Patientform',
    data() {
        
        return {
            fname:'',
            lname:'',
            email: '',
            phone:'',
        }
    },
}


</script>


<style>
form{
     max-width: 800px;
    border-radius: 10px;
    margin: 30px auto;
    background: #ffffffbf;
    padding: 39px;
    
    text-align: center;
}
label{
    font-weight:bold;
    letter-spacing:1px;
    display:inline-block;
    color:rgb(107, 107, 107);
    font-size: 1.2em;
    text-transform:uppercase;
    margin:25px 0 15px;
     text-align: center;
}
input{
    display:block;
    padding: 10px 6px;
    margin:auto;
    width:80%;
    box-sizing:border-box;
    color:#555;
    text-align: center;
}

</style>