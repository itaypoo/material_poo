import "./MpButton.css";
import React from "react";

type MpButtonProps = {
    type: "filled" | "outlined" | "text";
    onClick?: () => void,
    isHuge?: boolean,
    className?: string,
}

export default function MpButton(props: React.PropsWithChildren<MpButtonProps>) {
    return (
        <button
            className={"mp-button "+props.className}
            data-type={props.type} data-huge={props.isHuge}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}