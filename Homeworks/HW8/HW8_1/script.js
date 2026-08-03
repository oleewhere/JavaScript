function deepClone(obj, cloned = new Map()) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (cloned.has(obj)) return cloned.get(obj);

    let clone;
    if (Array.isArray(obj)) {
        clone = [];
    } else {
        clone = Object.create(Object.getPrototypeOf(obj));
    }
    cloned.set(obj, clone);

    Object.keys(obj).forEach((key) => {
        clone[key] = deepClone(obj[key], cloned);
    });
    return clone;
}