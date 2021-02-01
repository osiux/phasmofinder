// https://medium.com/frontend-digest/using-nextjs-with-google-analytics-and-typescript-620ba2359dea
export const GA_TRACKING_ID = 'G-M2Q8J76RZD';

export const pageview = (url: URL) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string;
	category: string;
	label: string;
	value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};
