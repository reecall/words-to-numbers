
export const UNIT = {
    zero: 0,
    premier: 1,
    un: 1,
    second: 2,
    deux: 2,
    troisieme: 3,
    treizieme: 13,
    treize: 13,
    trois: 3,
    quatrieme: 4,
    quatorzieme: 14,
    quatorze: 14,
    quatre: 4,
    quizieme: 15,
    quinze: 15,
    cinquieme: 5,
    cinq: 5,
    sixieme: 6,
    seizieme: 16,
    seize: 16,
    six: 6,
    dixseptieme: 17,
    dixsept: 17,
    septieme: 7,
    sept: 7,
    dixhuitieme: 18,
    dixhuit: 18,
    huitieme: 8,
    huit: 8,
    dixneuvieme: 19,
    dixneuf: 19,
    neuvieme: 9,
    neuf: 9,
    dixieme: 10,
    dix: 10,
    onzieme: 11,
    onze: 11,
    douzieme: 12,
    douze: 12
};

export const TEN = {
    vingt: 20,
    vingtieme: 20,
    trente: 30,
    trentieme: 30,
    quarante: 40,
    quarantieme: 40,
    cinquante: 50,
    cinquantieme: 50,
    soixante: 60,
    soixantieme: 60,
    soixantedix: 70,
    soixantedixieme: 70,
    quatrevingt: 80,
    quatrevingtieme: 80,
    quatrevingtdix: 90,
    quatrevingtdixieme: 90,
};

export const MAGNITUDE = {
    cent: 100,
    centieme: 100,
    mille: 1000,
    million: 1000000,
    milliard: 1000000000,
    trillion: 1000000000000,
    quadrillion: 1000000000000000,
    quintillion: 1000000000000000000,
    sextillion: 1000000000000000000000,
    septillion: 1000000000000000000000000,
    octillion: 1000000000000000000000000000,
    nonillion: 1000000000000000000000000000000,
    decillion: 1000000000000000000000000000000000,
};

export const NUMBER = { ...UNIT, ...TEN, ...MAGNITUDE };

export const UNIT_KEYS = Object.keys(UNIT);
export const TEN_KEYS = Object.keys(TEN);
export const MAGNITUDE_KEYS = Object.keys(MAGNITUDE);

export const NUMBER_WORDS = [...UNIT_KEYS, ...TEN_KEYS, ...MAGNITUDE_KEYS];

export const JOINERS = ['and', 'et'];
export const DECIMALS = ['point', 'dot'];

export const PUNCTUATION = [
    '.',
    ',',
    '\\',
    '#',
    '!',
    '$',
    '%',
    '^',
    '&',
    '/',
    '*',
    ';',
    ':',
    '{',
    '}',
    '=',
    '-',
    '_',
    '`',
    '~',
    '(',
    ')',
    ' ',
];

export const TOKEN_TYPE = {
    UNIT: 0,
    TEN: 1,
    MAGNITUDE: 2,
    DECIMAL: 3,
    HUNDRED: 4,
};

export const ALL_WORDS = [...NUMBER_WORDS, ...JOINERS, ...DECIMALS];

export const BLACKLIST_SINGULAR_WORDS = ['a', 'un', 'une'];
