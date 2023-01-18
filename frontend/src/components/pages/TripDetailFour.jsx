import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TripDetailThree = ({ title, content, image, price, userName, id }) => {
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
                    title='Royal Route'
                />
                <CardMedia
                    component="img"
                    height="194"
                    // image={image}
                    src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg"
                    alt="image"
                />

                <CardContent>
                    <hr />
                    <br />
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                         It's time to indulge and treat yourself like Royalty. Relax, dine, and explore like royalty in the tropical oasis of the Maldives islands. Our most exclusive package, curated for ManCations Members.
                    </Typography>
                    <Typography>Price:$4999</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default TripDetailThree;
