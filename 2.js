function solveLinear(a, b) {
    if (a === 0) {
        if (b === 0) {
            return { roots: 'Infinite solutions', type: 'identity' };
        } else {
            return { roots: [], type: 'no solution' };
        }
    }
    const root = -b / a;
    return { roots: [root], type: 'real' };
}

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { roots: [root1, root2], type: 'real and distinct' };
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return { roots: [root], type: 'real and same' };
    } else {
        return { roots: [], type: 'complex' };
    }
}

function solveCubic(a, b, c, d) {
    if (a === 0) {
        return solveQuadratic(b, c, d);
    }

    const f = ((3 * c / a) - ((b ** 2) / (a ** 2))) / 3;
    const g = ((2 * (b ** 3) / (a ** 3)) - (9 * b * c / (a ** 2)) + (27 * d / a)) / 27;
    const h = ((g ** 2) / 4) + ((f ** 3) / 27);

    if (h > 0) {
        const r = -(g / 2) + Math.sqrt(h);
        const s = Math.cbrt(r);
        const t = -(g / 2) - Math.sqrt(h);
        const u = Math.cbrt(t);
        const root = (s + u) - (b / (3 * a));
        return { roots: [root], type: 'one real root' };
    } else if (f === 0 && g === 0 && h === 0) {
        const root = -Math.cbrt(d / a);
        return { roots: [root], type: 'triple root' };
    } else {
        const i = Math.sqrt((g ** 2) / 4 - h);
        const j = Math.cbrt(i);
        const k = Math.acos(-(g / (2 * i)));
        const l = -j;
        const m = Math.cos(k / 3);
        const n = Math.sqrt(3) * Math.sin(k / 3);
        const p = -(b / (3 * a));

        const root1 = 2 * j * m + p;
        const root2 = l * (m + n) + p;
        const root3 = l * (m - n) + p;

        return { roots: [root1, root2, root3], type: 'three real roots' };
    }
}

module.exports = {
    solveQuadratic,
    solveLinear,
    solveCubic
};

