import { useRouter } from "next/router";
import supabase from "utils/supabase";
import { getVideo } from "utils/get-files";
import Layout from "components/constants/Layout";

export default function Video({ video }) {
    const router = useRouter();
    return (
        <Layout>
            <section className="videoSection">
                <button className="closeButton" onClick={() => router.back()}>(x) Close</button>
                <h5 className="videoHeading">
                    <span className="videoHeadingTitle">{video.title}&nbsp;</span>
                    <span className="videoHeadingClient">&nbsp;{video.client}</span>
                </h5>
                <video
                    className="video"
                    controls={true}
                    src={getVideo(video.name)}
                />
            </section>
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { data: video } = await supabase
        .from("videos")
        .select("title, client, name")
        .eq("name", context.query.name)
        .single()

    return {
        props: {
            video,
        }
    }
}