import React from 'react';
import './Designer.css';

import picD from '../../../image/designer pic.png';
import picS from '../../../image/signature.png';

const Designer = () => {
    return (
        <div className="designer">
            <div className="container">
                <div className="row design">
                    <div className="col-lg-6">
                        <img style={{ borderRadius: "5px" }} className="img-fluid" src={picD} alt="" />
                    </div>
                    <div className="pt-5 col-lg-6 ">
                        <h1 style={{ fontSize: "50px", color: "white" }}>Our head Organizer</h1>
                        <h4 style={{ color: "white" }}>Anthony Malia</h4>
                        <p style={{ color: "white" }}>cites such great thinkers as Mariano Fortuny, Carlo Scarpa, and Gio Ponti as the
                            masterminds who have influenced her work, but she gives the most credit to her parents.
                            Her father’s bedtime stories and her mother’s work as a fashion designer, writer,
                            and painter inspired her to embrace her own creativity. Now, she “cannot create a
                            project without telling a story, otherwise it feels empty and meaningless,” she says.
                            That approach has paid off.</p>
                        <img style={{ borderRadius: "5px" }} className="img-fluid w-25 mb-2" src={picS} alt="" />
                        <button className="btn">Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;