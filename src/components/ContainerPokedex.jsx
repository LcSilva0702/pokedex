import useApi from "../hooks/useApi"
import "../index.css"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function ContainerPokedex (){
    const [pokemon, setPokemon] = useState()
    const pokemonIdPage = 1
    const [pokemonId, setPokemonId] = useState(Number(pokemonIdPage));
    const navigate = useNavigate()

    useEffect(() => {
        async function handleGetPokemon() {
            const api = new useApi
            const response = await api.getPokemon(pokemonId)

            if(response?.status == 200){
                const pokemon = response.data || []
                setPokemon(pokemon)
            } else if (response?.status === 404) {
                console.log("error")
            }
        }
        
        handleGetPokemon()
    }, [pokemonId])

    const nextPokemon = () => {
        const nextPokemon = pokemonId + 1
        setPokemonId(nextPokemon)
        navigate(`/${pokemonId}`)
    }

    const previousPokemon = () => {
        const previousPokemon = pokemonId - 1
        setPokemonId(previousPokemon)
        navigate(`/${pokemonId}`)
    }

    return (
        <div className="w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center bg-[url('https://th.bing.com/th/id/OIP.uy992TnhFetHUaPxux8XoQAAAA?rs=1&pid=ImgDetMain')]">
            <span>
                <img className="relative z-30 -right-20 top-24" src={pokemon?.sprites?.front_default}></img>
                <img className="relative z-20 -left-6 bottom-24 w-72 h-80" src="https://pokemonrevolution.net/forum/uploads/monthly_2021_03/DVMT-6OXcAE2rZY.jpg.afab972f972bd7fbd4253bc7aa1cf27f.jpg"></img>
            </span>
            <div className="absolute z-20 flex flex-col items-center justify-center">
                <h1 className="relative top-80 bottom-5 right-5">{pokemon?.name}</h1>
                <img className="w-full h-auto back" src="https://th.bing.com/th/id/R.0bb703d0c56a4dc0a9af5d8f03ba61a0?rik=bhkKZgni2oyCvQ&pid=ImgRaw&r=0"/>
                <div className="absolute bottom-10 flex space-x-4">
                    <button className="text-gray-700 bg-white py-2 px-4" onClick={previousPokemon}>anterior</button>
                    <button className="text-gray-700 bg-white py-2 px-4" onClick={nextPokemon}>proximo</button>
                </div>
            </div>
        </div>
    )
}
