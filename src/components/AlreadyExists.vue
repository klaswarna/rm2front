<template>
<div>
<div class="om">

<h1>Användare med den eposten finns redan!</h1>


<router-link class="linkstyle" to="/signin">
Försök igen!
</router-link>




</div>



<Footer />

</div>
</template>

<script>
import Footer from './Footer.vue'


export default {
    name: 'AlreadyExists',
    props: {
        msg: String
    },
    components: {
        Footer
    },
    created () {
            document.title = "Användare finns redan - EkoEnergiBörsen";
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

h1 {
    color: white;
}
.om {
    margin:auto;
    width:60%;
    min-height: 70vh;
}
.innerwrap {
    text-align:left;
}
.fotnot {
    text-align: left;
    bottom: 1em;
    left:0px;
    color: black;
}
.linkstyle {
    text-decoration: none;
    color: black;
}
.linkstyle:hover {
    color: white;
}






</style>
