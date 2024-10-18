import CtvInscription from "../../../components/generalAndPartialsComponents/ctvInscription";
import CtvNewsLetters from "../../../components/generalAndPartialsComponents/ctvNewsLetters";

const CallToValue = () => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 font-medium">
            <CtvNewsLetters/>
            <CtvInscription/>
        </div>
    );
}

export default CallToValue;
