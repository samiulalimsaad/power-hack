const NavBar = () => {
    return (
        <div className="text-white bg-primary">
            <div className="navbar sm:px-20">
                <div className="navbar-start">
                    <a className="text-xl normal-case btn btn-ghost">
                        Power-Hack
                    </a>
                </div>
                <div className="hidden navbar-center lg:flex"></div>
                <div className="navbar-end">
                    <span>Paid Total:</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
