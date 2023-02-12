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
[project sentry](https://nibilin33.sentry.io/projects/react-project-template/?project=4504650564108288)  

## performance data collection
[web-vitals](https://github.com/GoogleChrome/web-vitals)        
## web log
using [idb-managed](https://github.com/sylvia1106/idb-managed) to write log     