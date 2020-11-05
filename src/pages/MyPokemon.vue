<template>
  <div class="mypokemon-page">
    <h2>MyPokemon</h2>
    <my-pokemon-component v-for="pokemon in allMyPokemon" :key="pokemon.name" :poke-prop="pokemon" />
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { myPokemonService } from '../services/MyPokemonService'
import MyPokemonComponent from '../components/PokemonComponent'
export default {
  name: 'MyPokemonPage',
  setup() {
    const state = reactive({
      newPokemon: {}
    })
    onMounted(() => {
      myPokemonService.getMyPokemon()
    })
    return {
      state,
      allMyPokemon: computed(() => AppState.myPokemon),
      addPokemon() {
        myPokemonService.addPokemon(state.newPokemon)
      }
    }
  },
  components: { MyPokemonComponent }
}
</script>

<style lang="scss" scoped>

</style>
