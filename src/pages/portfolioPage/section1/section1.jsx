import DescriptionText from "./descriptionText";
import Details from "./detaisl/details";
import ItemCompetence from "./itemCompetence";
import MyProfile from "./myProfile";
import {motion} from 'framer-motion'
// Animation pour le titre (Isaac onek)
const titleVariant = {
    hidden: {
        opacity:0,
        x:-30,
    },
    visible: {
        opacity:1,
        x: 1,
        transition: {
            delay: 1
        }
    }
}

const Section1 = () => {
    return (
        <section className="p-10 pb-5 flex flex-col gap-5 sm:gap-10" >
            <div className="flex flex-col sm:flex-row sm:gap-5">
                <MyProfile/>  
                <div className="">
                    <div>
                        <motion.h1 variants={titleVariant} initial="hidden" animate="visible"  className="text-[35px] sm:text-[50px] font-medium">Isaac Onek</motion.h1>
                        <div>
                            <ItemCompetence text={"Web developper | "} animationDelay={1.5} description="Le developpement web est..." />
                            <ItemCompetence text={"Graphic designer | "} animationDelay={1.7} description="Le disgn graphique est..." />
                            <ItemCompetence text={"Web Designer "} animationDelay={2} description="Le web design est..." />
                        </div>
                        <DescriptionText text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos est similique vero iusto architecto distinctio sint non aperiam animi! Suscipit magnam quia vero, quibusdam mollitia consequuntur placeat omnis corporis soluta?" />
                    </div>
                    <Details/>
                </div>              
            </div>          
        </section>
    );
}

export default Section1;
