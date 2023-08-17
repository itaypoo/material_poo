import React from "react";
import './MpText.css';

type MpTextProps = {
    scale: "fineprint" | "body" | "subtitle" | "title" | "heading",
    className?: string
}

export default function MpText(props: React.PropsWithChildren<MpTextProps>) {
    return (
        <p className={"mp-text "+props.className} data-scale={props.scale}>
            {props.children}
        </p>
    )
}