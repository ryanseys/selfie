selfie
======

Take a selfie and upload it to Google Cloud Storage

## Install

1. `git clone git@github.com:ryanseys/selfie.git && cd selfie`
2. `npm install gcloud`
3. Download [atom-shell](https://github.com/atom/atom-shell/releases)

## Run

1. Create a project on [Google Developers Console][gdevconsole] and download your project credentials to `./secrets.json` in the project root folder. See [here][gcloudsetup] for more detailed instructions.
2. Adjust [selfie.js](selfie.js) use your own bucket name.
3. Run `atom-shell/Atom.app/Contents/MacOS/Atom selfie/` or similar command for your platform.

## Contribute

I love your contributions! File an issue or send your PRs in this repo :) Thanks in advance!

## License

MIT

[gdevconsole]: https://console.developers.google.com/project
[gcloudsetup]: https://github.com/GoogleCloudPlatform/gcloud-node#elsewhere
