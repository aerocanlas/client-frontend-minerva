import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../../helpers/ResetLocation";

export default class FooterLegal extends React.Component {
    render() {
        return (
            <ul className="footer-menu  flex-container flex-column">
                <h3>Legal</h3>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/privacy"
                    >
                        Privacy
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/refunds"
                    >
                        Refund Policy
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/terms"
                    >
                        Terms
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                                ? {
                                    textDecoration: "none",
                                    color: "#ff6240",
                                }
                                : {}
                        }
                        onClick={ResetLocation}
                        className="txt-white"
                        to="/cookies"
                    >
                        Cookie Policy
                    </NavLink>
                </li>
                

            </ul>
        );
    }
}
