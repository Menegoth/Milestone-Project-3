/*import React, { useEffect, useState } from "react";
import axios from "axios";


const TripDetailLayout = () => {
  const [tripDetail, setTripDetail] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("https://milestone-project-3-backend.azurewebsites.net/posts}")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setTripDetail(data.TripDetailLayout));
  }, []);
  console.log(tripDetail);
  return (
    <div>
     
          <TripDetailLayout
            id={tripDetail.id}
            isUser={localStorage.getItem("userId") === tripDetail.user.id}
            title={tripDetail.title}
            content={tripDetail.content}
            imageURL={tripDetail.image}
            userName={tripDetail.user.name}
          />
        
    </div>
  );
};

export default TripDetailLayout;*/