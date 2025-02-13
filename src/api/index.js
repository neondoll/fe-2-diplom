const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default {
  ORDER: `${backendUrl}/order`,
  ROUTES: `${backendUrl}/routes`,
  ROUTES_CITIES: `${backendUrl}/routes/cities`,
  ROUTES_LAST: `${backendUrl}/routes/last`,
  ROUTES_SEATS: id => `${backendUrl}/routes/${id}/seats`,
  SUBSCRIBE: `${backendUrl}/subscribe`,
};
