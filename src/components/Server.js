import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
function Server(props) {
    const handleServer = (server, index) => {
        props.handleServer(server, index)
    }
    return ( 
        <div className={props.active === props.index ? "Server Active" : "Server"} onClick={() => handleServer(props.server.url, props.index)}>
            <ArrowRightSharpIcon id="icon"/>
            <div className="Title">
                <small>Server</small>
                <h4>{props.server.name}</h4>
            </div>
        </div>
     );
}

export default Server;