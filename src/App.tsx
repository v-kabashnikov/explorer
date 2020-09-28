import { getRoute, listen } from "history";

import Home from "pages/Home";
import Blocks from "pages/Blocks";
import Block from "pages/Block";
import Transaction from "pages/Transaction";
import Name from "pages/Name";
import ListExpensive from "pages/ListExpensive";
import NotFound from "pages/NotFound";
import Mempool from "pages/Mempool";

import Link from "components/Link";
import Search from "components/Search";
import SearchResult from "pages/SearchResult";

import "./App.css";

const App: React.FC = () => {
  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => listen(() => setRoute(getRoute())), []);

  return (
    <>
      <header styleName="header">
        <div styleName="wrapper">
          <Link route={{ id: "home", params: {} }}>
            <h1 styleName="home">
              <span>{"handshake\nexplorer"}</span>
            </h1>
          </Link>
          <nav styleName="menu">
            <ul>
              <li>
                <Search route={{ id: "names", params: { limit: 0, offset: 0} }}></Search>
              </li>
              <li>
                <Link route={{ id: "names", params: { limit: 0, offset: 0} }}>
                  Names
                </Link>
              </li>
              <li>
                <Link route={{ id: "mempool", params: { limit: 0, offset: 0} }}>
                  Mempool
                </Link>
              </li>
              <li>
                <Link route={{ id: "blocks", params: { page: 0 } }}>
                  Blocks
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main styleName="main">
        <div styleName="wrapper">
          {route === undefined ? (
            <NotFound />
          ) : (
            (route.id === "home" && <Home {...route.params} />) ||
            (route.id === "blocks" && <Blocks {...route.params} />) ||
            (route.id === "block" && <Block {...route.params} />) ||
            (route.id === "blockByHeight" && <Block {...route.params} />) ||
            (route.id === "transaction" && <Transaction {...route.params} />) ||
            (route.id === "name" && <Name {...route.params} />) ||
            (route.id === "listExpensive" && (
              <ListExpensive {...route.params} />
            )) ||
            (route.id === "search" && <SearchResult {...route.params} />) ||
            (route.id === "mempool" && <Mempool {...route.params} />)
          )}
        </div>
      </main>
      <footer styleName="footer">
        <div styleName="wrapper">
          <div styleName="copyright">handshake explorer &copy; 2020</div>
        </div>
      </footer>
    </>
  );
};
export default App;
