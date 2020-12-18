export default function Home() {
  return (
    <>
      <p>VERCEL_GIT_PROVIDER: {process.env.VERCEL_GIT_PROVIDER}</p>
      <p>VERCEL_GIT_REPO_SLUG: {process.env.VERCEL_GIT_REPO_SLUG}</p>
      <p>VERCEL_GIT_COMMIT_SHA: {process.env.VERCEL_GIT_COMMIT_SHA}</p>
    </>
  );
}
