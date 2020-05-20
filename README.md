<div align="center" margin="0 auto 20px">
    <h1>gifzone</h1>
    <p style="font-style: italic;">🐘 Convert and compress your fave gifs from mp4 to gif.</p>
</div>

---

Convert and compress your fav gifs from mp4 to gif. A bit of a work-in-progress, but it does the job for now.

## Install

Once you clone the repo, follow these steps to get up and running quickly.

- First install [`ffmpeg`](https://ffmpeg.org/) with Homebrew:
  ```bash
  brew install ffmpeg
  ```
- Next, ensure that you have Node > v14. If you're using [NVM](https://github.com/nvm-sh/nvm#nvmrc) already, just run `nvm use` in this project.
  ```bash
  nvm install v14.2.0
  ```
  - This is because this project uses [ESM module imports](https://nodejs.org/api/esm.html).
- Install the dependencies.
  ```bash
  yarn install
  ```
- Run a simple command to create the `input/` and `output/` directories (or just create them yourself).
  ```
  yarn run initialize
  ```

## Usage

Chuck your `.mp4` or `.gif` files into the `input/` folder. Run `yarn start` to convert them. Compressed gif files will appear in the `output/` directory.

The next time you run it, it will skip any `input/` files which have already been converted into `output/`

## Roadmap

Here's some stuff I would like to do to improve this in the future:

- Better gif compression.
- Resize to a smaller, more sane size/format.
- Watch mode, so you can just chuck files into the `input/` folder.
- Publish as a service, either via CLI or as a web app (or both).

## License

[Licensed under MIT](https://github.com/himynameisdave/gifzone/blob/master/LICENSE) - [Dave Lunny](https://twitter.com/himynameisdave) 2020.
