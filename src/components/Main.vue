<template>
<div>
<title>Ballen</title>

<div class="storruta" v-if='!token'>
    <h1>Du måste vara inloggad för att nå denna sida!</h1>
    <router-link class="linkstyle" to="/login">
    Logga in
    </router-link>
</div>

<div v-if='token'>

<div class="om">

<h2>Välkommen {{ name }}</h2>

<div class="bolagslist">
    <div class="bolag" v-for="(item, index) in bolagslista">
        <p>{{item[0]}}</p>
        <img class="thumbnail" alt="bild" :src="item[1]">

        <div class="can-wrap">
            <canvas ref="diagram" class="diagram" :id="item[2]"  width="100" height="100">>
            </canvas>
        </div>
        <p>Aktiekurs: {{Math.round(aktievarde[index]*100)/100}} kr</p>

        <p>Aktieinnehav: {{capital.stock[index]}} st</p>
        <p><b>Värde: {{Math.round(capital.stock[index] * aktievarde[index]*100)/100}} kr</b></p>
        Köp/sälj<br>
        <input ref="input" placeholder="antal">
        <div class="button-row">
            <button v-on:click="buy(index+1, $refs.input[index].value)">Köp</button>
            <button v-on:click="buy(index+1, -$refs.input[index].value)">Sälj</button>
        </div>
    </div>
</div>



<div class="innerwrap">
    <div class="tillgang">
    <p> Likvida medel: {{Math.round(capital.capital*100)/100}} kr. <br>Aktieportfölj:
        {{Math.round(
            ( capital.stock[0]*aktievarde[0]
            + capital.stock[1]*aktievarde[1]
            + capital.stock[2]*aktievarde[2]
            + capital.stock[3]*aktievarde[3]
            + capital.stock[4]*aktievarde[4])
            * 100)/100}}
        kr</p>
    </div>

    <input class="nyttkapital" v-model="insattning" placeholder="Insättning (kr)">
    <br>
    <button class="nyttkapital-input" v-on:click="insertCash(insattning)">Sätt in nytt kapital</button>
</div>
</div>
</div>
<Footer />

</div>
</template>

<script>
import Footer from './Footer.vue'
import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

