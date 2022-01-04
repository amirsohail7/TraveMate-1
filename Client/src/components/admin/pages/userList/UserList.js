import React , {useEffect} from 'react'
import "./userList.css";
import axios from "axios";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList=()=> {
  const [traveler, setTraveler] = useState(userRows);
  
  const handleDelete = (id) => {
    setTraveler(traveler.filter((item) => item.id !== id));
  };

  useEffect(() => {
    axios
    .get("http://localhost:3040/traveler")
    .then((response)=>{
      setTraveler(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      /* renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      }, */
    },
    { field: "email", headerName: "Email", width: 200 },
    /* {
      field: "status",
      headerName: "Status",
      width: 120,
    }, */
    /* {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    }, */
    /* {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    } */,
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={traveler}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
export default UserList;