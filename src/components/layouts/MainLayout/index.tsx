import { Outlet } from "react-router-dom";
import Header from "../../blocks/Header";

const MainLayout = () => (
    <main>
        <Header />
        <Outlet />
    </main>
);
export default MainLayout;
