import SideBar from "../components/SideBar/Sidebar";
import MatchesCont from "../components/matches/MatchesCont";
import React, { useEffect, useState } from "react";
import ProvaApi from "../api/ProvaApi";
import { Link } from "react-router-dom";

const Matches = () => {
	const apiProva = new ProvaApi();
    const [matchData, setMatchData] = useState([]);
  
    useEffect(() => {
        const fetchTransfer = async () => {
            try {
                const responsematchData = await apiProva.makeRequest(`api/matches?date=20240111&timezone=Europe%2FRome&ccode3=ITA`);
                setMatchData(responsematchData.data.leagues);
                console.log(responsematchData.data.leagues);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTransfer(); 

    }, []);
	
	return (
		<>
			<SideBar />
			<div className="text-black flex flex-col p-4 sm:ml-64 gap-3">
			{matchData?.map((match, index) => (
                <>
                {/* <Link to={"/team/" + (match?.primaryId)}> */}
				    <MatchesCont matchData={match.matches} key={index} leagueCountry={match.ccode} leagueTitle={match.name} leagueIcon={`https://images.fotmob.com/image_resources/logo/leaguelogo/${match?.primaryId}.png`}/>
                {/* </Link> */}
                </>
            ))}
			</div>
		</>
	);
};

export default Matches;
