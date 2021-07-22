import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import BlogContainer from "./components/BlogContainer";
import UserContainer from "./components/UserContainer";
import CreateBlog from "./components/CreateBlog";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/shared/Header";
import Register from "./components/Register";
import BlogCategory from "./components/Blogs/BlogCategory";
function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/users' component={UserContainer} />
            <Route path='/blogs' component={BlogContainer} exact />
            <Route path='/create' component={CreateBlog} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/blogs/relatioship' component={BlogCategory} />
            <Redirect to='/' />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
