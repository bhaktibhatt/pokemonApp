import React from "react";

const Pokeinfo=()=>{
    return(
        <>
            <h1>JigglyPuff</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg" alt="" />
            <div className="abilities">
                <div className="group">
                    <h2>cute-charm</h2>
                </div>
                <div className="group">
                    <h2>competitive</h2>
                </div>
                <div className="group">
                    <h2>friend-guard</h2>
                </div>
            </div>
            <div className="base-stats">
                <h3>Hp:115</h3>
                <h3>attack:45</h3>
                <h3>defense:20</h3>
                <h3>special-attack:45</h3>
                <h3>special-defense:25</h3>
                <h3>speed:20</h3>
            </div>
        </>
    )
}

export default Pokeinfo