import {Switch, Route} from 'react-router-dom'
import ProductDetail from "../../containers/ProductDetail";
import ProductList from "../../containers/ProductList";

/**
 * Routes
 * @returns Routes 
 */
const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={ProductList} exact/>
            <Route path="/pdp" component={ProductDetail}/>
        </Switch>
    );
};

export default Routes;