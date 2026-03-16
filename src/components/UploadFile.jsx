import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadFile } from "../features/fileSlice";

const UploadFile = () => {

  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleUpload = () => {
    if (file) {
      dispatch(uploadFile(file));
    }
  };

  return (
    <div className="upload-box">

      <h2>Upload Document</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload}>
        Upload
      </button>

    </div>
  );
};

export default UploadFile;