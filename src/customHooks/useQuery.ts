const useQuery = (): { [key: string]: string } => {
  const queryString = decodeURIComponent(window.location.search);
  const params = (
    queryString.match(new RegExp('([^?=&]+)(=([^&]*))?', 'g')) || []
  ).reduce<{ [key: string]: string }>((acc, data) => {
    const [key, value] = data.split('=');
    acc[key] = value;
    return acc;
  }, {});

  return params;
};

export default useQuery;
