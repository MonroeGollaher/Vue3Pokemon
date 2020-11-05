import { pokeApi } from './AxiosService'
import { AppState } from '../AppState'

class PokemonService {
  async getAllPokemon() {
    try {
      const res = await pokeApi.get('')
      AppState.allPokemon = res.data.results
      console.log(res.data.results)
    } catch (error) {
      console.error(error)
    }
  }

  async setActive(name) {
    try {
      const res = await pokeApi.get('/' + name)
      AppState.activePokemon = res.data
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const pokemonService = new PokemonService()
