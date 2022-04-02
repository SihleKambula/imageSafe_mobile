import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import storage from '@react-native-firebase/storage';

export const uploadImage = createAsyncThunk(
  'storage/Upload',
  async (image, thunkAPI) => {
    const {path} = image;
    const pathArray = path.split('/');
    const imageName = pathArray.pop();
    try {
      const reference = storage().ref(imageName);
      const pathToFile = path;
      await reference.putFile(pathToFile);
      const url = await storage().ref(imageName).getDownloadURL();
      return url;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// init state
const initState = {
  image: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const storageSlice = createSlice({
  name: 'storage',
  initialState: initState,
  reducers: {
    reset(state) {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(uploadImage.pending, state => {
        state.isLoading = true;
      })
      .addCase(uploadImage.fulfilled, (state, {payload}) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.image = payload;
      })
      .addCase(uploadImage.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.image = null;
      });
  },
});

export default storageSlice.reducer;
