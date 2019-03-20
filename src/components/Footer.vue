<template>
    <div class="fotnot">
        <div class="delwrap">
            <div class="del1">
                Projekt i kursen
                <a href="https://dbwebb.se/kurser/ramverk2-v2" class="footlink" >
                    Ramverk2
                </a>
                 vid
                 <a href="https://www.bth.se/" class="footlink" >
                     BTH
                 </a>
            </div>

            <div class="del2">
                (c) 2019 K.W.
            </div>

            <div class="del3">
                <div v-if='token'>
                    Inloggad som: {{name}}, {{email}}

                    <button v-on:click="logout()"><b>Logga ut</b></button>
                </div>

                <div v-if='!token'>
                    Inte inloggad
                </div>
            </div>

        </div>
    </div>



</template>

<script>
export default {
    name: 'Footer',
    props: {

    },
    data() {
        return {
            token: this.$session.get("token"),
            email: this.$session.get("email"),
            name: this.$session.get("name")
        }
    },
    methods: {
        logout() {
            this.$session.destroy();
            this.token = this.$session.get("token"),
            this.email = this.$session.get("email"),
            this.name = this.$session.get("name")
            this.$router.push('/')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.fotnot {
    position:absolute;
    left:0px;
    color: black;
    width: 100%;
}
.delwrap {
    width: 100%;
}

.del1 {
    display: inline-block;
    text-align: center;
    width: 33%;
}
.del2 {
    display: inline-block;
    text-align: center;
    position:relative;
    width: 33%;
}
.del3 {
    display: inline-block;
    text-align: center;
    position:relative;
    width: 33%;
}
button {
    font-size: 1em;
    border:none;
    background-color: inherit;
}
button:hover {
    color:grey;
}

.footlink {
    text-decoration: none;
    color:black;
}

.footlink:visited {
    text-decoration: none;
    color:black;
}

.footlink:hover {
    color:grey;
}

@media (max-width: 650px) {
    .del1 {
        display: block;
        margin: auto;
    }
    .del2 {
        padding-top:1em;
        padding-bottom:1em;
        display: block;
        margin: auto;
    }
    .del3 {
        display: block;
        margin: auto;
    }
    .fotnot {
        position: relative;
        margin-top:3em;
    }
}
</style>
