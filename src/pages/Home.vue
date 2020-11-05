<template>
  <div class="home">
    <h1>Welcome</h1>
  </div>
  <pokemon-component
    @click="setActive(pokemon.name)"
    v-for="pokemon in allPokemon"
    :key="pokemon.name"
    :poke-prop="pokemon"
  />
  <active-pokemon-component />
</template>

<script>
import { computed, onMounted } from 'vue'
import { pokemonService } from '../services/PokemonService'
import PokemonComponent from '../components/PokemonComponent'
import { AppState } from '../AppState'
import { myPokemonService } from '../services/MyPokemonService'
import ActivePokemonComponent from '../components/ActivePokemonComponent'
export default {
  name: 'Home',
  components: { PokemonComponent, ActivePokemonComponent },
  setup() {
    onMounted(() => {
      pokemonService.getAllPokemon()
    })
    return {
      allPokemon: computed(() => AppState.allPokemon),
      addPokemon(name) {
        myPokemonService.addPokemon(name)
      },
      setActive(name) {
        pokemonService.setActive(name)
      }
    }
  }
}
</script>
