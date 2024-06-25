import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface OwnerState {
  fullName: string;
  state: string;
  image: string;
  city: string;
  country: string;
  address: string;
  email: string;
  mobileNumber: string;
}

// Get initial state from localStorage or default values
const initialState: OwnerState = JSON.parse(localStorage.getItem('OwnerData') as string) || {
  fullName: '',
  state: '',
  image: '',
  city: '',
  country: '',
  address: '',
  email: '',
  mobileNumber: ''
};

const OwnerSlice = createSlice({
  name: 'owner',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<{ field: keyof OwnerState; value: string }>) => { // Correct type usage
      const { field, value } = action.payload;
      const newState = { ...state, [field]: value };
      localStorage.setItem('OwnerData', JSON.stringify(newState));
      return newState;
    },
  }
});

export const { updateForm } = OwnerSlice.actions;

export default OwnerSlice.reducer;
