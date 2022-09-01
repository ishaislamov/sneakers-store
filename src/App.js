import Content from './components/Content/Content';
import Overlay from './components/Overlay';
import Header from './components/Header';

function App() {
    return (
        <div className="wrapper clear">
            <Overlay />
            <Header />
            <Content />
        </div>
    );
}

export default App;
