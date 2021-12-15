import react, {useContext} from 'react' ;
import './contenu.css'
import { ThemeContext } from './context';

export default function Contenu() {

    const {theme} = useContext(ThemeContext);

    return (
    <div
    className={theme ? 'contenu light' : 'contenu dark'}
    >
    <h1>Bienvenue dans le jeu du pendu !</h1>
    Entrez votre username <input></input>
    <button>valider</button>

    </div>
    )
}