import tinycolor from 'tinycolor2';


export default (hash) => {
    const [r, g, b] = hash
        .substr(3, 6)
        .split('')
        .map((char) => char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0));
    const color = tinycolor({ r, g, b })
        .lighten(10)
        .saturate(10);
    const colorLighten = tinycolor({ r, g, b })
        .lighten(30)
        .saturate(30);
    return [
        color.toHexString(),
        colorLighten.toHexString(),
    ];
};