import { Outlet, useLocation } from "react-router-dom";

export function Main() {
    const location = useLocation();

    return (
        <>
            <div className="container">
                <div className="row menu">
                    <div className="col-4 logo">col-4 logo</div>
                    <div className="col-8 banner">col-8 banner</div>
                </div>
                <div className="row navbar">Navbar</div>
                <div className="row main">
                    <div className="col-2 left">col-2 left</div>
                    {location.pathname === "/cart" || location.pathname === "/login" || location.pathname === "/detail"
                        || location.pathname === "/register"? (
                        <Outlet />
                    ) : (
                        <div className="col-7 center">
                            <div className="col-10 carousel">Carousel</div>
                            <div className="col-10 listproduct">List Product</div>
                        </div>
                    )}
                    <div className="col-3 right">col-3 right</div>
                </div>
            </div>
        </>
    );
}
