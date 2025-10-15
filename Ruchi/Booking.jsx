import {useLocation} from 'react-router';
export default function book(){
    const location = useLocation();
    const cards = location.state;
    if(!cards){
        return <div>No booking details available.</div>;
    }

    return (
      <div className='container mt-3 text-center border rounded'>
        
        <div className='d-flex justify-content-center'>
          <img className=' border-dark rounded justify-content-center' src={cards.img} alt={cards.title} style={{ maxWidth: "500px", height: "200px"}}/>
        </div>

        <h1 className='mt-1'>{cards.title} </h1>
        
        <hr className='height-100% mb-9'/>

        <div>
          <div className='m-1 justify-content-start' style={{ width: "100%", height: "100%", margin: "1px" ,backgroundColor: "#ddffd6ff"}}>
            <h4><b>Duration : </b></h4>
            <h5>{cards.duration}</h5>
            <h4><b>Schedule : </b></h4>
            <h5>{cards.schedule}</h5>
            <h4><b>Timing : </b></h4>
            <h5>{cards.timing}</h5>
          </div>

          <div className='mt-3 justify-content-start' style={{width: "100%", height: "100%", margin: "1px"}}>
            <h4><b>Places covered :</b></h4>
            <h5 className='mt-2 p-2'>{cards.placesCovered}</h5>
          </div>

          <div className='mt-1 justify-content-start' style={{width: "100%", height: "100%", margin: "1px",backgroundColor: "#ddffd6ff"}}>
            <h4>Prices</h4>
            <h6>Adult - Rs.{cards.adultPrice}</h6>
            <p>Total - Rs.{cards.totalPrice}</p>
            <p>Child(between 5 to 10) - {cards.childPrice}</p>
            <p>Total - Rs.{cards.totalChildPrice}</p>
            <p>Child(below 5) - Free</p>
          </div>
          
          <div className='mt-3 mb-3'>
            <button className='btn btn-primary border-dark'>Book</button>
          </div>
        </div>
      </div>
    );
}
// //this page is displayed when user click on card in tour page.
































// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import axios from "axios";

// function TourDetail() {
//   const { id } = useParams();
//   const [tour, setTour] = useState(null);

//   useEffect(() => {
//     axios.get(`http://127.0.0.1:8000/api/tours/${id}/`)
//       .then(response => setTour(response.data))
//       .catch(error => console.error(error));
//   }, [id]);

//   if (!tour) return <p>Loading...</p>;

//   return (
//     <div className="container mt-4">
//       {/* <img src={tour.image} alt={tour.name} className="img-fluid" /> */}
//       <h2>{tour.name}</h2>
//       <p>{tour.description}</p>
    
//       <p><b>Duration:</b> {tour.duration}</p>
//       <p><b>Schedule:</b>{tour.Schedule}</p>
//       <p><b>Timing:</b>{tour.Timing}</p>

//       <p><b>Places Covered:</b>{tour.places_covered}</p>

//       <p><b>Price:</b>₹{tour.price}</p>
//       <p><b>Adult Price:</b> {tour.adult_price}</p>
//       <p><b>Child Price:</b> {tour.child_price}</p>
//       <button className="btn btn-primary">Book Now</button>
//     </div>
//   );
// }

// export default TourDetail;
