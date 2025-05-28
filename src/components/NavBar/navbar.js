// NavBar.jsx
import './navbar.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function NavBar({ isDark, toggleTheme }) {
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="logo">
                <a href="#home">
                    <img src={logo} alt="logo" />
                    <h1>Yatharth Prajapat</h1>
                </a>
            </div>

            <nav className="nav-links">
                <a onClick={() => navigate('/')}>Home</a>
                <a onClick={() => navigate('/about')} className="nav-button">About</a>
                <a onClick={() => navigate('/projects')} className="nav-button">Projects</a>
                <a href="#contact">Contact</a>

                {/* 🌗 Custom Toggle Switch */}
                <div className="toggle-switch">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={toggleTheme}
                            
                        />
                        <span className="slider">
                            <span className="circle">
                                <span className="shine shine-1" />
                                <span className="shine shine-2" />
                                <span className="shine shine-3" />
                                <span className="shine shine-4" />
                                <span className="shine shine-5" />
                                <span className="shine shine-6" />
                                <span className="shine shine-7" />
                                <span className="shine shine-8" />
                                <span className="moon" />
                            </span>
                        </span>
                    </label>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
