import React from "react";

type MpDialogProps = {
    isVisible: boolean,
    title?: string,
    className?: string,
}

export default function MpDialog(props: React.PropsWithChildren<MpDialogProps>) {

    return (
        <div className="mp-dialog-wrapper" data-visible={props.isVisible}>
          <div className={"mp-dialog "+props.className} data-visible={props.isVisible}>
              { props.title &&
                  <div className="mp-dialog-title">{props.title}</div>
              }
              { props.children }
          </div>
        </div>
    )
}