<template>
  <div class="home">
    <h1>Welcome</h1>
  </div>
  <pokemon-component @click="addPokemon" v-for="pokemon in allPokemon" :key="pokemon.name" :poke-prop="pokemon" />
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { pokemonService } from '../services/PokemonService'
import PokemonComponent from '../components/PokemonComponent'
import { AppState } from '../AppState'
import { myPokemonService } from '../services/MyPokemonService'
export default {
  name: 'Home',
  components: { PokemonComponent },
  setup() {
    const state = reactive({
      newPokemon: {}
    })
    onMounted(() => {
      pokemonService.getAllPokemon()
    })
    return {
      state,
      allPokemon: computed(() => AppState.allPokemon),
      addPokemon() {
        myPokemonService.addPokemon(state.newPokemon.name)
      },
      setActive(id) {
        pokemonService.setActive(id)
      }
    }
  }

}
</script>
