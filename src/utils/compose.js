const compose = (...func) => (comp) => {
    return func.reduceRight(
        (wrapper, f) => f(wrapper), comp);
};
export default compose;