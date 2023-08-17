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

function App() {
    const [snackbarMsg, setSnackbarMsg] = useState("")
    const lessonsArr = [
        "שיעור ראשון - תכנות ריאקט",
        "שיעור שני - מה זה משתנים",
        "שיעור שלישי - מה זה פונקציות",
        "שיעור רביעי - מה זה קומפוננטות",
        "שיעור חמישי - מה זה פרופס",
        "שיעור שישי - מה זה סטייט",
        "שיעור שביעי - מה זה קונטקסט",
        "שיעור שמיני - מה זה רידאקס",
        "שיעור תשיעי - מה זה ריאקט נייטיב",
        "שיעור עשירי - מה זה ריאקט נייטיב",
        "שיעור אחד עשר - מה זה ריאקט נייטיב",
        "שיעור שנים עשר - מה זה ריאקט נייטיב",
        "שיעור ראשון - תכנות ריאקט",
        "שיעור שני - מה זה משתנים",
        "שיעור שלישי - מה זה פונקציות",
        "שיעור רביעי - מה זה קומפוננטות",
        "שיעור חמישי - מה זה פרופס",
        "שיעור שישי - מה זה סטייט",
        "שיעור שביעי - מה זה קונטקסט",
        "שיעור שמיני - מה זה רידאקס",
        "שיעור תשיעי - מה זה ריאקט נייטיב",
        "שיעור עשירי - מה זה ריאקט נייטיב",
        "שיעור אחד עשר - מה זה ריאקט נייטיב",
        "שיעור שנים עשר - מה זה ריאקט נייטיב",
        "שיעור ראשון - תכנות ריאקט",
        "שיעור שני - מה זה משתנים",
        "שיעור שלישי - מה זה פונקציות",
        "שיעור רביעי - מה זה קומפוננטות",
        "שיעור חמישי - מה זה פרופס",
        "שיעור שישי - מה זה סטייט",
        "שיעור שביעי - מה זה קונטקסט",
        "שיעור שמיני - מה זה רידאקס",
        "שיעור תשיעי - מה זה ריאקט נייטיב",
        "שיעור עשירי - מה זה ריאקט נייטיב",
        "שיעור אחד עשר - מה זה ריאקט נייטיב",
        "שיעור שנים עשר - מה זה ריאקט נייטיב",
    ]

    return (
        <div style={{display: "grid", gridTemplateColumns: "auto 1fr"}} dir={"rtl"}>
            <MpNavDrawer isCollapsible items={lessonsArr} onItemSelected={(index)=>{setSnackbarMsg(lessonsArr[index])}}>
                <MpText scale="subtitle">מטריאל פו</MpText>
            </MpNavDrawer>
            <MpPageLayout>
                <MpText scale="heading">מטריאל פו</MpText>
                <MpText scale="subtitle">מטאירל יו לייק קומפוננטס פור ריאקט</MpText>
                <MpButton type="filled">שלום עולם</MpButton>
                <MpSwitch/>

                <MpCard type="filled">
                    <MpText scale="subtitle">זהו קלף</MpText>
                    <MpText scale="body">יש בו מלא דברים מגניבים.</MpText> <br/>
                    <MpButton type="outlined">
                        <MpIcon icon='add'/>
                        הגדרות
                    </MpButton>
                </MpCard>

                <MpIconButton type={"text"} icon={"navigate_next"} onClick={()=>{}}/>
                <MpTextbox hint={"שם פרטי"} onTextChange={setSnackbarMsg}/>
                <MpSnackbar message={snackbarMsg}/>
            </MpPageLayout>
        </div>
    );
}

export default App;
