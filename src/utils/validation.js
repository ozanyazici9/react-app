export function isEmail(value) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
}

export function isNotEmpty(value) {
    return value.trim() != "";
}

export function hasMinLength(value, min) {
    return value.length >= min;
}

export function isEquals(value, valueToCompare) {
    return value === valueToCompare;
}