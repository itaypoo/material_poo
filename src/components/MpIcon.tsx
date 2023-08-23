import React from "react";

type MpIconProps = {
    icon: string,
    className?: string
}

export default function MpIcon(props: MpIconProps) {
    return (
        <>
            <span className={"material-symbols-rounded mp-icon "+props.className}>
                {props.icon}
            </span>
        </>
    )
}