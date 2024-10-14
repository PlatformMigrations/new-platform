import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const uploadMedia = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(`${BASE_URL}/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent) => {
                if (progressEvent.total) {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(`Progresso: ${percentCompleted}%`);
                }
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao fazer upload:', error);
        throw error;
    }
};