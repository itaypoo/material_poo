import "./MpPageLayout.css"
import React from "react";

type MpPageLayoutProps = {
    gap?: string,
    hasExtraPadding?: boolean,
    className?: string
}

export default function MpPageLayout(props: React.PropsWithChildren<MpPageLayoutProps>) {
    return(
        <div
            className={"mp-page-layout "+props.className}
            data-extra-padding={!!props.hasExtraPadding}
            style={{gap: props.gap || "12px"}}
        >
            {props.children}
        </div>
    )
}