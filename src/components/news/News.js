import React, { useEffect, useState } from "react";
import ProvaApi from "../../api/ProvaApi";
import NewsBlock from "./NewsBlock";

function News(props) {
    const apiProva = new ProvaApi();
    const [newsData, setNewsData] = useState([]);
  
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const responsenewsData = await apiProva.makeRequest(`api/tlnews?id=${props.teamId}&type=team&language=en`);
                setNewsData(responsenewsData?.data?.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchNews(); 

    }, []);

    return (
        <div className="flex gap-3">
            {newsData?.slice(0, 3).map((news, index) => (
                <div className="flex basis-4/12 w-100" key={index}>
                    <NewsBlock colorTeam={props.colorTeam} newsData={news}/>
                </div>    
			))}
        </div>    
    )
}

export default News