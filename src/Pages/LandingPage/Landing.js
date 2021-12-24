// Import Style
import './Landing.css'
import Rectangle3 from '../../Images/Icons/Rectangle 3.png';
import Rectangle4 from '../../Images/Icons/Rectangle 4.png';
import Rectangle5 from '../../Images/Icons/Rectangle 5.png';
import Rectangle6 from '../../Images/Icons/Rectangle 6.png';
import Rectangle8 from '../../Images/Icons/Rectangle 8.png';
import Rectangle9 from '../../Images/Icons/Rectangle 9.png';
import Rectangle10 from '../../Images/Icons/Rectangle 10.png';
import Rectangle12 from '../../Images/Icons/Rectangle 12.png';
import { DumbgramIcon } from '../../Images';

export default function Landing() {


    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                width: '1524px',
            }}>
                <div className="containerLanding">
                    <img src={DumbgramIcon} alt="" />

                    <h1 className="heading">Share your best photos or videos</h1>
                    <p className="paragraf">Join now, share your creations with another
                        <br></br>people and enjoy other creations.</p>

                    <button className="btn-login">Login</button>
                    <button className="btn-register">Register</button>
                </div>

                <div className="images">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img src={Rectangle6} alt="" width="195px" height="249px" />
                        <img src={Rectangle5} alt="" width="195px" height="183px" />
                        <img src={Rectangle10} alt="" width="195px" height="176px" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img src={Rectangle3} alt="" width="197px" height="351px" />
                        <img src={Rectangle9} alt="" width="195px" height="269px" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <img src={Rectangle4} alt="" width="194px" height="175px" />
                        <img src={Rectangle8} alt="" width="195px" height="260px" />
                        <img src={Rectangle12} alt="" width="195px" height="176" />
                    </div>
                </div>
            </div>
        </>
    )
}