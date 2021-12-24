// Import Style
import './Index.css';
import Logo from '../../Images/DumbGram.png';
import Edit from '../../Images/edit.png';
import Profile from '../../Images/Jaya Miko.jpg';

export default function IndexPage() {

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
            }}
        >
            {/* Side Bar Profile */}
            <div className="side-profile">
                <img src={Logo} alt="logo" width="119px" height="39px" />

                {/* Image Profile */}
                <div
                    style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                    <div className="circle">
                        <img
                            src={Profile}
                            alt="Profile"
                            width="150px"
                            height="150px"
                            style={{
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                    <div>
                        <img src={Edit} alt="edit" width="24px" height="24px"
                            style={{ position: 'relative', left: '50px' }}
                        />
                    </div>
                </div>
                {/* Info Profile */}
                <h1 className="name">Jaya Miko</h1>
                <h4 className="username">@mjaya10</h4>

                <div style={{
                    height: '50px',
                    borderRight: 'solid white 1px'
                }}>
                    <div style={{ borderRight: 'solid white 1px' }}>
                        <h4 className="info"></h4>
                        <p className="valueInfo"></p>
                    </div>
                    <div>
                        <h4 className="info"></h4>
                        <p className="valueInfo"></p>
                    </div>
                    <div>
                        <h4 className="info"></h4>
                        <p className="valueInfo"></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            {/* Container Feed */}
            <div className="main">

            </div>
        </div >
    )
}