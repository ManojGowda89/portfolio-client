import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Linkedin() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            window.location.href = "https://www.linkedin.com/in/manojgowdabr89/";
        }, 1500); // 2-second delay for demonstration
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#000' }}>
            {loading && (
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only">  </span>
                </div>
            )}
        </div>
    );
}
