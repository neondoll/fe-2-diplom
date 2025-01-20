export default {
  cities: name => `${import.meta.env.VITE_BACKEND_URL}/routes/cities?name=${name}`,
};
