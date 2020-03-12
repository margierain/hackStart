const getHostName = (url: string) => {
  const match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === 'string' &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return null;
  }
};

const getDomain = (url: string) => {
  const hostName = getHostName(url);
  let domain = hostName;
  if (hostName != null) {
    let parts = hostName.split('.').reverse();

    if (parts != null && parts.length > 1) {
      domain = parts[1] + '.' + parts[0];

      if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain;
      }
    }
  }

  return domain;
};

export const parseTicketLink = (url: string) => {
  const domain = getDomain(url);
  let ticketLinkTitle;
  switch (domain) {
    case 'github.com':
      ticketLinkTitle = 'OPEN IN GITHUB';
      break;
    case 'atlassian.net':
      ticketLinkTitle = 'OPEN IN JIRA';
      break;
    case 'gitlab.com':
      ticketLinkTitle = 'OPEN IN GITLAB';
      break;
    case 'asana.com':
      ticketLinkTitle = 'OPEN IN ASANA';
      break;
    case 'trello.com':
      ticketLinkTitle = 'OPEN IN TRELLO';
      break;
    default:
      ticketLinkTitle = 'OPEN TICKET';
  }

  return ticketLinkTitle;
};
