import store from './store.js';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Contextapi } from './components/Contextapi.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Contextapi>
      <App />
    </Contextapi>
  </Provider>
);

