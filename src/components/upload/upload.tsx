"use client";

import { useState } from 'react';
import { RxUpload } from "react-icons/rx";
import { uploadMedia } from '../../use-cases/use-upload/index';

const UploadMediaComponent: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    // Função para lidar com a seleção do arquivo
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        
        if (file) setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (!selectedFile) return setUploadStatus('Por favor, selecione um arquivo.');

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
        <div className='w-fit flex flex-col gap-10 items-center justify-center'>
            <h1>Upload de Mídia</h1>

            <div className="file-upload-container w-64">
                <div className="file-upload relative border-4 border-dashed border-zinc-100 rounded-lg text-center bg-zinc-50 transition-colors duration-300 ease-in-out hover:bg-zinc-100">
                    <input className="file-input hidden" id="fileInput" type="file" onChange={handleFileChange}/>
                    <label htmlFor='fileInput' className="w-full h-full file-label flex flex-col items-center cursor-pointer p-10">    
                        <RxUpload className="upload-icon text-5xl text-black mb-2" />
                        <p className="text-black-600 text-base">Drag &amp; Drop your files here to upload</p>
                    </label>
                </div>
            </div>

            <button onClick={handleUpload} disabled={!selectedFile} className='w-40 h-30 bg-white'>
                Upload
            </button>

            {uploadProgress > 0 && <p>Progresso: {uploadProgress}%</p>}

            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadMediaComponent;
