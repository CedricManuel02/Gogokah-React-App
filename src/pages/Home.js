import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Featured from "../components/Featured";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

function Home() {
  const [{ featured }, dispatch] = useStateProvider();
  const descriptionLength = 500;
  useEffect(() => {
    const apiOne = axios.get(
      "https://api.consumet.org/anime/gogoanime/top-airing"
    );
    const apiTwo = axios.get(
      "https://api.consumet.org/anime/gogoanime/info/chainsaw-man"
    );
    const apiThree = axios.get(
      "https://api.consumet.org/anime/gogoanime/recent-episodes"
    );
    axios.all([apiOne, apiTwo, apiThree]).then(
      axios.spread((...allData) => {
        const getOne = allData[0].data.results;
        const getTwo = allData[1].data;
        const getThree = allData[2].data.results;
        dispatch({type: reducerCases.SET_FEATURED,featured: getTwo,})
        dispatch({type: reducerCases.SET_TOP_AIRING, airing: getOne,})
        dispatch({type: reducerCases.SET_RECENT_EPISODE, episode: getThree,})
      })
    );
  }, [featured, dispatch]);

  return (
    <div>
        <div className="MainContainer">
      {featured && featured.genres && (
        <div className="MainWrapper">
          <small>#{featured.type}</small>
          <h1>{featured.title}</h1>
          <span>{featured.genres.map((genres) => genres).join(" , ")}</span>
          <p>
            {featured.description.length > descriptionLength
              ? `${featured.description.slice(0, descriptionLength)}...`
              : featured.description}
          </p>
          <Link to={`/info/${featured.id}/null`}>Watch This</Link>
        </div>
      )}
    </div>
    <Featured/>
    </div>
  );
}

export default Home;
