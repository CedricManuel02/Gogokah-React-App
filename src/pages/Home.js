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
    const apiTwo = axios.get(
      "https://api.consumet.org/anime/gogoanime/info/chainsaw-man"
    );
    axios.all([apiTwo]).then(
      axios.spread((...allData) => {
        const getTwo = allData[0].data;
        dispatch({type: reducerCases.SET_FEATURED,featured: getTwo,})
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
