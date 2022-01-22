<template>
    <v-footer dark padless>
        <v-container>
            <v-row>
                <v-col align="center" justify="center" class="font-weight-thin">
                    Tools used
                </v-col>
            </v-row>
            <v-row>
                <v-flex class="d-flex flex-wrap mx-xs-6 justify-center">
                    <v-btn
                        fab
                        plain
                        depressed
                        target="_blank"
                        v-for="(url, mdi) in tools"
                        :key="mdi"
                        :href="url"
                    >
                        <v-icon dark>{{ mdi }}</v-icon>
                    </v-btn>
                </v-flex>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
export default {
    data() {
        return {
            tools: {
                "mdi-digital-ocean": "https://www.digitalocean.com/",
                "mdi-alpha-n-circle-outline": "https://www.nginx.com/",
                "mdi-nodejs": "https://nodejs.org/en/",
                "mdi-npm": "https://www.npmjs.com/",
                "mdi-nuxt": "https://nuxtjs.ir/",
                "mdi-vuejs": "https://vuejs.org/",
                "mdi-vuetify": "https://vuetifyjs.com/en/",
                "mdi-google-analytics":
                    "https://www.npmjs.com/package/@nuxtjs/google-tag-manager",
            },
        };
    },
};
</script>
