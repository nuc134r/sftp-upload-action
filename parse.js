export function optionalStringArray(argumentName, rawValue) {
    if (rawValue.length === 0) {
        return undefined;
    }

    const valueTrim = rawValue.trim();

    if (valueTrim.startsWith("[")) {
        // remove [ and ] - then convert to array
        return rawValue.replace(/[\[\]]/g, "").trim().split(", ").filter(str => str !== "");
    }

    // split value by space and comma
    const valueAsArrayDouble = rawValue.split(" - ").map(str => str.trim()).filter(str => str !== "");

    if (valueAsArrayDouble.length) {
        return valueAsArrayDouble;
    }

    throw new Error(`${argumentName}: invalid parameter - you provided "${rawValue}". This option excepts an array in the format [val1, val2] or val1\/n - val2`);
}