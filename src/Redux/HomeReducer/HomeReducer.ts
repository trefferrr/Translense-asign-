import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface HomeState {
  businessName: string;
  country: string;
  state: string;
  city: string;
  address: string;
  openingTime: string;
  closingTime: string;
  email: string;
  mobileNumber: string;
  image: string;
}

// Define the payload type for the update action
interface UpdatePayload {
  field: keyof HomeState;
  value: string;
}

// Get initial state from localStorage or default values
const initialState: HomeState = JSON.parse(localStorage.getItem('data') as string) || {
  businessName: '',
  country: '',
  state: '',
  city: '',
  address: '',
  openingTime: '',
  closingTime: '',
  email: '',
  mobileNumber: '',
  image: ''
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UpdatePayload>) => {
      const { field, value } = action.payload;
      const newState = { ...state, [field]: value };
      localStorage.setItem('data', JSON.stringify(newState));
      return newState;
    },
  }
});

export const { update } = HomeSlice.actions;

export default HomeSlice.reducer;
