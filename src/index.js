import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { ToastProvider } from 'react-toast-notifications';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
//import thunk from "redux-thunk";


const store= createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);



