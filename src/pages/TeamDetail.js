import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar/Sidebar";
import TeamProfile from "../components/team/TeamProfile";
import LatestFuture from "../components/team/LatestFuture";
import PlayerCard from "../components/player/PlayerCard";
import Standings from "../components/standings/Standings";
import ProvaApi from "../api/ProvaApi";
import News from "../components/news/News";

const TeamDetail = (props) => {
    const {id} = useParams();
    const apiProva = new ProvaApi();
    const [teamData, setTeamData] = useState([]);
  
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const responseTeamData = await apiProva.makeRequest(`_next/data/4276/en/teams/${id}/overview/inter.json?id=8636&tab=overview&slug=inter`);
                setTeamData(responseTeamData.data.pageProps);  
                console.log(teamData?.details)     
            } catch (error) {
                console.log(error);
            }
        };

        fetchTeam(); 

    }, []);
  
	return (
		<>
            <SideBar />
			<div className="text-black flex flex-col p-4 sm:ml-64 gap-5">
                <TeamProfile teamName={teamData.details?.name} teamNation={teamData.details?.country} teamLogo={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamData.details?.id}.png` || ""} teamVenueName={teamData.details?.sportsTeamJSONLD?.location?.name || "Parc de Princes"} teamVenueCity={teamData.details?.sportsTeamJSONLD?.location?.address?.addressLocality || "Paris"}/>
                <LatestFuture fixtureData={teamData.fixtures?.allFixtures}/>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <div className="text-sm text-[#6d6a7f]">First Team</div>
                        <div className="text-sm text-[#6d6a7f]">2023-24</div>
                    </div>
                    <div className="overflow-x-auto flex gap-3">
                        {teamData.details?.sportsTeamJSONLD?.athlete.map((player, index) => {
                            const pattern = /\/players\/(\d{5,7})\//;
                            const match = player.url.match(pattern);
                            const playerNumber = match ? match[1] : null;
                            
                            return (
                                <PlayerCard
                                    key={index}
                                    name={player.name}
                                    teamLogo={`https://images.fotmob.com/image_resources/logo/teamlogo/${teamData.details?.id}.png`}
                                    image={`https://images.fotmob.com/image_resources/playerimages/${playerNumber}.png` || "https://shared-static-hosted4.stats.com/headshots/144x144/football/nfl/1116663.png"}
                                    playerNumber={playerNumber} 
                                    playerId={playerNumber}
                                />
                            );
                        })}

                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-sm text-[#6d6a7f]">Season Leaderboard</div>
                    <Standings responseTable={teamData || ""}/>
                </div>
                <News teamId={id} colorTeam={teamData?.history?.teamColor}/>
            </div>	
		</>
	);
};

export default TeamDetail;



