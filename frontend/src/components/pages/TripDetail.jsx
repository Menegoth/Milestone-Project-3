import React, {useState, useRef, useEffect} from 'react'
import { CardMedia, CardContent, Card, Typography } from '@mui/material'
import {useLocation, useNavigate, Link} from "react-router-dom"

function TripDetail(props) {
    //navigation to get ID
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.substring(7);
    console.log(id)

    //state variables
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const isMounted = useRef(false);

    //run once to fetch data from api
    useEffect(() => {
      async function getData() {
        const response = await fetch(` https://milestone-project-3-backend.azurewebsites.net/posts${id}`);
        const result = await response.json();
        setData(result);
        console.log(result);
      }

      getData();
    }, []);

    //run after first render to re-render main page
    useEffect(() => {
      if (isMounted.current) {
        setIsLoading(false)
      } else {
        isMounted.current = true;
      }
    }, [data])

    //handle submit on delete
    async function handleSubmit(event) {
      event.preventDefault();
      await fetch(`https://milestone-project-3-backend.azurewebsites.net/posts${id}`, {
        method: "DELETE"
      });

      navigate("/posts");
 
    }

    //renders if data not loaded
    if (isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    //main render
    return(
      <div className='post-details'> 
        
        <Card >
          <CardContent>
              <Typography gutterBottom variant="h4">
                <h1>{data.title}</h1>
              </Typography>
              <Typography gutterBottom variant="h6">
                <h4>By {data.username}</h4>
              </Typography>
              <hr></hr>
              <CardMedia
              component="img"
              height="400"
              width={900}
              image={`${data.image}`}
              alt="Post Image"
              />
              
              <Typography variant="body1">
              {data.post}
              
              </Typography>
              <hr></hr>
              
              <Typography varient='h4'>What do you think?</Typography>

              
          </CardContent>
        </Card>
      </div>
      
    )
  
  }

export default TripDetail