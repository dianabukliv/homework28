
import {BrowserRouter as Router, Route} from "react-router-dom"; 
import HomePage from "./Components/HomePage/HomePage";
import PostPage from "./Components/PostPage/PostPage";
import PhotoPage from "./Components/PhotoPage/PhotoPage";
import ContactsPage from "./Components/ContactsPage/ContactsPage";
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router> 
        <Header/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/post" component={PostPage}/>
        <Route path="/photo" component={PhotoPage}/>
        <Route path="/contact" component={ContactsPage}/>
        
      </Router>
    </div>
  );
}

export default App;
