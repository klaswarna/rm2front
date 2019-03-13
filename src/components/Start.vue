<template>
<main>
    <!--Header /-->

<router-link class="linkstyle" to="/om">
    <h1>Om</h1>
Gör ett medvetet val. Bli rik på att investera i grön energi!
</router-link>

<router-link class="linkstyle" to="/signin">
    <h1>Skaffa konto</h1>
Skaffa konto nu, bli rik om tio minuter!
</router-link>

<router-link class="linkstyle" to="/login">
    <h1>Logga in</h1>
Om du redan har ett eget konto.
</router-link>


<Footer />
</main>
</template>

<script>


import Footer from './Footer.vue';

export default {
  name: 'Start',
  props: {  },
  components: {
      Footer
  },
  data() {
    return {
      resultat: [],
    }
  },
  mounted() {
  },
  methods: {
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: red;
}
.paragraph {
    margin:auto;
    width: 50%;
    text-align: left;
}
.linkstyle {
    text-decoration: none;
    color: inherit;
}
.linkstyle:hover {
    color: lightgrey;
}

.fotnot {
    text-align: left;
    bottom: 1em;
    left:0px;
    color: black;
}
</style>
