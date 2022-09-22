export const userColumns = [

  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },

  {
    field: "country",
    headerName: "Country",  
    width: 100,
  },

  {
    field: "city",
    headerName: "City",  
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",  
    width: 150,
  },

];

export const hotelColumns = [

  {
    field: "id",
    headerName: "ID",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="" />
          {params.row._id}
        </div>
      );
    },
  },
  // {field: "_id", headerName: "ID", width: 250},
  {
    field: "name",
    headerName: "Name",
    width: 170,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
  },
  {
    field: "city",
    headerName: "City",
    width: 130,
  },
  
]




export const roomColumns = [
  {field: "_id", headerName: "ID", width: 100},
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "contactNumber",
    headerName: "Contact Number",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  
  {
    field: "distance",
    headerName: "Distance",
    width: 100,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 80,
  },

]

