// Import Style
import './Index.css';
import { HomeIcon, CompasIcon, Edit, JayaMiko, DumbgramIcon } from '../../Images';

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
                <img src={DumbgramIcon} alt="logo" width="119px" height="39px" />

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
                            src={JayaMiko}
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

                <div className="info-profile">
                    <div style={{
                        paddingRight: '20px',
                        borderRight: '1px solid rgba(106, 106, 106, 0.3)',
                    }}>
                        <h4 className="info-heading">Post</h4>
                        <p className="valueInfo">84</p>
                    </div>
                    <div style={{
                        borderRight: '1px solid rgba(106, 106, 106, 0.3)',
                        paddingRight: '20px',
                    }}>
                        <h4 className="info-heading">Followers</h4>
                        <p className="valueInfo">1.2M</p>
                    </div>
                    <div style={{
                        paddingRight: '20px',
                    }}>
                        <h4 className="info-heading">Following</h4>
                        <p className="valueInfo">780</p>
                    </div>
                </div>

                <p className="bio">
                    Fullstack Javascript Developer at Dumbways.ID
                </p>

                <div className="navigate">
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        lineHeight: '40px',
                    }}>
                        <img src={HomeIcon} alt="icon-home" width="24px" height="24px" />
                        <span className="text-icon" style={{ marginLeft: '15px' }}>Feed</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        lineHeight: '40px',
                        paddingBottom: '10px',
                        borderBottom: '1px solid rgba(106, 106, 106, 0.3)'
                    }}>
                        <img src={CompasIcon} alt="icon-compas" width="24px" height="24px" />
                        <span className="text-icon" style={{ marginLeft: '15px' }}>Explore</span>
                    </div>
                </div>

                <div style={{
                    border: 'solid red 1px',
                    // height: '150px',
                    lineHeight: '40px'
                    // alignItems: 'center'
                }}>
                    <img src={HomeIcon} alt="icon-home" width="24px" height="24px" />
                    <span className="text-icon" style={{ marginLeft: '15px' }}>Feed</span>
                </div>
            </div>


            {/* Container Feed */}
            <div className="main">

            </div>
        </div >
    )
}