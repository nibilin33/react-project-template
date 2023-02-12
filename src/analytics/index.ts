import {onCLS, onFID, onLCP} from 'web-vitals';
// TODO
function sendToGoogleAnalytics() {
  // Assumes the global `ga()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/analyticsjs

}

onCLS(sendToGoogleAnalytics);
onFID(sendToGoogleAnalytics);
onLCP(sendToGoogleAnalytics);