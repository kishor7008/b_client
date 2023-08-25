// import React, { useEffect, useState } from "react";
// import "../../Styles/allUser.css";
// import { Link } from "react-router-dom";
// import { AiFillDelete } from "react-icons/ai";
// import { FaSearch } from "react-icons/fa";
// import { apiurl } from "../../App";
// import { BsJustify } from "react-icons/bs";

// export const AllUser = () => {
//   const [blogData, setBlogData] = useState([]);

//   // const dataUser = [
//   //   {
//   //     name: "Bhagwan Singh",
//   //     email: "aaaa@gamil.com",
//   //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
//   //   },
//   //   {
//   //     name: "Neeraj Singh",
//   //     profile: "Jobsmart HR Solutions",
//   //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
//   //   },
//   //   {
//   //     name: "Bhagwan Singh",
//   //     email: "aaaa@gamil.com",
//   //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
//   //   },
//   //   {
//   //     name: "Bhagwan Singh",
//   //     email: "aaaa@gamil.com",
//   //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
//   //   },
//   //   {
//   //     name: "Neeraj Singh",
//   //     email: "aaaa@gamil.com",
//   //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
//   //   },
//   //   {
//   //     name: "Bhagwan Singh",
//   //     email: "aaaa@gamil.com",
//   //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
//   //   },
//   // ];

//   const getData = () => {
//     fetch(`${apiurl}/getAll/user`)
//       .then((res) => res.json())
//       .then((data) => setBlogData(data.response))
//       .catch((error) => console.log("error", error));
//   };
//   useEffect(() => {
//     getData();
//   }, []);
//   console.log("blogData", blogData);

//   return (
//     <div className="allUser_container">
//       {/* <div> */}
//       <div>
//         <h2>All Blog User Here ...</h2>
//       </div>

//       <div style={{ textAlign: "center" }}>
//         <input style={{ width: "50%", margin: "20px", padding: "10px", borderRadius: "20px" }} />
//         <button className="btn btn-primary" style={{ padding: "10px" }}>Search..</button>
//       </div>
//       {/* .................... */}
//       {/* </div> */}
//       <ul className="responsive-table">
//         <li className="table-header">
//           <div className="col ">User Image</div>
//           <div className="col ">User Name</div>
//           <div className="col ">email Id</div>
//           <div className="col ">Phone Number</div>
//           <div className="col ">Delete</div>
//         </li>
//         {blogData?.map((el, index) => (
//           <Link to={`/user/profile/${el._id}`} style={{ textDecoration: "none",color:"black",fontSize:"15px " }}>
//             <li className="table-row " key={index}>
//               <div className="col col-1" style={{margin:"auto"}}>
//                 <img
//                   className="userImg"
//                   src={
//                     "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
//                   }
//                   width={"20px"}
//                   height={"20px"}
//                   alt="logo _error"
//                 />
//               </div>
//               <div className="col col-2" data-label=" Name" style={{ margin: "auto" }} >
//                 {el.name}{" "}
//               </div>
//               <div className="col col-3" data-label="Email Id" style={{ margin: "auto" }}>
//                 {el.email}
//               </div>
//               <div className="col col-3" data-label="Email Id" style={{ margin: "auto" }}>
//                 {el.phoneNumber ? el.phoneNumber : "No Number"}
//               </div>
//               <div className="col col-3" style={{ fontSize: "30px" }} style={{ margin: "auto" }}>
//                 <AiFillDelete />
//               </div>
//             </li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiurl } from '../../App';
import './alluser.css'
import { useNavigate } from "react-router-dom";
export function AllUser() {
  const [blogData, setBlogData] = useState([]);
  const navigate = useNavigate()

  const getData = () => {
    fetch(`${apiurl}/getAll/user`)
      .then((res) => res.json())
      .then((data) => setBlogData(data.response))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  const UserProfile = (id) => {
    navigate(`/user/profile/${id}`)
  }

  const userDelete = (id) => {
    console.log(id)
  }

  return (
    <>
      <div style={{ height: "10vh" }}></div>
      <div class="box-wrap" >
        <div style={{ width: "90%", margin: "auto" }}>
          <table>
            <thead>
              <tr >
                <th>SL no.</th>
                <th>Name</th>
                <th>phone no.</th>
                <th>Email</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {
                blogData ? blogData.map((item, index) => (
                  <>

                    <tr style={{ cursor: "pointer" }}>

                      <td onClick={() => UserProfile(item._id)}>{index + 1}</td>
                      <td onClick={() => UserProfile(item._id)}>{item.name}</td>
                      <td onClick={() => UserProfile(item._id)}>{item.phoneNumber ? item.phoneNumber : "NA"}</td>
                      <td onClick={() => UserProfile(item._id)}>{item.email}</td>
                      <td onClick={() => userDelete(item._id)}>Delete</td>
                    </tr>

                  </>
                )) :
                  <div>Not Data found</div>
              }

            </tbody>
          </table>
        </div>


      </div>
    </>
  )
}
