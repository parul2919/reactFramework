/** ***** INITIALIZING GA4 INSTANCE ********
 * This function initializes ga4 intance
 */

import ReactGA from "react-ga4";

const googleAnalyticsActions = {};

googleAnalyticsActions.initGoogleAnalytics = async (key) => {
  await ReactGA.initialize(key);
  await ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });
};
export default googleAnalyticsActions;
