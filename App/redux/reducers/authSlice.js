import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

// login
export const login = createAsyncThunk(
  'auth/SignUp',
  async (userData, thunkAPI) => {
    try {
      const {email, password} = userData;
      const user = await auth().signInWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  },
);

// sign up
export const createUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const {email, password} = userData;
      const user = await auth().createUserWithEmailAndPassword(email, password);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  },
);

//logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const user = await auth().signOut();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.code);
  }
});

// init state
const initState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
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
      .addCase(createUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(createUser.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(login.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = payload;
      })
      .addCase(logout.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload;
        state.user = null;
      });
  },
});

//export actions
export const {reset} = authSlice.actions;
export default authSlice.reducer;