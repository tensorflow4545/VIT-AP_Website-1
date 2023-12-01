import React from 'react'
import "./CampusHeader.css";

const CampusHeader = () => {
    return (
        <div className="max-w-[1560px] w-[100%] min-h-[400px] h-[100%] mx-auto">
            <div
                style={{ backgroundImage: `url("./convocation.jpeg")` }}
                className="w-[100%] h-[400px] bg-center bg-cover relative"
            >
                <div className="curve4">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default CampusHeader
