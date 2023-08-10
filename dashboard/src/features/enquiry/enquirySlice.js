import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";

export const getEnquiries = createAsyncThunk(
    "enquiry/get-enquiries",
    async (thunkAPI) => {
        try {
            return await enquiryService.getEnquiries()
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const deleteAEnq = createAsyncThunk(
    "color/delete-enquiry",
    async (id, thunkAPI) => {
        try {
            return await enquiryService.deleteEnq(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getAEnq = createAsyncThunk(
    "color/get-enquiry",
    async (id, thunkAPI) => {
        try {
            return await enquiryService.getAEnq(id);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const updateEnq = createAsyncThunk(
    "color/update-enquiry",
    async (enq, thunkAPI) => {
        try {
            return await enquiryService.updateEnq(enq);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const resetState = createAction("Reset_all")
 
const initialState = {
    enquiries: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const enquirySlice = createSlice({
    name: "enquiries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getEnquiries.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getEnquiries.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.enquiries = action.payload
        })
        .addCase(getEnquiries.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })        
        .addCase(deleteAEnq.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteAEnq.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.deletedEnq = action.payload
        })
        .addCase(deleteAEnq.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(getAEnq.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAEnq.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.enqName = action.payload.name
            state.enqMobile = action.payload.mobile
            state.enqEmail = action.payload.email
            state.enqComment = action.payload.comment
            state.enqStatus = action.payload.status
        })
        .addCase(getAEnq.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(updateEnq.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateEnq.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.updatedEnq = action.payload
        })
        .addCase(updateEnq.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.error
        })
        .addCase(resetState, () => initialState)
    }
})


export default enquirySlice.reducer