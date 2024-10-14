export async function uploadMedia(file: File) {
    const uploadEndpoint = '/upload';

    const stream = file.stream();

    const response = await fetch(uploadEndpoint, {
        method: 'POST',
        body: stream,
        headers: {
            'Content-Type': file.type, // Tipo do arquivo (ex: 'image/jpeg', 'video/mp4')
            'Content-Length': file.size.toString(), // Tamanho do arquivo
        },
    });

    if (!response.ok)
        throw new Error(`Upload failed: ${response.statusText}`);

    const result = await response.json();
    return result;
}
