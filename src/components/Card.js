function Card(props) {
    const titleLength = 15;
    return ( 
        <div className="Card">
            <img src={props.show.image} alt={props.show.id}/>
            <h3>{props.show.title.length > titleLength ? `${props.show.title.slice(0, titleLength)}` : props.show.title}</h3>
            {props.type === "Episode" ? <small>Episode {props.show.episodeNumber}</small> : null}
        </div>
     );
}
export default Card;