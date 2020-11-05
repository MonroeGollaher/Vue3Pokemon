<template>
  <div class="mypokemon-page">
    <h2>MyPokemon</h2>
    <my-pokemon-component v-for="pokemon in allMyPokemon" :key="pokemon.name" :poke-prop="pokemon" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { myPokemonService } from '../services/MyPokemonService'
import MyPokemonComponent from '../components/PokemonComponent'
export default {
  name: 'MyPokemonPage',
  setup() {
    onMounted(() => {
      myPokemonService.getMyPokemon()
    })
    return {
      allMyPokemon: computed(() => AppState.myPokemon),
      addPokemon() {
        myPokemonService.addPokemon()
      }
    }
  },
  components: { MyPokemonComponent }
}
</script>

<style lang="scss" scoped>

</style>
