import React, {useState} from "react";
import MpIcon from "./MpIcon";

type MpNavDrawerProps = {
    items: string[],
    onItemSelected: (index: number) => void,
    itemIcons?: string[],
    autoNumberItems?: boolean,
    initialSelected?: number,
    className?: string
}

export default function MpNavDrawer(props: React.PropsWithChildren<MpNavDrawerProps>) {
    const [selectedIndex, setSelectedIndex] = useState<number>(props.initialSelected || 0)

    return (
        <div className={"mp-nav-drawer "+props.className}>
            {props.children}
            {props.items.map((item, index) => {
                return (
                    <div key={index}
                         className={"mp-nav-drawer-item "+(selectedIndex === index ? "selected" : "")}
                         onClick={() => {setSelectedIndex(index); props.onItemSelected(index)}}
                    >
                        { props.itemIcons && props.itemIcons[index] &&
                            <MpIcon icon={props.itemIcons[index]}/>
                        }
                        { props.autoNumberItems &&
                            <p>{index+" | "+item}</p>
                        }
                        { !props.autoNumberItems &&
                            <p>{item}</p>
                        }
                    </div>
                )
            })}
        </div>
    )
}