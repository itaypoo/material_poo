import MpIcon from "./MpIcon";

type MpIconButtonProps = {
    type: "primary" | "outlined" | "text",
    icon: string,
    isDisabled?: boolean,
    onClick?: () => void,
    className?: string
}

export default function MpIconButton(props: MpIconButtonProps) {
    return (
        <div
            onClick={props.isDisabled ? undefined : props.onClick}
            className={"mp-icon-button "+props.className}
            data-type={props.type}
            data-disabled={props.isDisabled}
        >
            <MpIcon icon={props.icon}/>
        </div>
    )
}