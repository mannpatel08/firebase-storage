import React from "react";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";

const Dashboard = () => {

  return (
    <div className="container">

      <h1>Digital Document Manager</h1>

      <UploadFile />

      <FileList />

    </div>
  );
};

export default Dashboard;