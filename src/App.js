import React from 'react';
import { BrowserRouter , Router } from 'react-router-dom';
// Deixa o Store disponível em toda a aplicação
import { Provider } from 'react-redux';
// Exibe mensagem na tela
import { ToastContainer } from 'react-toastify';

import './config/reactotronConfig';

import GlobalStyle from './styles/global';

import Routes from './routes';
import Header from './components/Header';

import history from './services/history';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <ToastContainer autoClose={3000} />
          <GlobalStyle />
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
