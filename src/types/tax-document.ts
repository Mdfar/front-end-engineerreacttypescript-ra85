export interface TaxField { id: string; label: string; extractedValue: string; confidenceScore: number; coordinates: { page: number; x: number; y: number; width: number; height: number; }; }

export interface TaxDocument { id: string; filename: string; status: 'pending' | 'verified' | 'flagged'; fields: TaxField[]; }