export const getImgUrl = (name) => {
    return new URL(`../assets/testimonials/${name}`, import.meta.url);
  };
  export const getServicesImgUrl = (filename) => {
    return new URL(`/src/assets/image/${filename}`, import.meta.url).href;
  };