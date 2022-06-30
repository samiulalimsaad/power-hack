import Modal from "./Modal";
import NavBar from "./NavBar";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <header>
            <NavBar />
            <main>{children}</main>
            <Modal />
        </header>
    );
};

export default Layout;
