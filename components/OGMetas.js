import Head from "next/head";

export default function OGMetas({
  title = "YoVoto.pe",
  description = null,
  url = "https://www.yovoto.pe/",
}) {
  const image = "/open-graph.png";

  return (
    <Head>
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      {!!description && (
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
      )}
      <meta property="og:image" content={image} key="og:image" />
      {!!description && (
        <meta
          property="og:image:alt"
          content={description}
          key="og:image:alt"
        />
      )}
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:site_name" content={title} key="og:site_name" />
      <meta property="og:locale" content="en" key="og:locale" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta name="twitter:url" content={url} key="twitter:url" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      {!!description && (
        <meta
          name="twitter:description"
          content={description}
          key="twitter:description"
        />
      )}
      <meta name="twitter:image" content={image} key="twitter:image" />
      {!!description && (
        <meta
          name="twitter:summary"
          content={description}
          key="twitter:summary"
        />
      )}
      <title key="title">{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
