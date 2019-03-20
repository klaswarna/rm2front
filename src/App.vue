<template>
  <div id="app">

    <img alt="Startbild" src="../public/wind-power.jpg">
    <router-link class="linkstyle" to="/">
    <p class="banderolltext"> EkoEnergiBörsen</p>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
img {
    position: fixed; /*betyder att den att fixerad relativt browser-fönstret*/
    z-index:-50;
    top:0;
    left:0;
    width:100%
}

.banderolltext {
    margin-top:0;
    font-size: 10em;
    margin-bottom: 0;
}

.linkstyle {
    text-decoration: none;
    color: inherit;
}

@media (max-width: 1200px) {
    .banderolltext {
        font-size: 2em;
    }
}

@media (max-height: 960px) {
    img {
        height:100%;
    }
}

</style>
