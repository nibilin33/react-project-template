# react-project-template
includes i18n, mock, monitor, unitest and other useful tools to improve the engineering effectiveness
## Start
```js
npm install uirecorder mocha macaca-reporter -g
npm install selenium-standalone --save-dev
npx selenium-standalone install && npx selenium-standalone start
npm i
npm run dev
```
## Poeditor     
https://poeditor.com/account/api      
```js
npm run narp-pull # get translations from poeditor
npm run narp-push # extract i18n key and upload to poeditor
```  

## uirecorder
https://github.com/webdriverio/selenium-standalone      
https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md       
https://github.com/macacajs/awesome-macaca#page-uitest

## pipeline
[github comment](https://docs.github.com/en/rest/commits/comments?apiVersion=2022-11-28#create-a-commit-comment)        

## sentry
```shell
npm install --save @sentry/react @sentry/tracing
```
[sentry login](https://sentry.io/welcome/?utm_source=google&utm_medium=cpc&utm_campaign=9575834316&utm_content=g&utm_term=sentry&device=c&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDzegUcSMCbMa2tfGTgwL-j9xoa7XS1QR_BlLtMuNjs9DvDRq8kaaZxoCQ2sQAvD_BwE&gclid=CjwKCAiA0JKfBhBIEiwAPhZXDzegUcSMCbMa2tfGTgwL-j9xoa7XS1QR_BlLtMuNjs9DvDRq8kaaZxoCQ2sQAvD_BwE)      