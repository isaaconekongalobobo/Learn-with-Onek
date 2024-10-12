import Onglet from "./onglet";

const Onglets = () => {
    return (
        <ul className="hidden sm:flex gap-5 md:gap-4">
            {/* J'importe plusieurs fois le composant onglet */}
            <Onglet ancre="/" nom="Acceuil" barre="|" />
            <Onglet ancre="/about" nom="A propos" barre="|" />
            <Onglet ancre="/portfolio" nom="Mon portfolio" barre="|" />
            <Onglet ancre="/tutoriels" nom="Tutoriels" barre="|" />
            <Onglet ancre="/chatbot" nom="Chatbot"  />
        </ul>

    );
}

export default Onglets;
