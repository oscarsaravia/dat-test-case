// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

(window as any).PLUGIN = {
  init: (config: {
    selector: string;
    options: {
      initializedOptions: string[];
      onPositionChange: (positions: string[]) => void;
      onComplete: (positions: string[]) => void;
      onInit: () => void;
    }
  }) => {
    const element = document.querySelector(config.selector)
    if (element) {
      ReactDOM.createRoot(document.getElementById('root')!).render(
        <App { ...config.options }/>,
      )
    }
  }
}

// Uncomment for development

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App
//       initializedOptions={ []}
//       onPositionChange={ (positions: string[]) => { console.log(positions) }}
//       onComplete={ (positions: string[]) => { console.log(positions) }}
//       onInit={() => console.log('init')}
//     />
//   </React.StrictMode>,
// )
