<template>
<main>
    




<div v-if='!token'>

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


</div>


<div v-if='token'>

    <router-link class="linkstyle" to="/main">
        <h1>Till börssidan</h1>
    </router-link>


    <button v-on:click="logout()"><h1>Logga ut</h1></button>


</div>






<Footer :key="myVariable" />
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
        token: this.$session.get("token"),
        email: this.$session.get("email"),
        name: this.$session.get("name"),
        resultat: [],
    }
  },
  mounted() {
  },
  methods: {
      logout() {
          this.$session.destroy();
          this.token = this.$session.get("token"),
          this.email = this.$session.get("email"),
          this.name = this.$session.get("name")
          this.myVariable = "nytt värde"; //för att uppdatera footer
      }
  },
  created () {
          document.title = "Starsida - EkoEnergiBörsen";
  },
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
button {
    background-color: inherit;
    border: none;
    color:inherit;
}
button:hover {
    color: lightgrey;
}

</style>
