import React from "react";
import MUI from "../utility/muiImports";

const Home: React.FC = () => {

    const cardStyle: Record<string, any> = {
        height: '100%',
        width: '50%',
        border: '2px solid lightgray',
        borderRadius: '3px',
    }

    return (
        <>
            <MUI.Box>Quick Note</MUI.Box>
            <MUI.Box sx={{ minHeight: "100vh", display: "flex", p: 2, pt: 7 }}>
                <MUI.Card sx={cardStyle}>
                    <MUI.CardContent>
                        Note update area
                    </MUI.CardContent>
                </MUI.Card>
                <MUI.Card sx={cardStyle}>
                    <MUI.CardContent>
                        All note list area
                    </MUI.CardContent>
                </MUI.Card>
            </MUI.Box>
        </>
    )
};

export default Home;