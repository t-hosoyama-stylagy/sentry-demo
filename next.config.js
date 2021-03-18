const sha = (() => {
  let commitHash
  try {
    commitHash = require("child_process").execSync("git rev-parse HEAD", {
      encoding: "utf-8",
    })
  } catch {}
  return commitHash || "__SENTRY_RELEASE_HASH__"
})()

const getPlugins = (dev) => {
  if (dev) {
    return []
  }

  const SentryWebpackPlugin = require("@sentry/webpack-plugin")
  const sentryWebpackPlugin = new SentryWebpackPlugin({
    authToken:
      "3169963dccf246d0a8e7df00a1e56571911fef72382a42af93c1bb5d831ce187",
    release: sha,
    org: "hosoyama",
    project: "hosoyama-dev",
    include: "./out",
  })

  return [sentryWebpackPlugin]
}

module.exports = {
  productionBrowserSourceMaps: true,
  env: {
    GIT_SHA: sha,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.devtool = "hidden-source-map"
    config.plugins = [...config.plugins, ...getPlugins(dev)]
    return config
  },
}
