import "./MpIconButton.css"
import MpIcon from "./MpIcon";

type MpIconButtonProps = {
    type: "primary" | "outlined" | "text",
    icon: string,
    onClick: () => void,
    className?: string
}

export default function MpIconButton(props: MpIconButtonProps) {
    return (
        <div onClick={props.onClick} className={"mp-icon-button "+props.className} data-type={props.type}>
            <MpIcon icon={props.icon}/>
        </div>
    )
}