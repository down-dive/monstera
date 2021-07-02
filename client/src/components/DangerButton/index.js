import React from 'react';

function DangerButton() {
    const handleDanger = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            console.log('Your current position id: ');
            console.log(`Latitude: ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
        }, (err) => {
            console.warn(`ERROR(${err.code}) : ${err.message}`);
        });
    }
    return (
        <div style={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{height: '100px', width: '100px', backgroundColor: 'green', borderRadius: 50}} onClick={handleDanger}>
            </div>
        </div>
    )
}

export default DangerButton;