import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useStateProvider } from "../utils/StateProvider"
import { reducerCases } from "../utils/Constants"
import Server from "../components/Server"
import Featured from "../components/Featured"
function Info() {
    const navigate = useNavigate()
    const {id, videoId} = useParams()
    const [episodeUrl, setEpisodeUrl] = useState(null)
    const [server, setServer] = useState([])
    const [active, setActive] = useState(0)
    const [{info }, dispatch] = useStateProvider()
    useEffect(() => {
        window.scrollTo(0, 0);
        const getInfo = async () => {
           try{
            const response = await axios.get(`https://api.consumet.org/anime/gogoanime/info/${id}`)
            let selectedEpisodeId = response.data.episodes[0].id;
            if (videoId !== "null") {
                selectedEpisodeId = videoId; 
            }
            const episode = await axios.get(`https://api.consumet.org/anime/gogoanime/servers/${selectedEpisodeId}`)
            dispatch({type: reducerCases.SET_INFO, info: response.data})
            dispatch({type: reducerCases.SET_EPISODE, featuredEpisode: episode.data[0]})
            setEpisodeUrl(episode.data[0].url)
            setServer(episode.data)
           }
           catch(err){
            console.error(err)
           }
        }
        getInfo()
    }, [id,videoId, dispatch])
    const handleClick = (episodeId) => {
        navigate(`/info/${id}/${episodeId}`)
    }
    const handleServer =  (server, index) => {
      setActive(index)
      setEpisodeUrl(server)
    }
    return (
        <div className="InfoContainer">
            <div className="WatchContainer">
            {episodeUrl && 
               <iframe allowFullScreen={true} scrolling="no" frameBorder="0" allowtransparency="true" src={episodeUrl}></iframe>
               }
            </div>
           {
            info && info.genres && 
            <div className="InfoWrapper">
            <img src={info.image} alt={info.id}/>
            <div className="InfoSection">
            <small>#{info.type}</small>
            <h1>{info.title}</h1>
            <h5>{info.otherName}</h5>
            <ul>
                <li>{info.subOrDub}</li>
                <li>{info.releaseDate}</li>
                <li>{info.status}</li>
            </ul>
            <span>Genres : {info.genres.map((genres) => genres).join(" , ")}</span> 
            <p>{info.description}</p>
            </div>
            </div>
           }
            <div className="ServerContainer">
                <span>If current server doesn't work please try other servers below.</span>
                <div className="ServerWrapper">
                {server && server.map((server, index) =>(
                    <Server server={server} index={index} active={active} key={index} handleServer={handleServer}/>
                ))}
                </div>
           </div>
           <div className="EpisodeContainer">
            <header>
                <h1>Episodes</h1>
            </header>
            <div className="EpisodeWrapper">
                {info.episodes && info.episodes.map(episodes => (
                    <span key={episodes.id} onClick={() => handleClick(episodes.id)}>{episodes.number}</span>
                ))}
            </div>
           </div>
           <Featured />
        </div>
      );
}

export default Info;