import { FiFilm } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

export function FileItem({ selectedFiles, uploadProgress }: { selectedFiles: File[], uploadProgress: { [key: string]: number } }) {
    return (
        <>
            {selectedFiles.map((file) => (
                <div key={file.name} className="relative flex flex-col w-full border-2 min-h-28 border-black rounded-2xl p-2">
                    <div className="flex flex-1 items-center">
                        <div className="flex  w-16">
                            <FiFilm size={40} />
                        </div>
                        <div className="flex flex-1 flex-col gap-1">
                            <h3 className="font-semibold truncate max-w-72">{file.name}</h3>
                            <h3>{(file.size / (1024 * 1024)).toFixed(1)} MB</h3>
                        </div>
                        <div className="absolute top-2 right-2 cursor-pointer">
                            <IoCloseOutline size={28} />
                        </div>
                    </div>
                    <div className="flex items-center ml-16 gap-2">
                        <div className="w-full flex bg-gray-300 rounded-full h-2 ">
                            <div
                                className="bg-black h-2 rounded-full"
                                style={{ width: `${uploadProgress[file.name] || 0}%` }}
                            ></div>
                        </div>
                        <div>{uploadProgress[file.name] || 0}%</div>
                    </div>
                </div>
            ))}
        </>
    )
}
