import {useState} from "react";
import MpIcon from "./MpIcon";

type MpNavRailProps = {
    items: MpNavRailItem[],
    fabIcon?: string,
    fabOnClick?: () => void,
    itemOnClick?: (id: string) => void,
    initialSelectedId: string,
    className?: string
}

type MpNavRailItem = {
    icon: string,
    label: string,
    id: string
}

export default function MpNavRail(props: MpNavRailProps) {
    const [selectedId, setSelectedId] = useState(props.initialSelectedId);

    return (
        <div className={"mp-nav-rail "+props?.className}>
            { props.fabIcon &&
                <div className="mp-nav-rail-fab">
                    <MpIcon icon={props.fabIcon}/>
                </div>
            }

            { props.items.map((item, index) => {
                return (
                    <div className="mp-nav-rail-item" key={index} data-selected={item.id === selectedId}
                         onClick={() => {setSelectedId(item.id); props.itemOnClick && props.itemOnClick(item.id)}}
                    >
                        <div className="icon-wrapper"><MpIcon icon={item.icon}/></div>
                        <span className="label">{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
}