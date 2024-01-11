import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/Sidebar";
import ProvaApi from "../api/ProvaApi";
import PlayerProfile from "../components/player/PlayerProfile";

const PlayerDetail = (props) => {
    const {id} = useParams();
    const apiProva = new ProvaApi();
    const [playerData, setPlayerData] = useState([]);
  
    useEffect(() => {
        const fetchplayer = async () => {
            try {
                const responseplayerData = await apiProva.makeRequest(`api/playerData?id=${id}`);
                setPlayerData(responseplayerData);  
                console.log(playerData)     
            } catch (error) {
                console.log(error);
            }
        };

        fetchplayer(); 

    }, []);
  
	return (
		<>
            <SideBar />
			<div className="text-black flex flex-col p-4 sm:ml-64 gap-5">
                <PlayerProfile />
            </div>	
		</>
	);
};

export default PlayerDetail;



