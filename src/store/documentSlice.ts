import { createSlice, PayloadAction } from '@reduxjs/toolkit'; import { TaxDocument } from '../types/tax-document';

interface DocumentState { currentDocument: TaxDocument | null; highlightedFieldId: string | null; }

const initialState: DocumentState = { currentDocument: null, highlightedFieldId: null, };

export const documentSlice = createSlice({ name: 'document', initialState, reducers: { setDocument: (state, action: PayloadAction<TaxDocument>) => { state.currentDocument = action.payload; }, updateField: (state, action: PayloadAction<{ id: string; value: string }>) => { if (state.currentDocument) { const field = state.currentDocument.fields.find(f => f.id === action.payload.id); if (field) field.extractedValue = action.payload.value; } }, setHighlight: (state, action: PayloadAction<string | null>) => { state.highlightedFieldId = action.payload; }, }, });

export const { setDocument, updateField, setHighlight } = documentSlice.actions; export default documentSlice.reducer;