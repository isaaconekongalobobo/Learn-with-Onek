import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sm:hidden h-full bg-white">
      <h1 className="text-sm  font-bold font-dortmund">
        <strong className="font-pavelt">Learn With Onek</strong>
      </h1>
      <div>
          <div>
            <NavLink to="" >
              <p>Acceuil</p>
            </NavLink>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
