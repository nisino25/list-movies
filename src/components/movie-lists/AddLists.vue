<template>
    <base-card>
        <input v-model="titleInput" placeholder="Title">
        <br><br>
        <a v-bind:href="tomatoLink + titleInput.replace(/\s/g, '+') " target="_blank" v-if="titleInput !== ''">Check the detail of [ {{titleInput}} ]<br><br></a>
        <input v-model="descInput" placeholder="Description">
        <br><br>
        <input v-model="ratingInput" placeholder="rating">
        <br><br>
        <input v-model="yearInput" placeholder="Release year">
        <br><br>
        <input v-model="linkInput" placeholder="Picture url">
        <br><br>
        <button @click="submitData">Submit</button>
    </base-card>
</template>

<script>
export default {
    inject: ['addLink'],
    
    data(){
        return{
            titleInput: '',
            descInput: '',
            ratingInput: '',
            linkInput: '',
            yearInput: '',
            tomatoLink: 'https://www.rottentomatoes.com/search?search='
        }
    },
    methods:{
        submitData(){
            if (
                this.titleInput.trim() === ''
            ) {
                return;
            }
            this.addLink(this.titleInput, this.descInput, this.ratingInput, this.yearInput, this.linkInput)
        }

        
    }
    
}
</script>