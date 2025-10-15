import './style.css'; 
import { useNavigate } from 'react-router';
export default function tour(){

  const cards = [
        {id: 1, title: "Munnar", img: "https://www.hillsandwills.com/blog_images/89554.jpg", duration: "2 day", schedule: "Saturday-Sunday", timing: "6:00 AM - 8:00 PM", placesCovered: "Tea Plantations, Anamudi Peak, Eravikulam National Park", adultPrice: 1500, totalPrice: 1500, childPrice: 750, totalChildPrice: 750},
        {id: 2, title: "Wayanad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiV2T7EhRvFl17B-UFnXNUA3jm_04M0qUWlA&s", duration: "3 day", schedule: "Friday-Sunday", timing: "6:00 AM - 8:00 PM", placesCovered: "Edakkal Caves, Banasura Sagar Dam, Chembra Peak", adultPrice: 1900, totalPrice: 1900, childPrice: 850, totalChildPrice: 850},
        {id: 3, title: "Thekkedy", img: "https://planashleygo.com/wp-content/uploads/2024/06/Thekkady.jpg", duration: "7 day", schedule: "Daily", timing: "6:00 AM - 8:00 PM", placesCovered: "Periyar Wildlife Sanctuary", adultPrice: 1600, totalPrice: 1600, childPrice: 800, totalChildPrice: 800},
        {id: 4, title: "Vagamon", img: "https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Places-To-Visit-In-Vagamon.jpg", duration: "2 day", schedule: "Saturday-Sunday", timing: "6:00 AM - 8:00 PM", placesCovered: "Pine forests, meadows, paragliding", adultPrice: 1100, totalPrice: 1100, childPrice: 450, totalChildPrice: 450}
            
    ];
  const navigate = useNavigate();
  const handleCardClick = (card) => {
    navigate("/booking/id", {state: card});
  };
    return (
      <>
        {/* Tour categories */}

        <div className="container my-4">
          <h3 className="mb-4 fw-bold mt-4">Hill Stations</h3>
          <div className="row g-4">
            
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}} onClick={() => handleCardClick(cards[0])}>
                <img
                  src="https://www.hillsandwills.com/blog_images/89554.jpg"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Munnar (Idukki District) – Tea plantations, Anamudi Peak, Eravikulam National Park
                  </p>
                </div>
              </div>
            </div>

            
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}} onClick={() => handleCardClick(cards[1])}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiV2T7EhRvFl17B-UFnXNUA3jm_04M0qUWlA&s"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Wayanad (Wayanad District) – Edakkal Caves, Banasura Sagar Dam, Chembra Peak.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}} onClick={() => handleCardClick(cards[2])}>
                <img
                  src="https://planashleygo.com/wp-content/uploads/2024/06/Thekkady.jpg"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Thekkady (Idukki District) – Periyar Wildlife Sanctuary.
                  </p>
                </div>
              </div>
            </div>

            
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}} onClick={() => handleCardClick(cards[3])}>
                <img
                  src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/03/Places-To-Visit-In-Vagamon.jpg"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Vagamon (Idukki/Kottayam Districts) – Pine forests, meadows, paragliding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container my-4 ">
          <h3 className="mb-4 mt-5 fw-bold">Backwater and HouseBoats</h3>
          <div className="row">
            
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY7IFWxi1mX2LIhz7ZA2s1IiJ2Y_lsB2XUOg&s"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Alleppey (Alappuzha District) – Houseboat cruises, Vembanad Lake.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mWpkmVFSa6Pias_pzDP1q6k9OrcRami5ew&s"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Kumarakom (Kottayam District) – Bird Sanctuary, backwater resorts.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}}>
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/48/3f/34/kumarakom-sree-kumaramangalam.jpg?w=1400&h=1400&s=1"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Kollam (Kollam District) – Ashtamudi Lake, Munroe Island.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
              <div className="card shadow-sm custom-hover" style={{cursor: "pointer", backgroundColor: "#fff8f8ff"}}>
                <img
                  src="https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkuttanad-1728568612_f6860bb3d5c7d33b0493.webp&w=3840&q=75"
                  className="card-img-top"
                  alt="Kerala"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <p className="card-text fw-bold">
                    Kuttanad (Alappuzha District) – “Rice Bowl of Kerala”, below sea-level farming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import axios from "axios";

// export default function Tour (){
//   const [tours, setTours] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://127.0.0.1:8000/api/tour/")
//       .then(res => setTours(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center">Hill Stations</h2>
//       <div className="row">
//         {tours.map(tour => (
//           <div 
//             key={tour.id} 
//             className="col-md-3 mb-4"
//             onClick={() => navigate(`/booking/${tour.id}`)}
//             style={{ cursor: "pointer" }}
//           >
//             <div className="card h-100 shadow-sm">
//               {/* <img src={tour.image} className="card-img-top" alt={tour.name} /> */}
//               <div className="card-body text-center">
//                 <h5 className="card-title">{tour.name}</h5>
//                 <p className="card-text">{tour.description}</p>
//                 <p className="card-text">{tour.price}</p>
//                 <p className="card-text">{tour.duration}</p>
//                 <p className="card-text">{tour.places_covered}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


