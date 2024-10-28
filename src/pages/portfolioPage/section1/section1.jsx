import ItemCompetence from "./itemCompetence";
import MyProfile from "./myProfile";

const Section1 = () => {
    return (
        <section className="bg-[#1B4D3E] p-10" >
            <div className="flex flex-col sm:flex-row sm:gap-5">
                <MyProfile/>  
                <div className="">
                    <div>
                        <h1 className=" text-[35px] sm:text-[50px] font-medium">Isaac Onek</h1>
                        <div>
                            <ItemCompetence text={"Web developper | "} animationDelay={1} />
                            <ItemCompetence text={"Graphic designer | "} animationDelay={1.5} />
                            <ItemCompetence text={"Web Designer "} animationDelay={2} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>              
            </div>
        </section>
    );
}

export default Section1;
