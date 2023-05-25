import React from 'react';

const Map = () => {
    return (
        <div className="col-md-12 text-center mt-3">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3346561.1574214622!2d7.676157518966375!3d35.00354763175593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scamping%20tunisie!5e0!3m2!1sfr!2stn!4v1649609193358!5m2!1sfr!2stn"
                width="80%"
                height="450"
                style={{ border: 0, borderRadius: '30px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default Map;
