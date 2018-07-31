// z = statistical confidence
// Level,  z*value
// 80%,    1.28
// 85%,    1.44
// 90%,    1.64
// 95%,    1.96
// 98%,    2.33
// 99%,    2.58
module.exports = function(wp, wn, z = 1.96) {
    const n = wp + wn;

    if (n === 0) {
        return 0;
    }

    const p = wp / n;
    const sqrtexpr = (p * (1 - p) + (z * z) / (4 * n)) / n;

    return (
        (p + (z * z) / (2 * n) - z * Math.sqrt(sqrtexpr)) / (1 + (z * z) / n)
    );
};
