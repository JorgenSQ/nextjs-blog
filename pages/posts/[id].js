import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Metadata from "../../components/metadata";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Metadata id={postData.id} title={postData.title} date={postData.date}></Metadata>
      <div className="flex flex-col ">
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div class="flex-row">
          <input className="flex-initial" type="datetime-local" name="datetime" id="datetime" />
        </div>
      </div>
    </Layout>
  );
}
