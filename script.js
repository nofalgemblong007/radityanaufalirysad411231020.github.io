function calculate2x2() {
    const a11 = parseFloat(document.getElementById('a11-2x2').value);
    const a12 = parseFloat(document.getElementById('a12-2x2').value);
    const a21 = parseFloat(document.getElementById('a21-2x2').value);
    const a22 = parseFloat(document.getElementById('a22-2x2').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22)) {
        document.getElementById('result-2x2').textContent = 'Silakan masukkan semua nilai matriks dengan benar.';
        return;
    }

    const determinant = a11 * a22 - a12 * a21;

    document.getElementById('result-2x2').textContent = `Determinan: ${determinant}`;
}

function calculate3x3() {
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a13 = parseFloat(document.getElementById('a13').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);
    const a23 = parseFloat(document.getElementById('a23').value);
    const a31 = parseFloat(document.getElementById('a31').value);
    const a32 = parseFloat(document.getElementById('a32').value);
    const a33 = parseFloat(document.getElementById('a33').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a13) ||
        isNaN(a21) || isNaN(a22) || isNaN(a23) ||
        isNaN(a31) || isNaN(a32) || isNaN(a33)) {
        document.getElementById('result-3x3').textContent = 'Silakan masukkan semua nilai matriks dengan benar.';
        return;
    }

    const determinant = a11 * (a22 * a33 - a23 * a32) -
                        a12 * (a21 * a33 - a23 * a31) +
                        a13 * (a21 * a32 - a22 * a31);

    document.getElementById('result-3x3').textContent = `Determinan: ${determinant}`;
}
