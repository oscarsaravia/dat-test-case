import ReactDOM from 'react-dom';
import { App } from './App';

window.DatPlugin = {
  mount: (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        ReactDOM.render(< App />, element);
    }
  },
  unmount: (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      ReactDOM.unmountComponentAtNode(element);
    }
  }
};
