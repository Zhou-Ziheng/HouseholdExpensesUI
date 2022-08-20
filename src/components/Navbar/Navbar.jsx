import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="nav-logo">Insert Logo Here</span>
      <div className="nav-items">
        <a href="/home">Home</a>
        <a href="/Signup">Sign Up</a>
        <a className="bg-blue-500 py-2 px-4 rounded opacity-100" href="/signin">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
