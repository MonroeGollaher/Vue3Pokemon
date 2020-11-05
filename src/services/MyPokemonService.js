import { api } from '../services/AxiosService'
import { AppState } from '../AppState'
class MyPokemonService {
  async getMyPokemon() {
    try {
      const res = await api.get('')
      AppState.myPokemon = res.data.data
      console.log(res.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  async addPokemon(name) {
    try {
      const res = await api.post('', name)
      AppState.myPokemon.push(res)
    } catch (error) {
      console.error(error)
    }
  }
}

export const myPokemonService = new MyPokemonService()
