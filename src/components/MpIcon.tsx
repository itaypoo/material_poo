import React from "react";
import "./MpIcon.css"

type MpIconProps = {
    icon: string,
    className?: string
}

export default function MpIcon(props: MpIconProps) {
    return (
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
            <span className={"material-symbols-rounded mp-icon "+props.className}>
                {props.icon}
            </span>
        </>
    )
}