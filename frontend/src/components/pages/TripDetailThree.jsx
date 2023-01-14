import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import { useStyles } from "../utils";
import axios from "axios";

const TripDetailThree = ({ title, content, image, price, userName, id }) => {
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
                    title='The VIP'
                />
                <CardMedia
                    component="img"
                    height="194"
                    // image={image}
                    src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                        High Rollers, come along! The VIP package isn't designed for your average Joe, it's for those who want to experience peak degeneracy. The VIP comes with access to a luxury suite and access to the hottest clubs!
                    </Typography>
                    <Typography>Price:$4999</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default TripDetailThree;
