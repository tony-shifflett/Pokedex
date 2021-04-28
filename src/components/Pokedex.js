import React, {useState, useEffect} from 'react'

const Pokedex =()=>{
    const [pokemon, setPokemon] = useState(null)
    const catchPokemon = async()=>{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=00&limit=151')
    const data = await response.json()
    setPokemon(data)
    }
   
    console.log("working")
    
    useEffect(()=>{catchPokemon()}, [])
    return(
        <div>
            {
                pokemon != null ?
                pokemon.results.map((poke)=>{
                    const {name, url} = poke;
                    return (
                        <h3>{name}</h3>
                    )
                })
                :
                <div>loading</div>

            }
          
        </div>
    )
            
    
}

export default Pokedex