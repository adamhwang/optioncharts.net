// log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({
  action,
  params,
}: {
  action: Gtag.EventNames | string;
  params: Gtag.EventParams;
}) => {
  window.gtag("event", action, params);
};
