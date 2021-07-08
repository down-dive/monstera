import './css/style.css'

const Welcome = () => {
    return (
        <>
        <img className="logo" src="../img/monstera_logo.png" alt="monstera logo"/>
        <div className='welcome'>
            <div>Welcome to Monstera Application! </div> 
            <p>It is always important to water your plants and stay healthy.
                This application provides you a safe and healthy environment in which you can grow your plants and feel empowered.
                Remember safety doesn't happen by accident. Be safe around your plants!</p>
        </div>
        </>
    );
};

export default Welcome;