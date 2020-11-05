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
}

export const pokemonService = new PokemonService()
