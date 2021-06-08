import './App.css';
import { Switch , Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header-component.jsx';
import SignInAndSignUpPage from './pages/signin-signup/signin-signup.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import React from 'react';


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
            ...snapShot.data()
            }
          });
        });
      
      }
      this.setState({currentUser: userAuth});
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          <Switch> 
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
            
          </Switch>
      </div>
     
    );
  }
}

export default App;
