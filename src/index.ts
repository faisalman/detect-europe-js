//////////////////////////////////////////////
/*! detectEurope.js v0.1.0
    Determine whether a user is from the European Union (EU) area
    https://github.com/faisalman/detect-europe-js
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
//////////////////////////////////////////////

const TIMEZONE = {
    AUSTRIA: {
        VIENNA: 'Europe/Vienna'
    },
    BELGIUM: {
        BRUSSELS: 'Europe/Brussels'
    },
    BULGARIA: {
        SOFIA: 'Europe/Sofia'
    },
    CROATIA: {
        ZAGREB: 'Europe/Zagreb'
    },
    CYPRUS: {
        NICOSIA_EUROPE: 'Europe/Nicosia',
        NICOSIA_ASIA: 'Asia/Nicosia',
        FAMAGUSTA: 'Asia/Famagusta'
    },
    CZECHIA: {
        PRAGUE: 'Europe/Prague'
    },
    DENMARK: {
        COPENHAGEN: 'Europe/Copenhagen',
        FAROE: 'Atlantic/Faroe'
    },
    ESTONIA: {
        TALLINN: 'Europe/Tallinn'
    },
    FINLAND: {
        HELSINKI: 'Europe/Helsinki',
        MARIEHAMN: 'Europe/Mariehamn'
    },
    FRANCE: {
        PARIS: 'Europe/Paris',
        CAYENNE: 'America/Cayenne',
        GUADELOUPE: 'America/Guadeloupe',
        MARIGOT: 'America/Marigot',
        MARTINIQUE: 'America/Martinique',
        MAYOTTE: 'Indian/Mayotte',
        REUNION: 'Indian/Reunion'
    },
    GERMANY: {
        BERLIN: 'Europe/Berlin',
        BUSINGEN: 'Europe/Busingen'
    },
    GREECE: {
        ATHENS: 'Europe/Athens'
    },
    HUNGARY: {
        BUDAPEST: 'Europe/Budapest'
    },
    ICELAND: {
        REYKJAVIK: 'Atlantic/Reykjavik'
    },
    IRELAND: {
        DUBLIN: 'Europe/Dublin'
    },
    ITALY: {
        ROME: 'Europe/Rome'
    },
    LATVIA: {
        RIGA: 'Europe/Riga'
    },
    LIECHTENSTEIN: {
        VADUZ: 'Europe/Vaduz'
    },
    LITHUANIA: {
        VILNIUS: 'Europe/Vilnius'
    },
    LUXEMBOURG: {
        LUXEMBOURG: 'Europe/Luxembourg'
    },
    MALTA: {
        MALTA: 'Europe/Malta'
    },
    NETHERLANDS: {
        AMSTERDAM: 'Europe/Amsterdam',
        ARUBA: 'America/Aruba',
        CURACAO: 'America/Curacao',
        KRALENDIJK: 'America/Kralendijk',
        LOWER_PRINCES: 'America/Lower_Princes'
    },
    NORWAY: {
        OSLO: 'Europe/Oslo',
        JAN_MAYEN: 'Atlantic/Jan_Mayen',
        LONGYEARBYEN: 'Arctic/Longyearbyen'
    },
    POLAND: {
        WARSAW: 'Europe/Warsaw'
    },
    PORTUGAL: {
        LISBON: 'Europe/Lisbon',
        AZORES: 'Atlantic/Azores',
        MADEIRA: 'Atlantic/Madeira'
    },
    ROMANIA: {
        BUCHAREST: 'Europe/Bucharest'
    },
    SLOVAKIA: {
        BRATISLAVA: 'Europe/Bratislava'
    },
    SLOVENIA: {
        LJUBLJANA: 'Europe/Ljubljana'
    },
    SPAIN: {
        MADRID: 'Europe/Madrid',
        CANARY: 'Atlantic/Canary',
        CEUTA: 'Africa/Ceuta'
    },
    SWEDEN: {
        STOCKHOLM: 'Europe/Stockholm'
    },
    SWITZERLAND: {
        ZURICH: 'Europe/Zurich'
    }
};

const EU_TIMEZONE = [
    TIMEZONE.AUSTRIA.VIENNA,
    TIMEZONE.BELGIUM.BRUSSELS,
    TIMEZONE.BULGARIA.SOFIA,
    TIMEZONE.CROATIA.ZAGREB,
    TIMEZONE.CYPRUS.NICOSIA_EUROPE,
    TIMEZONE.CYPRUS.NICOSIA_ASIA,
    TIMEZONE.CYPRUS.FAMAGUSTA,
    TIMEZONE.CZECHIA.PRAGUE,
    TIMEZONE.DENMARK.COPENHAGEN,
    TIMEZONE.ESTONIA.TALLINN,
    TIMEZONE.FINLAND.HELSINKI,
    TIMEZONE.FINLAND.MARIEHAMN,
    TIMEZONE.FRANCE.PARIS,
    TIMEZONE.FRANCE.CAYENNE,
    TIMEZONE.FRANCE.GUADELOUPE,
    TIMEZONE.FRANCE.MARIGOT,
    TIMEZONE.FRANCE.MARTINIQUE,
    TIMEZONE.FRANCE.MAYOTTE,
    TIMEZONE.FRANCE.REUNION,
    TIMEZONE.GERMANY.BERLIN,
    TIMEZONE.GREECE.ATHENS,
    TIMEZONE.HUNGARY.BUDAPEST,
    TIMEZONE.IRELAND.DUBLIN,
    TIMEZONE.ITALY.ROME,
    TIMEZONE.LATVIA.RIGA,
    TIMEZONE.LITHUANIA.VILNIUS,
    TIMEZONE.LUXEMBOURG.LUXEMBOURG,
    TIMEZONE.MALTA.MALTA,
    TIMEZONE.NETHERLANDS.AMSTERDAM,
    TIMEZONE.POLAND.WARSAW,
    TIMEZONE.PORTUGAL.LISBON,
    TIMEZONE.PORTUGAL.AZORES,
    TIMEZONE.PORTUGAL.MADEIRA,
    TIMEZONE.ROMANIA.BUCHAREST,
    TIMEZONE.SLOVAKIA.BRATISLAVA,
    TIMEZONE.SLOVENIA.LJUBLJANA,
    TIMEZONE.SPAIN.MADRID,
    TIMEZONE.SPAIN.CANARY,
    TIMEZONE.SWEDEN.STOCKHOLM
];

const EEA_EFTA_TIMEZONE = [
    TIMEZONE.ICELAND.REYKJAVIK,
    TIMEZONE.LIECHTENSTEIN.VADUZ,
    TIMEZONE.NORWAY.OSLO,
    TIMEZONE.NORWAY.JAN_MAYEN
];

const EEA_TIMEZONE = [
    ...EU_TIMEZONE,
    ...EEA_EFTA_TIMEZONE
];

const EFTA_TIMEZONE = [
    TIMEZONE.SWITZERLAND.ZURICH,
    ...EEA_EFTA_TIMEZONE
];

const isTimezoneIn = (tz: string[]): boolean => window?.Intl?.DateTimeFormat && tz.includes(Intl.DateTimeFormat().resolvedOptions().timeZone);

const isFromEU = (): boolean => isTimezoneIn(EU_TIMEZONE);

const isFromEEA = (): boolean => isTimezoneIn(EEA_TIMEZONE);

const isFromEFTA = (): boolean => isTimezoneIn(EFTA_TIMEZONE);

export {
    isFromEU,
    isFromEEA,
    isFromEFTA
};