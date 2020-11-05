<template>
  <div class="activePokemon-component">
    <h4>{{ activePokemon }}</h4>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'ActivePokemonComponent',
  setup(props) {
    return {
      activePokemon: computed(() => AppState.activePokemon)

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
