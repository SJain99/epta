const securityHeaders = [{
  key: 'Content-Security-Policy-Report-Only',
  value: ''
}]

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net", "assets.ctfassets.net"]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      }
    ]
  }
}
