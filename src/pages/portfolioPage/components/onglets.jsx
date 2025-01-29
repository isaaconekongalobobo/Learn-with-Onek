import Onglet from "./onglet";

const Onglets = () => {
    return (
        <div className="flex justify-between  sm:justify-center sm:gap-20 text-sm relative top-[-30px] sm:static ">
            <Onglet to="about" text="À propos"/>
            <Onglet to="projets" text="Projets"/>
            <Onglet to="designs" text="Designs"/>
            <Onglet to="feeds" text="Feeds"/>
        </div>
    );
}

export default Onglets;
