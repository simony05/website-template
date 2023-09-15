import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link class="navbar-brand" to="/">
              My website
            </Link>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <CustomLink to="/page1">Page 1</CustomLink>
            </li>
            <li>
              <CustomLink to="/page2">Page 2</CustomLink>
            </li>
            <li>
              <CustomLink to="/page3">Page 3</CustomLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const active = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={ active ? "active" : ""}> 
            <Link to={ to } { ...props }>
                { children }
            </Link>
        </li>
    )
}

  export default Navbar;