import React from "react";
import { useDispatch } from "react-redux";
import { deleteFile } from "../features/fileSlice";

const FileCard = ({ file }) => {

  const dispatch = useDispatch();

  return (
    <div className="file-card">

      <h4>{file.name}</h4>

      <a href={file.url} target="_blank">
        Download
      </a>

      <button
        onClick={() => dispatch(deleteFile(file.name))}
      >
        Delete
      </button>

    </div>
  );
};

export default FileCard;