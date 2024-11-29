/* eslint-disable react/no-unescaped-entities */
import { Music } from "lucide-react";
import CardMusique from "./cardMusique";

const musics = [
    {
        artist: 'Taylor Swift',
        musicGender: 'Country,Pop & Pop et Rock ',
        image: 'https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165924/cruel-summer_dqvgk0.png',
        song: 'assets/songs/Taylor Swift - Cruel Summer (Official Audio) (320).mp3',
    },
    {
        artist: 'Alan Walker',
        musicGender: 'Electro House, Progressive House, Future Bass',
        image: 'https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165923/faded_hicyvv.png',
        song: '',
    },    
    {
        artist: 'Clean Bandit',
        musicGender: 'Électro-pop / Dance-pop',
        image: 'https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/symphony_ypgz0j.png',
        song: '',
    },    
    {
        artist: 'Dua Lipa',
        musicGender: 'Pop, Dance-pop & Electropop',
        image: 'https://res.cloudinary.com/do2qnb4zc/image/upload/v1731165922/love-again_kx8bkd.png',
        song: '',
    },
]

const Musique = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2">
                    <h3 className="text-slate-800 text-xl">Musique</h3>
                    <Music className="text-[#00693E] size-7 " />
                </div>
                <p className="text-slate-800 text-center">
                    🎶 La musique occupe une place essentielle dans ma vie. <br /> <br />
                    A la fois source d'inspiration et moyen d'expression, elle est pour moi un langage universel 🌍 qui permet de transcender les barrières culturelles et émotionnelles.<br />
                    La musique est bien plus qu'un simple centre d'intérêt pour moi ; c'est une véritable aventure 🌟 qui me permet d'explorer sans cesse de nouvelles facettes de l'art et de la vie...
                </p>                
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3">
                {
                    musics.map ((music, index) => (
                        <CardMusique key={index} music={music}  />
                    ))
                }
            </div>
        </div>
    );
}

export default Musique;
