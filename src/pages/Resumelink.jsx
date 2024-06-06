import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Resumelink() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            window.location.href = "https://firebasestorage.googleapis.com/v0/b/projects-4f71b.appspot.com/o/manojgowda8951.pdf?alt=media&token=336d8791-29f6-4819-bdd8-52a090482696";
        }, 1500); // 2-second delay for demonstration
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#000' }}>
            {loading && (
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
            )}
        </div>
    );
}
