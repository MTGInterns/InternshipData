import { Link } from "react-router";
export default function header(){
    return (
      <div className="head" style={{ width: "100%", margin: "0" }}>
        <div className="navbar w-100 d-flex align-items-center justify-content-center p-3" style={{ height: "60px", backgroundColor: "#a4e697ff" }}>
          <ul className="d-flex gap-4 list-unstyled justify-content-space-around">
            <li>
              <Link to="/" className="navbar-brand fs-5 ">
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-brand  fs-5">
                <strong>About</strong>
              </Link>
            </li>
            <li>
              <Link to="/booking" className="navbar-brand  fs-5 ">
                <strong>Booking</strong>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-brand fs-5">
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <img
          src="https://s3.india.com/wp-content/uploads/2024/12/Eco-friendly-Travel-In-Kerala.jpg?impolicy=Medium_Widthonly&w=800&h=541"
          alt="Kerela"
          className="img-fluid"
          style={{ width: "100%", height: "300px" }}
          />
        </div>
      </div>
    );
}

