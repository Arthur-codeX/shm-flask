import { Outlet } from "react-router-dom";

function MainDash() {
  return (
    <div>
      <h1>MAin Dash</h1>
      <Outlet />
    </div>
  );
}

export default MainDash;
