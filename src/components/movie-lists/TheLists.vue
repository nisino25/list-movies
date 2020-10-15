<template>
    <base-card>
        <button id="cButton" v-if="selectedTab === 'add-lists'" @click="setSelectedTab('stored-lists')">Check Lists</button>
        <button id="aButton" v-if="selectedTab === 'stored-lists'" @click="setSelectedTab('add-lists')">Add More List</button>
    </base-card>

    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredLists from './StoredLists.vue';
import AddLists from './AddLists.vue';



export default {
    components:{
        StoredLists,
        AddLists,
    },
    data(){
        return{
            selectedTab: 'stored-lists',
            storedMovieLists: [
                {
                id: 'starwars',
                title: 'Star Wars 9',
                description: 'Battle in the space',
                rating: '9.0',
                year: '2019',
                link: 'https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755',
                },
                {
                id: 'ryomaden',
                title: 'Ryomaden',
                description: 'About Sakamoto Ryoma.',
                rating: '9.5',
                year: '2010',
                link: 'https://images-na.ssl-images-amazon.com/images/I/41jFMyKGeBL._SX352_BO1,204,203,200_.jpg',
                },
            ],

        }
    },
    provide(){
        return{
            movieData: this.storedMovieLists,
            deleteList: this.removeList,
            addLink: this.addLink
        }
    },
    methods:{
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        removeList(resId) {
            const resIndex = this.storedMovieLists.findIndex(res => res.id === resId);
            this.storedMovieLists.splice(resIndex, 1);
        },
        addLink(title, description,rating,year, url) {
            const newList = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                rating: rating,
                year: year,
                link: url,
            };
            this.storedMovieLists.unshift(newList);
            this.selectedTab = 'stored-lists';
        },
    }
}
</script>

<style scoped>

button{
    margin: 0;
    left: 50%;
    background-color:lightgreen;
    margin:0 auto;
}

</style>