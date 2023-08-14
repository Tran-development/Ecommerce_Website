import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactService } from "./contactService";
import { toast } from "react-toastify";

export const createMessage = createAsyncThunk(
    'contact/post',
    async (contactData, thunkAPI) => {
        console.log(contactData);
        try {
            return await contactService.sendMessage(contactData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const contactState = {
    contact: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

const contactSlice = createSlice({
    name: 'contact',
    initialState: contactState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createMessage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createMessage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.isError = false
                state.contact = action.payload    
                if (state.isSuccess === true) {
                    toast.success("Contact Form Submitted Successfully")
                }            
            })
            .addCase(createMessage.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.error
                if (state.isError === true) {
                    toast.error("Something Wrong !")
                }
            })   
              
    }
})

export default contactSlice.reducer