import Head from "next/head";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import styles from "../../styles/Dashboard.module.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateUser from "../../components/createUser/CreateUser";

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  console.log(selectedRows);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    // {
    //   field: "Full Name",
    //   headerName: "First name",
    //   width: 150,
    //   editable: true,
    // },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      // sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "role",
      headerName: "Site Role",
      width: 250,
      editable: true,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35, role: "admin" },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      role: "web master",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      role: "member",
    },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 14, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 15, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 16, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 18, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 21, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 22, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 23, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 24, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 25, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 26, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  console.log(showModal);
  const user = (e) => {
    // e.preventDefault();
    // if(!userInfo.email || !userInfo.password){
    //   alert("enter email and password")
    //   return;
    // }
    console.log("user");
    // auth.signup(userInfo.email, userInfo.password)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          <h1>
            <span className={styles.title__border}>Adm</span>in Dashboard
          </h1>
          <div className={styles.title__userInfo}>
            <Typography variant="subtitle1">
              Logged In as <b>John Doe</b>
            </Typography>
            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              sx={{ backgroundColor: "#db2b39" }}
            >
              Logout
            </Button>
          </div>
        </div>
        {/* <Button variant="contained" onClick={() => setShowModal(true)}>
          Add User
        </Button>
        {showModal ? (
          <CreateUser onClose={() => setShowModal(false)} show={showModal} />
        ) : (
          ""
        )} */}
        <div className={styles.dashboard__container}>
          <div className={styles.dashboard__container__header}>
            <div className={styles.dashboard__container__header__content}>
              <Typography variant="h6" sx={{ color: "#12679b" }}>
                All Users
              </Typography>
              <span>|</span>
              <Typography variant="body1">30 total</Typography>
            </div>
            <div className={styles.dashboard__container__header__buttons}>
              <div
                className={styles.dashboard__container__header__buttons__boxRed}
              >
                <Button sx={{ color: "#fff" }} endIcon={<DeleteIcon />} onClick={handleClickOpen}>
                  Delete User
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Do you really want to delete the user? This cannot be undone.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>No</Button>
                    <Button onClick={handleClose} sx={{color: 'red'}}>
                      Yes, Delete User
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              <div
                className={styles.dashboard__container__header__buttons__box}
              >
                <Button
                  sx={{ color: "#fff" }}
                  endIcon={<AddBoxIcon />}
                  onClick={openModal}
                >
                  Add User
                </Button>
                <CreateUser showModal={showModal} setShowModal={setShowModal} />
              </div>
            </div>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={25}
              rowsPerPageOptions={[25]}
              checkboxSelection
              disableSelectionOnClick
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRowData = rows.filter((row) =>
                  selectedIDs.has(row.id)
                );
                console.log(selectedRowData);
              }}
              sx={{ border: "none" }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}