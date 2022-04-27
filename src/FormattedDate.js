import React from "react";

export default function FormattedDate(props) {
    console.log(props)
    if (props.time) {
        return "5am"
    } else if (props.day) {
        return "Funday"
    }
}