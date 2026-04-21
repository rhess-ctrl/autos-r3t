const tw = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export { tw };
export default tw;
