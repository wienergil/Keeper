import React from "react";
const date = new Date();


function Footer(){
    return (<footer>
        <p >Copyright ⓒ {getCurrentYear()}</p>
    </footer>)
}
function getCurrentYear(){
    return date.getFullYear();
}

export default Footer;