    <script setup>
    import { reactive, ref, onMounted } from 'vue'
    import axios from 'axios';
    import MovieCard from "../components/MovieCard.vue"

    let movieList = reactive([]);
    let isLoading = ref(true)

    onMounted(async () => {
        try {
                // const result = await fetch("http://localhost:8000/movies")
                const {data} = await axios.get("http://localhost:8000/movies")
               
                // const response = await result.json()
                movieList = data;
                isLoading.value = false;              
            
            
        } catch (error) {
            console.error("Error fetching===>",error)
            
        }

   

        
    })
    
    </script>
<template>
    <h1 class="text-3xl font-bold" v-if="isLoading">Loading.....</h1>
    <div class="grid grid-cols-3 gap-4 " v-else>
        <MovieCard
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
               />   

    </div>
 <h1>This is movie page</h1>
</template>


<style  scoped>

</style>