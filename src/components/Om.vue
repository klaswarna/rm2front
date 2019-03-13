<template>
<div>
<div class="om">

<h2>Bli rik på grön energi</h2>

<div class="innerwrap">
<p>Allt fler börjar inse att den globala uppvärmningen är ett reellt faktum. Allt fler börjar inse att det också är bråttom att minska det fossila bränsleutsläppet.
Få vill emellertid avstå från sådant som är viktigare än våra barnbarnbarns fortlevnad; såsom att köra bil överallt, flyga hur mycket som helst,
 ha lamporna tända när vi är bortresta, använda klimatanläggningen i uterummet. Få vill riskera pengar i ny och oprövad teknik.</p>

<p>Du måste inte avstå från något. Du behöver inte riskera några pengar. Tvärtom: bli RIK på att investera i grön energi! EkoEnergiBörsen fungerar som
vilken börs som helst, men köper och säljer enbart aktier i bolag som satsar på gröna energikällor.</p>

<p>    Börsvärdet på våra bolag varierar naturligtvis i takt med att tillgången på respektive energikälla varierar med naturen.
    Solen skiner eller går i moln, vindarna varierar i styrka, forsarnas vattenflöden beror på nederbörd, årstider och så vidare. Ännu starkare
    än naturlagarna är marknadens lagar. Konjunkturen kan svänga likt en pendel hängande från Golden Gate under jordbävning så det gäller
att hänga med i vändorna. </p>

<p>    Tack vare denna tjänst kan du i realtid se hur värdet på de olika energibolagen varierar. Så satsa dina pengar rätt! Köp billigt, sälj dyrt! Bli rik på grön energi!</p>
</div>

<router-link class="linkstyle" to="/signin">
SKAFFA KONTO NU
</router-link>




</div>



<Footer />

</div>
</template>

<script>
import Footer from './Footer.vue'


export default {
    name: 'Om',
    props: {
        msg: String
    },
    components: {
        Footer
    }
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
    color: #AAA;
}
.linkstyle:hover {
    color: white;
}






</style>
