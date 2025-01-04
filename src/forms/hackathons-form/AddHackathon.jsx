import React,{ useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./AddHackathon-model.css";

const AddHackathon = ({onSave, isLoading}) => {
    const { register, handleSubmit, formState: {errors}, watch, setValue } = useForm();

    // Watch the lastDate field for changes
    const lastDate = watch('lastDate');

    // Calculate days left whenever lastDate changes
    useEffect(() => {
        if (lastDate) {
            const currentDate = new Date();
            const endDate = new Date(lastDate);
            
            // Calculate difference in milliseconds
            const diffTime = endDate - currentDate;
            // Convert to days and round up
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            // Set the daysLeft value
            setValue('daysLeft', diffDays >= 0 ? diffDays : 0);
        }
    }, [lastDate, setValue]);

    const onSubmit = async (data) => {
        try {
            // Format today's date as YYYY-MM-DD
            const today = new Date();
            const dateStr = today.toISOString().split('T')[0];
    
            // Format last date as YYYY-MM-DD
            const lastDateStr = new Date(data.lastDate).toISOString().split('T')[0];
    
            const formattedData = {
                contestType: data.contestType?.trim(),
                contestHeading: data.contestHeading?.trim(),
                contestImage: data.contestImage?.trim(),
                subheading: data.subHeading?.trim(),
                daysLeft: Number(data.daysLeft),
                applied: Number(data.applied) || 122, // Default value as per your example
                date: dateStr,  // YYYY-MM-DD format
                lastDate: lastDateStr, // YYYY-MM-DD format
                description: data.description?.trim(),
                // Convert comma-separated strings to arrays
                headers: typeof data.headers === 'string' 
                    ? data.headers.split(',').map(h => h.trim()).filter(Boolean)
                    : data.headers || [],
                tags: typeof data.tags === 'string'
                    ? data.tags.split(',').map(t => t.trim()).filter(Boolean)
                    : data.tags || [],
                price: data.price?.trim() || 'Free',
                isActive: "true" // String "true" as per your example
            };
    
            console.log('Formatted data:', formattedData);
            await onSave(formattedData);
        } catch (error) {
            console.error('Form submission error:', error);
            throw error;
        }
    };    
    

    return (
        <div className="form-container1">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2 className="form-heading1">Hackathon Addition Form</h2>
                </div>
                
                <div className="form-field1">
                    <label>Contest Type</label>
                    <input
                        type="text"
                        {...register('contestType', { required: 'Contest Type is required' })}
                        className="bg-white border rounded p-2 w-full"
                    />
                    {errors.contestType && <p className="error-message1">{errors.contestType.message}</p>}
                </div>
                
                <div className="form-field1">
                    <label>Contest Heading</label>
                    <input
                        type="text"
                        {...register('contestHeading', { required: 'Contest Heading is required' })}
                        className="bg-white border rounded p-2 w-full"
                    />
                    {errors.contestHeading && <p className="error-message1">{errors.contestHeading.message}</p>}
                </div>
    
                <div className="form-field1">
                    <label>Contest Image URL</label>
                    <input
                        type="text"
                        {...register('contestImage', { required: 'Contest Image URL is required' })}
                        className="bg-white border rounded p-2 w-full"
                    />
                    {errors.contestImage && <p className="error-message1">{errors.contestImage.message}</p>}
                </div>
                
                <div className="form-field1">
                    <label>Sub Heading</label>
                    <input
                        type="text"
                        {...register('subHeading', { required: 'Sub Heading is required' })}
                        className="bg-white border rounded p-2 w-full"
                    />
                    {errors.subHeading && <p className="error-message1">{errors.subHeading.message}</p>}
                </div>
    
                <div className="form-field1">
                    <label>Uploading Date</label>
                    <input
                        type="date"
                        {...register('date')}
                        className="bg-white border rounded p-2 w-full"
                        disabled={true}
                        value={new Date().toISOString().split('T')[0]}
                    />
                </div>
    
                <div className="form-field1">
                    <label>Last Date Deadline</label>
                    <input
                        type="date"
                        {...register('lastDate', { required: 'Last Date is required' })}
                        className="bg-white border rounded p-2 w-full"
                        min={new Date().toISOString().split('T')[0]}
                    />
                    {errors.lastDate && <p className="error-message1">{errors.lastDate.message}</p>}
                </div>
                
                <div className="form-field1">
                    <label>Days Left</label>
                    <input
                        type="number"
                        {...register('daysLeft', { required: 'Days Left is required' })}
                        className="bg-white border rounded p-2 w-full"
                        disabled={true}
                    />
                    {errors.daysLeft && <p className="error-message1">{errors.daysLeft.message}</p>}
                </div>
    
                <div className="form-field1">
                    <label>Applications</label>
                    <input
                        type="number"
                        defaultValue={122}
                        {...register('applied')}
                        className="bg-white border rounded p-2 w-full"
                    />
                </div>
    
                <div className="form-field1">
                    <label>Description</label>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        className="bg-white border rounded p-2 w-full"
                        rows="4"
                    />
                    {errors.description && <p className="error-message1">{errors.description.message}</p>}
                </div>
    
                <div className="form-field1">
                    <label>Headers</label>
                    <input
                        type="text"
                        {...register('headers', { required: 'Headers are required' })}
                        className="bg-white border rounded p-2 w-full"
                        placeholder="Enter headers separated by commas"
                    />
                    {errors.headers && <p className="error-message1">{errors.headers.message}</p>}
                    <small>(e.g., Veta, Machine Learning)</small>
                </div>
    
                <div className="form-field1">
                    <label>Tags</label>
                    <input
                        type="text"
                        {...register('tags', { required: 'Tags are required' })}
                        className="bg-white border rounded p-2 w-full"
                        placeholder="Enter tags separated by commas"
                    />
                    {errors.tags && <p className="error-message1">{errors.tags.message}</p>}
                    <small>(e.g., Cybersecurity, Hacking, Network Security)</small>
                </div>
    
                <div className="form-field1">
                    <label>Price</label>
                    <input
                        type="text"
                        defaultValue="Free"
                        {...register('price')}
                        className="bg-white border rounded p-2 w-full"
                    />
                </div>
    
                <button 
                    type="submit" 
                    className="submit-button1" 
                    disabled={isLoading}
                >
                    {isLoading ? 'Saving...' : 'Save'}
                </button>
            </form>
        </div>
    );
    
};

export default AddHackathon;