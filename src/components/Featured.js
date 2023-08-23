import { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
import Card from "./Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function Featured() {
  const [active , setActive] = useState(1);
  const [{ airing, episode}, dispatch] = useStateProvider();
  useEffect(() => {
    const apiOne = axios.get(
      "https://api.consumet.org/anime/gogoanime/top-airing"
    );
    const apiThree = axios.get(
      "https://api.consumet.org/anime/gogoanime/recent-episodes"
    );
    axios.all([apiOne, apiThree]).then(
      axios.spread((...allData) => {
        const getOne = allData[0].data.results;
        const getThree = allData[1].data.results;
        dispatch({type: reducerCases.SET_TOP_AIRING, airing: getOne,})
        dispatch({type: reducerCases.SET_RECENT_EPISODE, episode: getThree,})
      })
    );
  }, []);
    return ( 
        <div className="FeaturedContainer">
            <header>
                <h1>Browse Latest Anime</h1>
                <div className="ButtonContainer">
                <button className={active === 1 ? "Button Active" : "Button"} onClick={() => setActive(1)}>Episode</button>
                <button className={active === 2 ? "Button Active" : "Button"} onClick={() => setActive(2)}>Top Airing</button>
                </div>
            </header>
            <section>
                   <div className={active === 1 ? "CardContainer Active" : "CardContainer"}>
                   <div className="CardWrapper">
                   {episode && episode.map(episode => (
                    <Link to={`/info/${episode.id}/${episode.episodeId}`}  key={episode.id}>
                    <Card show={episode} type={"Episode"}/>
                    </Link>
                   ))}
                   </div>
                   </div>
                   <div className={active === 2 ? "CardContainer Active" : "CardContainer"}>
                   <div className="CardWrapper">
                   {airing && airing.map(airing => (
                    <Link to={`/info/${airing.id}/${null}`} key={airing.id} >
                    <Card show={airing} type={"Airing"}/>
                    </Link>
                   ))}
                   </div>
                   </div>
                  
            </section>
        </div>
     );
}

export default Featured; 