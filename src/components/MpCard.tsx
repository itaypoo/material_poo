import React from "react";
import "./MpCard.css"

type MpCardProps = {
    type: "primary" | "filled" | "outlined",
    isHeader?: boolean,
    isClickable?: boolean,
    className?: string
}

export default function MpCard(props: React.PropsWithChildren<MpCardProps>) {
    return(
        <div className={"mp-card "+props.className} data-type={props.type} data-header={props.isHeader}>
            { props.children }
        </div>
    )
}