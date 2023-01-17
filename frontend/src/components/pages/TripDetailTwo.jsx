import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TripDetailTwo = ({ title, content, image, price, userName, id }) => {
   
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
                    title='The Deluxe Package'
                />
                <CardMedia
                    component="img"
                    height="194"
                    // image={image}
                    src="https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                />

                <CardContent>
                    <hr />
                    <br />
                    <Typography
        
                        variant="body2"
                        color="text.secondary"
                    >
                        The Deluxe Package is for those who want to get away in style! Enjoy the luxuries of a beach front stay, complete with food, drink, and entertainment!
                    </Typography>
                    <Typography>Price:$999</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default TripDetailTwo;
