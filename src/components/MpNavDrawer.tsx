import "./MpNavDrawer.css"
import React, {useState} from "react";
import MpIconButton from "./MpIconButton";

type MpNavDrawerProps = {
    items: string[],
    onItemSelected: (index: number) => void,
    initialSelected?: number,
    isCollapsible?: boolean,
    className?: string
}

export default function MpNavDrawer(props: React.PropsWithChildren<MpNavDrawerProps>) {
    const [selectedIndex, setSelectedIndex] = useState<number>(props.initialSelected || 0)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(props.isCollapsible || false)

    return (
        <div className={"mp-nav-drawer "+props.className} data-collapsed={isCollapsed}>
            <MpIconButton
                className={"mp-nav-drawer-openbtn"}
                type={"text"} icon={"menu"}
                onClick={()=>setIsCollapsed(!isCollapsed)}
            />
            {!isCollapsed &&
                <>
                    {props.children}
                    {props.items.map((item, index) => {
                        return (
                            <div key={index}
                                 className={"mp-nav-drawer-item "+(selectedIndex === index ? "selected" : "")}
                                 onClick={() => {setSelectedIndex(index); props.onItemSelected(index)}}
                            >
                                {item}
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}