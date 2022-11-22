import supabase from "utils/supabase";

export const getVideo = (name) => {
    const { data: url } = supabase
        .storage
        .from("videos")
        .getPublicUrl(`${name}/${name}.mp4`)
    return url.publicURL
}

export const getThumbnailImage = (name) => {
    const { data: url } = supabase
        .storage
        .from("videos")
        .getPublicUrl(`${name}/${name}_thumbnail.jpg`)
    return url.publicURL
}

export const getThumbnailVideo = (name) => {
    const { data: url } = supabase
        .storage
        .from("videos")
        .getPublicUrl(`${name}/${name}_thumbnail.mp4`)
    return url.publicURL
}