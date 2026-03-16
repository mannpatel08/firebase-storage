import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { storage } from "../firebase/firebaseConfig";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  deleteObject
} from "firebase/storage";

const initialState = {
  files: [],
  loading: false,
  error: null
};

export const uploadFile = createAsyncThunk(
  "files/uploadFile",
  async (file) => {
    const storageRef = ref(storage, `documents/${file.name}`);
    await uploadBytes(storageRef, file);

    const url = await getDownloadURL(storageRef);

    return {
      name: file.name,
      url: url,
      type: file.type,
      size: file.size,
      date: new Date().toLocaleString()
    };
  }
);

export const fetchFiles = createAsyncThunk(
  "files/fetchFiles",
  async () => {
    const listRef = ref(storage, "documents");
    const res = await listAll(listRef);

    const urls = await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return {
          name: item.name,
          url
        };
      })
    );

    return urls;
  }
);

export const deleteFile = createAsyncThunk(
  "files/deleteFile",
  async (name) => {
    const fileRef = ref(storage, `documents/${name}`);
    await deleteObject(fileRef);
    return name;
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(uploadFile.fulfilled, (state, action) => {
      state.files.push(action.payload);
    });

    builder.addCase(fetchFiles.fulfilled, (state, action) => {
      state.files = action.payload;
    });

    builder.addCase(deleteFile.fulfilled, (state, action) => {
      state.files = state.files.filter(
        (file) => file.name !== action.payload
      );
    });

  },
});

export default fileSlice.reducer;