import React from 'react'; import { useAppDispatch, useAppSelector } from '../store/hooks'; import { updateField, setHighlight } from '../store/documentSlice';

const DataPanel: React.FC = () => { const doc = useAppSelector((state) => state.document.currentDocument); const dispatch = useAppDispatch();

if (!doc) return <div className="loader">Analyzing Document...</div>;

return ( <div className="data-panel"> <h3>Extracted Fields</h3> {doc.fields.map((field) => ( <div key={field.id} className="field-group" onMouseEnter={() => dispatch(setHighlight(field.id))} onMouseLeave={() => dispatch(setHighlight(null))} > <label>{field.label}</label> <input type="text" value={field.extractedValue} onChange={(e) => dispatch(updateField({ id: field.id, value: e.target.value }))} /> <span className={confidence ${field.confidenceScore > 0.9 ? 'high' : 'low'}}> {(field.confidenceScore * 100).toFixed(0)}% </span> </div> ))} <button className="btn-submit">Submit for Final Review</button> </div> ); };

export default DataPanel;