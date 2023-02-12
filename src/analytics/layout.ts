// https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API
export default () => {
    if(typeof PerformanceObserver === 'undefined') {
        console.warn( 'Layout Instability API not support yet');
        return;
    }
    new PerformanceObserver((list) => {
        console.log(list.getEntries());
      }).observe({type: 'layout-shift', buffered: true});
}
