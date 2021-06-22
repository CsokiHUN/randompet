const App = Vue.createApp({
    data() {
        return {
            imgSource: false
        }
    },
    methods: {
        async getImage() {
            this.imgSource = false;

            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const json = await response.json();

            if (json.status == 'success') {
                this.imgSource = json.message;
            }
        }
    },
})
    .mount('#app')
