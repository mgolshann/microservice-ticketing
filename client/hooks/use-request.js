import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {

    const [errors, setErrors] = useState(null);
    
    const doRequest = async (props = {}) => {

        try {
            
            setErrors(null);
            const response = await axios[method](url, { ...body, ...props }, 
                { 
                    withCredentials: true,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }
                }
            );
            if (onSuccess) {
                onSuccess(response.data);
            }
            
            return response.data; 

        } catch (err) {

            setErrors(
                <div className="alert alert-danger">
                    <label>Ooops ....</label>
                    <ul>
                        {err.response.data.errors.map(error => 
                            <li key={error.message}>{error.message}</li>
                        )}
                    </ul>
                </div>
            );

        }
    }
    
    return { doRequest, errors }
}
