export type Album = {
    title: string;
}

export type AlbumsResponse = {
    albums: {
        data: Album[];
    };
}