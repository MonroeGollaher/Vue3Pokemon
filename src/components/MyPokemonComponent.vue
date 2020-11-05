<template>
  <div class="mypokemon-component">
    <li>
      {{ myPokeProp.name }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'MyPokemonComponent',
  props: ['myPokeProp'],
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
