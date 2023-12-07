import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Grid, Box, Card, CardContent, Typography, Button, TextField, Divider } from "@mui/material";

import partData from "../data/partData";
import rankData from "../data/rankData";
import predictData from "../data/predict";

const inter = Inter({ subsets: ["latin"] });

const statusMap: any = {
    1: "Pahele Amritapuri region mei participate to karna tha bhai 😥",
    2: "Sorry, you are not qualified for Amritapuri regionals 😔",
    3: "🎊 Congrats, you are qualified for Amritapuri regionals",
    4: "Itna to team bhi nhi tha bhai, kuch valid rank daalo 🤔",
};

export default function Home() {
    const [rank, setRank] = useState(0);
    const [status, setStatus] = useState(0);
    const [team, setTeam] = useState("");
    const [newrank, setNewrank] = useState(0);

    const predict = () => {
        let teamName = rankData.filter((item) => item.rank === rank);
        if (teamName.length === 0) {
            setStatus(4);
            setNewrank(0);
            setTeam("");
            return;
        }
        setTeam(`${teamName[0].team} - ${teamName[0].college}`);
        let isParticipated = partData.filter((item) => item.team === teamName[0].team);
        if (isParticipated.length === 0) {
            setStatus(1);
            setNewrank(0);
            return;
        }
        let isQualified = predictData.filter((item) => item.rank === rank);
        if (isQualified.length > 0) {
            setStatus(3);
            setNewrank(isQualified[0].newrank);
            return;
        }
        setStatus(2);
        setNewrank(0);
    };
    return (
        <Grid container spacing={2} sx={{ fontFamily: inter, display: "flex", justifyContent: "center" }}>
            <Grid item xs={11}>
                <Card sx={{ mt: 5 }}>
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div" fontWeight={700} mb={2}>
                            Enter your ICPC 2023 preliminary rank
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                            <TextField id="rank-input" label="Your Rank" size="small" variant="outlined" type="number" onChange={(e) => setRank(parseInt(e.target.value))} />
                            <Button variant="outlined" sx={{ ml: 2 }} onClick={predict}>
                                Predict
                            </Button>
                        </Box>
                        {status > 0 && (
                            <Typography
                                variant="body2"
                                sx={{
                                    border: "2px dashed #93b1e9",
                                    borderRadius: 5,
                                    padding: 2,
                                    backgroundColor: "#fafcff",
                                }}
                                component="div"
                                mt={2}
                            >
                                <span style={{ fontWeight: 700 }}>Prediction: </span> {statusMap[status]}
                                {newrank > 0 && <span style={{ fontWeight: 700 }}> - {newrank} / 250</span>}
                                <br />
                                {(status === 2 || status === 3 || status === 1) && <span style={{ fontSize: 12, color: "#555" }}>{team}</span>}
                            </Typography>
                        )}
                        <Divider sx={{ mt: 3, mb: 2 }} />
                        <Typography gutterBottom variant="subtitle2" component="div" fontWeight={700} mb={1}>
                            Prediction based on Amritapuri 2023 selection criteria
                        </Typography>
                        <Box>
                            <Typography variant="body2" component="div" mb={1}>
                                • Teams ranked 1 to 10 are selected first.
                            </Typography>
                            <Typography variant="body2" component="div" mb={1}>
                                • Teams ranked from 11, who solved at least 3 problems are invited with not more than 3 teams overall from the same institute.
                            </Typography>
                            <Typography variant="body2" component="div" mb={1}>
                                • After that, the top team from each institute who solved at least one problem is invited until available slots are filled. If the top team is already selected from an institute, it is skipped.
                            </Typography>
                            <Typography variant="body2" component="div" mb={1}>
                                • The remaining slots, if any, are filled according to rank order with a cap of max 3 overall from the same institute.
                            </Typography>
                            <Typography variant="body2" component="div" mb={1}>
                                • Assuming 250 slots are available for Amritapuri regionals.
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
