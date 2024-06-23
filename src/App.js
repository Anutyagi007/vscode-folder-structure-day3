import './App.css';
import Folder from './Folder';

function App() {
   const files = {
    name: 'root',
    isFolder: true,
    children: [
        {
            name: 'src',
            isFolder: true,
            children: [
                {
                    name: 'App.js',
                    isFolder: false,
                },
                {
                    name: 'Folder.js',
                    isFolder: false,
                },
                {
                    name: 'data.js',
                    isFolder: false,
                },
                {
                    name: 'Index.js',
                    isFolder: false,
                },
                {
                    name: 'styles.css',
                    isFolder: false,
                },
            ],
        },
        {
            name: 'public',
            isFolder: true,
            children: [
                {
                    name: 'index.html',
                    isFolder: false,
                },
                {
                    name: 'styles.css',
                    isFolder: false,
                },
            ],
        },
        {
            name: 'package.json',
            isFolder: false,
        },
    ],
};
  return (
    <div className="App">
      <div>
        <h1>VS Code Folder Structure</h1>
        <Folder files={files} />
      </div>
    </div>
  );
}

export default App;
