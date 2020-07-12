import tinycolor from 'tinycolor2';


export default (hash) => {
    const [r, g, b] = hash
        .substr(3, 6)
        .split('')
        .map((char) => char.charCodeAt(0) > 255 ? 255 : char.charCodeAt(0));
    const color = tinycolor({ r, g, b });
    const colorLighten = tinycolor({ r, g, b }).lighten(40);
    return [
        color.toHexString(),
        colorLighten.toHexString(),
    ];
};