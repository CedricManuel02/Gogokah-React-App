import { useParams } from "react-router-dom";

function Watch() {

    const {id} = useParams()


    return ( 
    <div className="WatchContainer">
        <div className="ServerContainer">
            <Server/>
            <Server/>
            <Server/>
            <Server/>
        </div>
    </div> 
    );
}

export default Watch;