"use client";

import { useState } from 'react';
import { uploadMedia } from '../../use-cases/use-upload/index'; 

const UploadMediaComponent: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    // Função para lidar com a seleção do arquivo
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    // Função para lidar com o upload do arquivo
    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Por favor, selecione um arquivo.');
            return;
        }

        try {
            setUploadStatus('Fazendo upload...');
            
            const result = await uploadMedia(selectedFile);
            setUploadStatus('Upload concluído com sucesso!');
            console.log('Upload result:', result);
        } catch (error) {
            console.error('Erro no upload:', error);
            setUploadStatus('Falha no upload.');
        }
    };

    return (
        <div>
            <h1>Upload de Mídia</h1>

            <input type="file" onChange={handleFileChange} />

            <button onClick={handleUpload} disabled={!selectedFile}>
                Upload
            </button>

            {uploadProgress > 0 && <p>Progresso: {uploadProgress}%</p>}

            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadMediaComponent;
