<template>
  <div class="pokemon-component">
    <li>
      {{ pokeProp.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'PokemonComponent',
  props: ['pokeProp'],
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
