import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../utils";
import axios from "axios";

const TripDetailOne = ({ title, content, image, price, userName, id }) => {
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
                    np
                    title='The Basics'
                />
                <CardMedia
                    component="img"
                    height="194"
                    // image={image}
                    src="https://images.pexels.com/photos/1630039/pexels-photo-1630039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                        The Basics vacation package offers the perfect getaway for an affordable price! Enjoy the relaxing sounds of the forest and the gentle waves of your nearest lake with an all inclusive, weekend fishing trip!
                    </Typography>
                    <Typography>Price:$499</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default TripDetailOne;
