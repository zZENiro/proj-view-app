<template>
    <div>
        <v-container>
            <v-form>
                <v-file-input
                    @change='fileUploaded'
                    multiple
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Загрузите работы"
                    prepend-icon="mdi-camera"
                    label="Изображение"
                ></v-file-input>
            </v-form>

            <v-row v-if="imageCounter == 0">
                <v-col 
                    v-for='n in rowCount'
                    :key="n"
                    class="d-flex child-flex"
                    cols="4"
                >
                    <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular 
                                    indeterminate 
                                    color="grey lighten-5"
                                />
                            </v-row>
                        </template>
                    </v-img>
                </v-col>
            </v-row>
            <v-row v-else>
                <v-col 
                v-for="id in imagesIds"
                :key="id"
                class="d-flex child-flex"
                cols="4"
                >
                <v-img
                    :src="`http://localhost:5000/api/load?id=${id}`"
                    :lazy-src="`http://localhost:5000/api/load?id=${id}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                >
                    <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                    </template>
                </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mainStorePath } from "@/store";
import { mapState, mapActions } from "vuex";
import axios from "axios"

export default ({
    methods: {
        ...mapActions(mainStorePath, [
            
        ]),

        fileUploaded(files) {
            files.forEach(async ifile => {
                this.imageCounter = this.imageCounter + 1;

                const formData = new FormData();
                formData.append('file', ifile);

                await axios.post('http://localhost:5000/api/upload', formData).then(res => {
                    console.log(res.data);
                    this.imagesIds.push(res.data);
                });
            });
        },
    },
    computed: {
        ...mapState(mainStorePath, [

        ]),
    },
    
    mounted() {
        window.onscroll = () => {
            if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
                this.rowCount = this.rowCount + 9;
            }
        };
    },

    data() {
        return { 
            imagesIds: [],
            scrolledToBottom: false,
            rowCount: 9,
            imageCounter: 0,
        }
    },
    
})
</script>
