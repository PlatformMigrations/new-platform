"use client";

import { useState } from 'react';
import { RxUpload } from "react-icons/rx";
import { uploadMedia } from '../../use-cases/use-upload/index';
import { FileItem } from './file-item';

const UploadMediaComponent: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (!files) return setUploadStatus('Falha no upload.');
        
        const filesArray = Array.from(files);

        for (const file of filesArray) {
            await handleUpload(file);
        }
    };

    const handleUpload = async (file: File) => {
        // Immediately add the file to the selectedFiles state
        setSelectedFiles((prev) => [...prev, file]);

        setUploadProgress((prev) => ({ ...prev, [file.name]: 0 }));
        setUploadStatus('Fazendo upload...');

        try {
            const result = await uploadMedia(file, (progressEvent) => {
                if (progressEvent && progressEvent.total) {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress((prev) => ({ ...prev, [file.name]: progress }));
                }
            });

            console.log('Upload result for', file.name, ':', result);
            setUploadStatus('Upload concluído com sucesso!');
        } catch (error) {
            console.error('Erro no upload:', error);
            setUploadStatus('Falha no upload.');
        }
    };

    return (
        <div className="w-full h-full flex items-center justify-center fixed bg-gray-800/60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className='w-11/12 max-w-3xl h-5/6 bg-white rounded-3xl p-8 flex flex-col items-center gap-8'>
                <div className='w-full flex flex-col gap-3 font-medium'>
                    <h1 className='text-black text-3xl'>Meus Spots</h1>
                    <p className='text-gray-500'>Upload and attach files to this project</p>
                </div>

                <div className="file-upload-container w-full">
                    <div className="flex flex-col border-2 h-52 border-dashed border-black rounded-2xl text-center transition-colors duration-300 ease-in-out hover:bg-zinc-100">
                        <input
                            className="file-input hidden"
                            id="fileInput"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                        />
                        <label htmlFor='fileInput' className="flex flex-col items-center justify-center w-full h-full file-label cursor-pointer p-10">
                            <RxUpload className="upload-icon text-5xl text-black mb-2" />
                            <p className="text-black-600 text-base">Drag &amp; Drop or click to upload</p>
                        </label>
                    </div>
                </div>

                <div className="flex flex-1 flex-col w-full space-y-4 overflow-y-auto">
                    <FileItem selectedFiles={selectedFiles} uploadProgress={uploadProgress} />
                </div>

                <div className='flex items-center h-20 w-full gap-4'>
                    <button className='w-full h-full bg-white border-2 border-gray rounded-2xl'>Cancel</button>
                    <button className='w-full h-full bg-black rounded-2xl text-white'>Save</button>
                </div>
            </div>
        </div>
    );
};

export default UploadMediaComponent;
