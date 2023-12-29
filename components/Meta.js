import Head from 'next/head';

export default function Meta(props) {
    // const isProd = process.env.NEXT_PUBLIC_IS_PROD === "true"

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>
                {!props?.postData ? props.siteTitle : `${props.postData.title} | ${props.siteTitle}`}
            </title>
            <meta
                name="Description"
                content={props?.postData?.description || props.siteDescription}
                key="desc"
            />

            {/* {isProd &&
                <script defer data-domain="yourdomain.com" src="url-for-plausible"></script>
            } */}
        </Head>
    )
}