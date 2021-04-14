import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/> } />
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.messagesPage} /> } />
          <Route path="/news" render={ () => <News /> } />
          <Route path="/music" render={ () => <Music /> } />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
