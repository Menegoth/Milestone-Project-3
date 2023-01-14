import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../utils";
import axios from "axios";

const TripDetail = ({ title, content, image, price, userName, id }) => {
    const classes = useStyles();
    const navigate = useNavigate();
      const sendRequest = async () => {
        const res = await axios
          .get(`https://milestone-project-3-backend.azurewebsites.net/posts/${id}`)
          .catch((err) => console.log(err));
        const data = await res.data;
        return data;
      };
    
    
    return (
        <div>
            {" "}
            <Card
                sx={{
                    width: "40%",
                    margin: "auto",
                    mt: 2,
                    padding: 2,
                    boxShadow: "5px 5px 10px #ccc",
                    ":hover": {
                        boxShadow: "10px 10px 20px #ccc",
                    },
                }}
            >
                <CardHeader
                    avatar={
                        <Avatar
                            className={classes.font}
                            sx={{ bgcolor: "red" }}
                            aria-label="recipe"
                        >
                            {userName ? userName.charAt(0) : ""}
                        </Avatar>
                    }
                    title={title}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="image"
                />

                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        className={classes.font}
                        variant="body2"
                        color="text.secondary"
                    >
                        {content}
                    </Typography>
                    <Typography>Price:${price}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default TripDetail;
