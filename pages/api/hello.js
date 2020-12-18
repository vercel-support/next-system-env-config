// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.json({
    gitProvider: process.env.VERCEL_GIT_PROVIDER,
    repoSlug: process.env.VERCEL_GIT_REPO_SLUG,
    commitSha: process.env.VERCEL_GIT_COMMIT_SHA,
  });
};