export default {
    name: 'Main',
    props: {
        msg: String,
    },
    data() {
        return {
            title: "otto",
            bolagslista: [
                ["Vindkraft", "wind.jpg", "bolag1"],
                ["Vattenkraft", "waterfall.jpg", "bolag2"],
                ["Solceller", "sun.jpg", "bolag3"],
                ["Geotermisk energi", "volcano.jpg", "bolag4"],
                ["Vågkraft", "wave.jpg", "bolag5"]
            ],
            token: this.$session.get("token"),
            email: this.$session.get("email"),
            name: this.$session.get("name"),
            insattning:"",
            borsvarde:"",
            capital: {
                capital:0,
                stock:[]
            },
            graf: [],
            aktievarde:[],
            websocket: null,
            url: "wss://rm2back.kwramverk.me",
            content: null,
            format: "json",
            protocol: "json",
            vm: {},
        }
    },
    created() {
        this.showCapital(this.$session.get("token"));
        for (var i = 0; i < 5; i++) {
            this.aktievarde[i] = window.company[i][5];
        }
        document.title = "Aktiekurser - EkoEnergiBörsen";

    },
    updated() {
        for (var i = 0; i < 5; i++) {
            this.diagram(window.company[i], this.graf[i]);
        }
    },
    beforeUpdate() {
        for (var i = 0; i < 5; i++) {
            this.aktievarde[i] = window.company[i][5];
        }
    },
    beforeDestroy() {
        if (this.token) {
            this.disconnecta();
        }
    },
    methods: {
        showCapital: function (token) {
            let that = this;

            fetch("https://rm2back.kwramverk.me/capital", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    token: token
                })
            }).then(function(response) {
                return response.json();
            })
            .then(function(result) {
                that.capital = result
            });
        },
        buy: function(bolag, antal) {
            var avrundat = Math.floor(antal);
            if (avrundat*this.aktievarde[bolag-1]>this.capital.capital) {
                alert("Du saknar likviditeter för detta köp!");
                return
            }
            if ((antal + this.capital.stock[bolag-1]) < 0) {
                alert("Du kan inte sälja fler aktiver än du innehar!");
                return
            }
            let that = this;

            fetch("https://rm2back.kwramverk.me/capital/buy", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    token: that.token,
                    bolag: bolag,
                    antal: avrundat
                })
            }).then(
                this.insertCash(-avrundat*this.aktievarde[bolag-1])
            ).then(
                this.showCapital(that.token)
            ).then(function() { // suddar ut inatade värdet ur inputfälten
                that.$refs.input.forEach(function(elm) {
                    elm.value="";
                });
            })
        },
        insertCash: function(cash) {
            let that = this;

            fetch("https://rm2back.kwramverk.me/capital/insert", {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    token: that.token,
                    cash: cash,
                })
            }).then(
                this.showCapital(that.token)
            ).then(function() {
                that.insattning = "";
            })
        },
        diagram: function(rates, objekt) {
            function logfixa(a) {
                return Math.log2(a/100)*(-25) + 50;
            }
            var ctx = objekt.getContext("2d");

            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.clearRect(0,0, 100, 100);
            ctx.strokeStyle = "#00AA00";

            ctx.moveTo(0, logfixa(rates[0]))
            ctx.stroke();
            for(var i=1; i < 6; i ++) {
                ctx.lineTo(20*i, logfixa(rates[i]));
                ctx.stroke();
            }
            ctx.lineTo(100,100);
            ctx.stroke();
            ctx.lineTo(0,100);
            ctx.stroke();
            ctx.lineTo(0, logfixa(rates[0]));
            ctx.stroke();
            ctx.fillStyle = "#AAFFAA";
            ctx.fill();
        },
        updateRate: function (newValue) {
            for (var i = 0; i<5; i++) {
                window.company[i].shift();
                window.company[i].push(newValue[i]);
            }
            this.$forceUpdate();
        },
        connect() {
            Vue.use(VueNativeSock, this.url, {
                format: this.format,

            });
            //eslint-disable-next-line
            console.log("Connecting to: " + this.url);
            this.vm = new Vue();

            //eslint-disable-next-line
            console.log("the websocket is now open.");

            this.vm.$options.sockets.onmessage = (data) => {
                var jdatan = JSON.parse(data.data);
                this.updateRate(jdatan.aktier);
            }
        },
        disconnecta() {
            delete this.vm.$options.sockets.onmessage;
        }
    },
    mounted() {
        if(this.token) {
            for (var i = 0; i < 5; i++) {
                this.graf[i] = this.$refs.diagram[i];
                this.diagram(window.company[i], this.graf[i]);
                this.aktievarde[i] = window.company[i][5];
            }
            this.connect();
        }
    },
    components: {
        Footer
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

.om {
    min-height: 70vh;
}
.innerwrap {
    margin:auto;
    width:60%;
    text-align:left;
}
.fotnot {
    position: relative;
    text-align: left;
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

.bolagslist {
    width:100%;
    opacity: 0.9;
    background-color: lightgrey;
}

.bolag {
    display: inline-block;
    width: 18%;
    margin: 10px;
    border-radius: 10px;
    background-color: white;
}
input {
    border-radius: 10px;
    border-style: none;
    height: 1.5em;
    border: solid 1px;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 2px;
}
button {
    background-color: #BBB;
    display: inline;
    width: 32%;
    border-radius: 10px;
    border: solid 1px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 1.5em;
}

button:hover {
    background-color: white;
}
.tillgang {
    color:white;
    font-size: 1.5em;
}
.nyttkapital {
    height: 2em;
    width: 15em;
    padding:0;
}
.nyttkapital:hover  {
    background-color: white;
}


.nyttkapital-input {
    height: 2em;
    width: 15em;
    padding:0;
}

.thumbnail {
    position:relative;
    width: 110px;
    height: 66px;
    z-index: 10;
}

.can-wrap {
    margin: auto;
    height: 110px;
    width: 110px;
    border: solid 1px;
}

.diagram {
  margin-left: 1px;
  margin-top: 4px;
  border: solid 1px black;
}
.storruta {
    min-height: 70vh;
    color: white;
}
@media (max-width: 1024px) {
    .bolag {
        display:block;
        width: 90%;
        margin: auto;
    }
}

</style>
