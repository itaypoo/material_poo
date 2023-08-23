import {ChangeEvent, useEffect, useState} from "react";
import MpIcon from "./MpIcon";

type MpCheckboxProps = {
    onChange: (checked: boolean) => void,
    checkedInitially?: boolean,
    className?: string,
}

export default function MpCheckbox(props: MpCheckboxProps) {
    const [isChecked, setIsChecked] = useState(!!props.checkedInitially);

    useEffect(() => {
        setIsChecked(props.checkedInitially || false)
    }, [props.checkedInitially]);

    const handleChange = () => {
        setIsChecked(!isChecked);
        props.onChange(!isChecked);
    }

    return (
        <label className={"mp-checkbox "+props.className} data-checked={isChecked} onClick={handleChange}>
            <div className={"mp-checkbox-thumb"}/>
            <MpIcon icon="check"/>
        </label>
    );
}

