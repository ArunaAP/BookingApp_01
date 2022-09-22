export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
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
    width: 230,
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
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const hotelColumns = [
  {field: "_id", headerName: "ID", width: 250},
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
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

