import { useContext } from "react";
import Context from "./context/Context";
import './Footer.css';

function Footer() {

  const context = useContext(Context)
  return (

      <footer >
        {context.user.provincia && <h3>Nos gustaria conocer {context.user.provincia}</h3>}
      </footer>

  );
}

export default Footer;