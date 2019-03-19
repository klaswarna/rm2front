<template>
<main>
    <div class="wrap">
    <h1>Skaffa konto</h1>


<p>
    Namn<br>
<input v-model="name" placeholder="skriv ditt namn">
</p>

<p>
    Epost<br>
<input v-model="email" placeholder="skriv din epost">
</p>

<p>
    Lösenord<br>
<input v-model="password" placeholder="välj ett lösenord" type="password">
</p>


<div id="signin">
  <button v-on:click="signin(email, name, password)">Skaffa konto</button>
</div>



</div>
<Footer/>
</main>
</template>


<script>
//import Vue from 'vue'

import Footer from './Footer.vue'

export default {
    name: 'Signin',
    components: {
        Footer,
    },

    data() {
        return {
            password: "",
            email: "",
            name: "",
            //password: window.password,
            //email: window.email,
            //name: window.name,
        }
    },
    created () {
            document.title = "Skaffa konto - EkoEnergiBörsen";
    },
    methods: {
        signin(email, name, password) {
            console.log("signin-försök");
            console.log(name);
            let that = this;
            that.text = "";
            //fetch("http://172.29.61.161:1337/signin",{
            fetch("https://rm2back.kwramverk.me/signin",{

                method: 'POST',
                headers: new Headers({
                    //'x-access-token': 'JWT_TOKEN',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                that.$session.set("email", data.email);
                that.$session.set("name", data.name);
                that.$session.set("token", data.token);
                that.$router.push('Main')
            }).catch(function() {
                that.$router.push('AlreadyExists');
            })
        },
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

.red {
    color: red;
}

.green {
    color: green;
}
.wrap {
    margin:auto;
    width: 40%;
    background-color: lightgrey;
    opacity: 0.8;
    border-radius: 15px;
    padding-bottom: 1em;
}
input {
    border-radius: 10px;
    border-style: none;
    height: 1.5em;
    width: 20em;
    padding-left: 0.5em;
}
button {
    border-radius: 10px;
    border-style: none;
    height: 1.5em;
    width: 10em;
    padding-left: 0.5em;
}
button:hover {
    background-color: white;
    border-style: solid;
    border-color: darkgrey;
}
.fotnot {
    text-align: left;
    bottom: 1em;
    left:0px;
    color: black;
}

@media (max-width:760px) {
    .wrap {
        width:95%;
    }
}


</style>
