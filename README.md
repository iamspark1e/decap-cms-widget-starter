<h1 align='center'>decap-cms-widget-starter</h1>

<br />
<p align='center'><i>A starter template for custom <a href="https://decapcms.org/docs/custom-widgets/" target="_blank">Decap CMS widget</a> development, powered with Vite.</i></p>

### Info

A zero config, out-of-box template for developing your own custom Decap CMS Widget, with latest version of Vite.

### Quick Start

First, run `npx degit iamspark1e/decap-cms-widget-starter my-widget` or click the "Use this template" button on [Github Repo](https://github.com/iamspark1e/decap-cms-widget-starter)

Then get into your project folder, no additional configuration, just run,

```bash
npm install
npm run dev
```

> If you need to change running port, you can pass it via environment variable, for example, `PORT=18080 npm run dev`

After the dev server started, you can modify the `Control.jsx` and `Preivew.jsx` as you wish, dev server will be refreshed automatically with HMR, powered by Vite.

### Developing Widget

> More details about writing codes in widgets, you can read this [official doc](https://decapcms.org/docs/custom-widgets/#writing-custom-widgets-as-a-separate-package).

The whole project is focused on the `src/main.js`, the only entry which will mount your customized "Control" and "Preview" components on the `window`, so after `main.js` is bundled, you can call `CMS.registerWidget` to register your widget like this:

```html
<script src="./main.js"></script>
<script>
    // the "CMS" is exposed by "decap-cms-app"
    CMS.registerWidget('test', window.StarterControl, window.StarterPreview);
</script>
```

> Remember to rename "StarterControl" and "StarterPreview" to your own widget name !

When project started, the `public/config.yml` will be read to setup CMS environment, so you can add a more complicate collection for your usage.

### Testing Widget

> Before testing in "Preview mode", please build files first.

If you want to test your built widget file, you can start a "Preview" mode via `npm run preview`, that will serve files in the `dist` folder. 

### Production & Publishing Widget

```bash
npm run build
npm version release
npm run publish
```

### Questions

If you have any questions, please leave me an issue, thanks~