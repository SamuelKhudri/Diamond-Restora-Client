import React from 'react';
import seo from '../../../image/seo.jpg';
import picS from '../../../image/seosign.png';
import licens from '../../../image/license.jpg';
import office from '../../../image/office.jpg';

const DashHome = () => {
    return (
        <div className="seo-back">
            <div className="container">
                <div className="row design">
                    <div className="col-lg-6">
                        <img style={{ borderRadius: "5px", marginTop: "10px" }} className="img-fluid" src={seo} alt="" />
                    </div>
                    <div className="pt-5 col-lg-6 ">
                        <h1 style={{ fontSize: "50px", color: "white" }}>CEO TALK</h1>
                        <h4 style={{ color: "white" }}>Pk Smith Hartik </h4>
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
                <div className="row design d-flex">
                    <div className="col-lg-12">
                        <img style={{ borderRadius: "5px", marginTop: "10px", height: "200px", width: "250px" }} src={licens} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashHome;