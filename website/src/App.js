import './App.css';


function App() {
  return (
    <div className="App">
      <div className="preloader active">
            <div className="preloader-content bounce"></div>           
        </div>
        
        <header className="container main-menu">
            <div className="main-menu__logo">

            </div>
            <nav className="main-menu__menu">
                
                
                <ul>
                    <li><a href="#">Про нас</a></li>
                    <li><a href="#">Наші курси</a></li>
                    <li><a href="#">Пошук</a></li>
                    <li><a href="#">Вхід</a></li>
                </ul>
            </nav>
        </header>
        
    </div>
  );
}

export default App;
