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
    headerName: "Name",
    width: 300,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photos || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  // {field: "_id", headerName: "ID", width: 250},

  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 290,
  },
  {
    field: "city",
    headerName: "City",
    width: 130,
  },
  {
    field: "cheapestPrice",
    headerName: "Price",
    width: 130,
  },
  
]

export const vehicleColumns = [

  {
    field: "vehicle_model",
    headerName: "Vehicle Model",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">

          <img className="cellImg" src={params.row.image || "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"} alt="" />
          {params.row.vehicle_model}
        </div>
      );
    },
  },
  // {field: "_id", headerName: "ID", width: 250},
  {
    field: "vehicle_class",
    headerName: "Vehicle Class",
    width: 140,
  },
  {
    field: "vehicle_type",
    headerName: "Vehicle Type",
    width: 150,
  },

  {
    field: "vehicle_seats",
    headerName: "Vehicle Seats",
    width: 130,
  },
  {
    field: "vehicle_register_number",
    headerName: "Vehicle Reg Number",
    width: 170,
  },
  
]
