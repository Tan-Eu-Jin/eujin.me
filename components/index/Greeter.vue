<template>
    <v-container fill-height align-content-center>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-hover v-slot="{ hover }" close-delay="200">
                    <div>
                        <div class="ma-2 pa-2">
                            <h1 class="text-sm-h1 text-h2 font-weight-black">
                                Tan Eu Jin
                            </h1>
                        </div>
                        <v-expand-transition>
                            <div v-if="hover">
                                <v-btn
                                    plain
                                    text
                                    depressed
                                    target="_blank"
                                    href="https://www.linkedin.com/in/eujin-tan/"
                                >
                                    Lets connect on
                                    <v-icon class="mx-1">mdi-linkedin</v-icon>
                                </v-btn>
                            </div>
                        </v-expand-transition>
                    </div>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="12"
                id="typewriter"
                class="text-subtitle-1 text-center shrink"
            ></v-col>
        </v-row>
    </v-container>
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
