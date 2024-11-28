import api from "../service/App";

export default class useApi {
    async getPokemon(number){
        const pokemon = await api.get(`/${number}`)
    
        return pokemon
    }
}


