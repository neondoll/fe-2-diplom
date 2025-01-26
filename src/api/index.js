const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default {
  CITIES: `${backendUrl}/routes/cities`,
  ROUTES: `${backendUrl}/routes`,
  ROUTES_LAST: `${backendUrl}/routes/last`,
  SEATS: id => `${backendUrl}/routes/${id}/seats`,
};
