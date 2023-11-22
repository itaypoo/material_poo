import React, {useState} from "react";

type MpTextboxProps = {
    hint: string,
    onTextChange: (text: string) => void,
    initialText?: string,
    className?: string,
}

export default function MpTextarea(props: React.PropsWithChildren<MpTextboxProps>) {
    const [text, setText] = useState<string>(props.initialText || "")

    return (
        <div className={"mp-textarea "+props.className}>
            <textarea placeholder={"a"} value={text}
                   onChange={(event) => {
                       setText(event.target.value);
                       props.onTextChange(event.target.value);
                   }}
            />
            <label>{props.hint}</label>
        </div>
    )
}