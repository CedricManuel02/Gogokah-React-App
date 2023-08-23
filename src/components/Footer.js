import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return ( 
        <footer>
            <section>
                <p>Find an issue with this page? <Link to={"/"}>Fix it on Github</Link></p>
                <hr/>
                <p>Copyright © 2023 GoGoKah</p>
                <p>Created with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="image"/> by <Link to={"/"}>Cedric Manuel</Link></p>
                <hr/>
                <ul>
                    <li><Link><GitHubIcon id="icon"/></Link></li>
                    <li><Link><FacebookRoundedIcon  id="icon"/></Link></li>
                    <li><Link><TwitterIcon  id="icon"/></Link></li>
                    <li><Link><InstagramIcon  id="icon"/></Link></li>
                </ul>
            </section>
           
        </footer>
     );
}

export default Footer;