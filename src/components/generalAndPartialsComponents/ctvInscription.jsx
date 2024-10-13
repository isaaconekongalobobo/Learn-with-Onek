const CtvInscription = () => {
    return (
        <button className="bg-[#7ED218] p-4 pl-5 pr-5 flex items-center gap-3 rounded">
            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeDasharray={28} strokeDashoffset={28} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></animate></path><path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"></animate></path></g></svg>
            <span className="text-[#1B4D3E]">{"S'inscrire | se connecter"}</span>
        </button>
    );
}

export default CtvInscription;
