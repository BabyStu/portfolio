export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg ">
          <ul className="flexRow navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>

    </nav>
  );
}