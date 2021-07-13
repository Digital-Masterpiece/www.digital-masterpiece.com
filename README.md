# www.digital-masterpiece.com
![Lighthouse Audit & Firebase Deployment](https://github.com/nfrostdev/www.digital-masterpiece.com/workflows/Lighthouse%20Audit%20&%20Firebase%20Deployment/badge.svg)

# Using Firebase preview channels.
*In your working directory.*
```bash
rm -rf public && hugo --minify --baseURL='' && firebase hosting:channel:deploy YOUR_CHANNEL_NAME
```