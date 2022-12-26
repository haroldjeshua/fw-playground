export const ICON_MAP = new Map();

// ICON_MAP.set(0, "sun");
// ICON_MAP.set(1, "sun");

addMapping([0, 1], "sun");
addMapping([2], "sun-wind");
addMapping([3], "cloud");
addMapping([45, 48], "cloud-fog");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-rain");
addMapping([71, 73, 75, 85, 86], "snowflake");
addMapping([95, 96, 99], "cloud-storm");

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

// ICON_MAP.get(0);
