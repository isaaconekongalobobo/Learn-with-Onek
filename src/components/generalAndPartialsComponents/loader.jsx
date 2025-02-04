// Importation de framer motio
const Loader = () => {
    return (
        <div className="flex justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className=" size-20" width="1em" height="1em" viewBox="0 0 24 24">
                <circle cx={18} cy={12} r={0} fill="green"><animate attributeName="r" begin={0.67} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate>
                </circle><circle cx={12} cy={12} r={0} fill="green"><animate attributeName="r" begin={0.33} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>
                <circle cx={6} cy={12} r={0} fill="green"><animate attributeName="r" begin={0} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>
            </svg>
        </div>
    );
}

export default Loader;
