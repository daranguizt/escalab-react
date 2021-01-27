import React from 'react'; // para trabajar con clases
import { Switch, Route } from 'react-router-dom'; //trabajar rutas
import './App.css';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// Component
import Header from './components/header/header.component';

//firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component{
  constructor(){
    super();

    this.state = { //definir el estado inicial
      currentUser: null
    };


  }

  unsubscribeFromAuth = null;

  //Ciclos de vida
  //montado -> cuando se carga el componente
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data() //toma todos
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  
  //desmontado -> cambio de page
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  //al header le paso el currentuser, state lo tiene
  //exact importante para ruta inicial, sino choca con todo lo que tenga /
  render(){ //se debe especificar el retorno
    return (
      <div>
        <Header currentUser={this.state.currentUser}/> 
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
  //actualizado -> cambios en componentes
}

export default App;
