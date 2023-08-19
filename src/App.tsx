import React, {useRef, useState} from 'react';
import './components/globals.css';
import MpText from "./components/MpText";
import MpButton from "./components/MpButton";
import MpSwitch from "./components/MpSwitch";
import MpCard from "./components/MpCard";
import MpIcon from "./components/MpIcon";
import MpTextbox from "./components/MpTextbox";
import MpPageLayout from "./components/MpPageLayout";
import MpNavDrawer from "./components/MpNavDrawer";
import MpSnackbar from "./components/MpSnackbar";
import MpIconButton from "./components/MpIconButton";
import MpCheckbox from "./components/MpCheckbox";
import MpStarRating from "./components/MpStarRating";
import MpDialog from "./components/MpDialog";

function App() {
    const [snackbarMsg, setSnackbarMsg] = useState("")
    const [dialogShown, setDialogShown] = useState(false)
    const lessonsArr = [
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
        "Material Poo", "Material Poo",
    ]
    const lessonIconArr = lessonsArr.map((lesson, index) => {
        return index < 5 ? "check_circle" : "circle"
    })
    const isSmallScreen = useRef(window.innerWidth < 600)

    return (
        <div dir={"ltr"}>
            { !isSmallScreen.current &&
                <MpNavDrawer items={lessonsArr} itemIcons={lessonIconArr} autoNumberItems
                             onItemSelected={(index)=>{setSnackbarMsg(lessonsArr[index])}}
                >
                    <MpText scale="subtitle">Material 3</MpText>
                </MpNavDrawer>
            }
            <MpPageLayout className={!isSmallScreen.current ? "mp-page-with-navbar-content" : ""}>
                <MpText scale="heading">Material 3</MpText>
                <MpText scale="subtitle">Material You like components for React</MpText>
                <MpButton type="filled">Hello world</MpButton>

                <MpCard type="outlined">
                    <MpText scale="subtitle">This is a card.</MpText>
                    <MpText scale="body">It holds many cool stuff.</MpText> <br/>
                    <MpButton type="outlined">
                        <MpIcon icon='upload'/>
                        Upload
                    </MpButton>
                </MpCard>

                <MpTextbox hint={"Email address"} onTextChange={setSnackbarMsg}/>
                <MpIconButton type={"text"} icon={"navigate_next"} onClick={()=>{}}/>
                <MpSnackbar message={snackbarMsg}/>
                <MpSwitch/>
                <MpCheckbox onChange={setDialogShown}/>
                <MpStarRating isEditable initialRating={5}/>

                <MpDialog isVisible={dialogShown} title="This is a dialog">
                    <MpText scale="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MpText>
                    <div className="mp-dialog-buttons">
                        <MpButton type={"outlined"} onClick={()=>{setDialogShown(false)}}>Cancel</MpButton>
                        <MpButton type={"filled"} onClick={()=>{setDialogShown(false)}}>Okay</MpButton>
                    </div>
                </MpDialog>
            </MpPageLayout>
        </div>
    );
}

export default App;
