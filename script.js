const App = Vue.createApp({
    data() {
        return {
            types: {
                'dog': {
                    url: 'https://dog.ceo/api/breeds/image/random',
                    arg: 'message',
                },
                'cat': {
                    url: 'https://api.thecatapi.com/v1/images/search',
                    arg: 'url'
                }
            },
            imgSource: false,
            loading: false,
        }
    },
    methods: {
        async getImage(typ) {
            if (!typ) {
                typ = 'dog';
            }
            const typeData = this.types[typ];

            this.imgSource = false;
            this.loading = true;

            const response = await fetch(typeData.url);
            let json = await response.json();

            if (json[0]) {
                json = json[0];
            }

            if (json) {
                this.imgSource = json[typeData.arg];
            }
        },
        onImageLoaded() {
            this.loading = false;
        }
    },
    mounted() {
        const entries = Object.entries(this.types);
        const randomTyp = Math.floor(Math.random() * entries.length);
        
        this.getImage(entries[randomTyp][0]);
    }
})
    .mount('#app')
