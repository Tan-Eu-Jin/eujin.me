<template>
    <v-app class="fill-height">
        <div class="page centered">
            <div class="text-h1 font-weight-black">Tan Eu Jin</div>
            <div id="typewriter" class="text-subtitle-1"></div>
        </div>
    </v-app>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
    head() {
        // Set Meta Tags for this Page
    },
    mounted() {
        let typewriterElement = document.getElementById("typewriter");

        // string assignment
        let strings = [
            "hello and welcome",
            "hello dan selamat datang",
            "你好，欢迎",
        ];

        let hour = new Date().getHours();
        if (hour >= 0 && hour < 12) {
            strings = [
                "hello, good morning",
                "hello, selamat pagi",
                "你好，早安好",
            ];
        } else if (hour >= 12 && hour < 17) {
            strings = [
                "hello, good afternoon",
                "hello, selamat tengah hari",
                "你好，午安好",
            ];
        } else if (hour >= 17 && hour < 24) {
            strings = [
                "hello, good evening",
                "hello, selamat petang",
                "你好，晚安好",
            ];
        }

        let typewriterConfigs = {
            strings: strings,
            loop: true,
            autoStart: true,
            delay: 50,
            deleteSpeed: 50,
            pauseFor: 3000,
        };

        let typewriter = new Typewriter(typewriterElement, typewriterConfigs);
        typewriter.start();
    },
    // ...
};
</script>

<style scoped>
/*
    Colour Themes
        Fills / Background
            Primary: #eeeeee
            Secodnary: #aaaaaa
            Attention: #f6d155

        Texts
            Primary: #333333
    ===================
*/

.centered {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.page {
    width: 100%;
    margin: 0.5rem;
    padding: 0.5rem;
}

.title {
    font-size: 10rem;
}

.texts {
    font-size: 2rem;
}

.html {
    margin: 0;
    min-height: 100% !important;
    height: 100%;

    background-color: #eeeeee;

    color: #333333;
    font-family: "Noto Sans SC", sans-serif;
    font-weight: 900;
}
body {
    background-color: black;
}
</style>
