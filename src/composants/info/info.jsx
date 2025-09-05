import { Link } from "react-router-dom";
import { useState } from "react";
import FetchData from "../fetchData";
import InfoList from "./infoList";
import { Button } from "react-bootstrap";
import Url from "../../url";

const Info = () => {
    const url = Url();
    const { data: info } = FetchData(`${url}/info`); 

    // Define an array of sections with their types and titles
    const sections = [
        { type: "d\u00e9roulement", title: "Le déroulement" },
        { type: "Venir", title: "Venir" },
        { type: "surPLace", title: "Sur place" },
        { type: "Interdits", title: "Les interdits" },
        { type: "handi", title: "Accéssibilité" },
        { type: "revente", title: "Revente de billets" },
    ];

    // State to manage which section is open
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index); // Toggle the section
    };

    return (
        <div className="information">
            <ul className="ulInfo">
                {sections.map((section, index) => (
                    <li className="liInfo" key={index}>
                        <button
                            className="btnInfo"
                            onClick={() => toggleSection(index)}
                        >
                            {section.title}
                            <span className="btnPlus">+</span>
                        </button>
                        <h6 className={openSection === index ? "open" : ""}>
                            <li>
                                {info && (
                                    <InfoList
                                        info={info.filter(
                                            (item) => item.type === section.type
                                        )}
                                    />
                                )}
                            </li>
                        </h6>
                    </li>
                ))}
            </ul>
            <div className="btnBox">
                <Button className="btnretour">
                    <Link className="nav-link" to="/">retour</Link>
                </Button>
            </div>
        </div>
    );
};

export default Info;