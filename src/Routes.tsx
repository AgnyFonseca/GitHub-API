import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import GithubSearch from './pages/GithubSearch/GithubSearch';
import Home from './pages/Home/Home';

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/githubsearch" exact>
                <GithubSearch />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;