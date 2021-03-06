import { DbType } from "./api";

export const mockData = {
  apps: [
    {
      id: "datautlevering",
      name: "Datautlevering",
      description: "En app som utleverer data",
      environments: ["development", "qa", "production"],
      languages: ["nb", "nn", "en"],
    },
    {
      id: "tekststyring",
      name: "Tekststyring",
      description: "Det er denne appen",
      environments: ["production"],
      languages: ["nb", "en"],
    },
  ],
  texts: [
    {
      id: "1bca",
      appId: "datautlevering",
      language: "nb",
      textKey: "finnEiersKjøretøy.søk.knapp",
      environment: "development",
      value: "Søk",
    },
    {
      id: "1bca",
      appId: "datautlevering",
      language: "nb",
      textKey: "finnEiersKjøretøy.søk.tittel",
      environment: "development",
      value: "Finn eiers kjøretøy",
    },
    {
      id: "6193336504315854",
      appId: "datautlevering",
      environment: "development",
      language: "nb",
      textKey: "appSide.nyTekst.label",
      value: "Tekstnøkkel",
    },
    {
      id: "3247113587867141",
      appId: "datautlevering",
      environment: "qa",
      language: "nb",
      textKey: "appSide.nyTekst.label",
      value: "Tekstnøkkel",
    },
    {
      id: "08816943841302916",
      appId: "datautlevering",
      environment: "production",
      language: "nb",
      textKey: "appSide.nyTekst.label",
      value: "Tekstnøkkel",
    },
    {
      id: "8732281449371069",
      appId: "datautlevering",
      environment: "development",
      language: "nn",
      textKey: "appSide.nyTekst.label",
      value: "",
    },
    {
      id: "2679396334832598",
      appId: "datautlevering",
      environment: "qa",
      language: "nn",
      textKey: "appSide.nyTekst.label",
      value: "",
    },
    {
      id: "6601634258920925",
      appId: "datautlevering",
      environment: "production",
      language: "nn",
      textKey: "appSide.nyTekst.label",
      value: "",
    },
    {
      id: "03418754289893622",
      appId: "datautlevering",
      environment: "development",
      language: "en",
      textKey: "appSide.nyTekst.label",
      value: "Text key",
    },
    {
      id: "39553746790871536",
      appId: "datautlevering",
      environment: "qa",
      language: "en",
      textKey: "appSide.nyTekst.label",
      value: "Text key",
    },
    {
      id: "230769793770365",
      appId: "datautlevering",
      environment: "production",
      language: "en",
      textKey: "appSide.nyTekst.label",
      value: "Text key",
    },
    {
      id: "9281483809098092",
      appId: "datautlevering",
      environment: "development",
      language: "nb",
      textKey: "appSide.nyTekst.tittel",
      value: "Legg til ny tekst",
    },
    {
      id: "4228562482722549",
      appId: "datautlevering",
      environment: "qa",
      language: "nb",
      textKey: "appSide.nyTekst.tittel",
      value: "Legg til ny tekst",
    },
    {
      id: "004812658241069467",
      appId: "datautlevering",
      environment: "production",
      language: "nb",
      textKey: "appSide.nyTekst.tittel",
      value: "Legg til ny tekst",
    },
    {
      id: "8940005943407399",
      appId: "datautlevering",
      environment: "development",
      language: "nn",
      textKey: "appSide.nyTekst.tittel",
      value: "",
    },
    {
      id: "31184883890727755",
      appId: "datautlevering",
      environment: "qa",
      language: "nn",
      textKey: "appSide.nyTekst.tittel",
      value: "",
    },
    {
      id: "6931529168401189",
      appId: "datautlevering",
      environment: "production",
      language: "nn",
      textKey: "appSide.nyTekst.tittel",
      value: "",
    },
    {
      id: "6668951903101337",
      appId: "datautlevering",
      environment: "development",
      language: "en",
      textKey: "appSide.nyTekst.tittel",
      value: "Add a new text",
    },
    {
      id: "12812462217532872",
      appId: "datautlevering",
      environment: "qa",
      language: "en",
      textKey: "appSide.nyTekst.tittel",
      value: "Add a new text",
    },
    {
      id: "25123808260108027",
      appId: "datautlevering",
      environment: "production",
      language: "en",
      textKey: "appSide.nyTekst.tittel",
      value: "Add a new text",
    },
    {
      id: "8530692193311753",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appSide.nyTekst.tittel",
      value: "Legg til ny tekst",
    },
    {
      id: "8237688390766742",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appSide.nyTekst.tittel",
      value: "Add a new text",
    },
    {
      id: "8609783097977182",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appSide.nyTekst.label",
      value: "Hva er nøkkelen til den nye teksten?",
    },
    {
      id: "22083123973747298",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appSide.nyTekst.label",
      value: "What's the key of the new text string?",
    },
    {
      id: "23756667319043512",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appSide.nyTekst.placeholder",
      value: "F.eks. sideNavn.seksjonNavn.skjema.beskrivelse",
    },
    {
      id: "9574893226861889",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appSide.nyTekst.placeholder",
      value: "I.e. pageName.sectionName.form.description",
    },
    {
      id: "2565240427670388",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appSide.tekster.tittel",
      value: "Tekster",
    },
    {
      id: "4670461128218073",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appSide.tekster.tittel",
      value: "Texts",
    },
    {
      id: "8268082934341248",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.språk.tittel",
      value: "Språkkode",
    },
    {
      id: "5689734143296317",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.språk.tittel",
      value: "Language code",
    },
    {
      id: "5078353940274878",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.knapp.publiser",
      value: "Publiser",
    },
    {
      id: "1024951127189464",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.knapp.publiser",
      value: "Publish",
    },
    {
      id: "7819002331313833",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstside.tips.tittel",
      value: "Greit å vite",
    },
    {
      id: "8097723175526592",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstside.tips.tittel",
      value: "Nice to know",
    },
    {
      id: "5438986659151628",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstside.tips.tekst",
      value:
        'Du kan sette inn "hull" i teksten, såkalte variabler, ved å bruke skrivemåten {variabelNavn}. ',
    },
    {
      id: "02293187084986248",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstside.tips.tekst",
      value:
        'You can add "holes" in the text, so called variables, by writing {variableName}. ',
    },
    {
      id: "3174802298175783",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appListeSide.tittel",
      value: "Apper",
    },
    {
      id: "06438548136807865",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appListeSide.tittel",
      value: "Apps",
    },
    {
      id: "846752706881515",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appListeSide.ingress",
      value: "Velg den appen du skal jobbe med i dag.",
    },
    {
      id: "5419263975596125",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appListeSide.ingress",
      value: "Choose the app you want to work with today.",
    },
    {
      id: "5910042491016392",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "appListeSide.lastetekst",
      value: "Henter app-oversikten",
    },
    {
      id: "005499178099806601",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "appListeSide.lastetekst",
      value: "Loading the app overview",
    },
    {
      id: "8251718774480694",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "app.header.endreSpråk",
      value: "Endre språk",
    },
    {
      id: "8886408008802051",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "app.header.endreSpråk",
      value: "Change language",
    },
    {
      id: "12557502728016035",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "app.header.tittel",
      value: "Språkstyring",
    },
    {
      id: "6530941621801056",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "app.header.tittel",
      value: "App Texts",
    },
    {
      id: "6343499684767713",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.faresone.tittel",
      value: "🚨Faresone 🚨",
    },
    {
      id: "48258633085805736",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.faresone.tittel",
      value: "🚨Danger Zone 🚨",
    },
    {
      id: "42118057951463306",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.faresone.tekst",
      value:
        "Her kan du slette teksten og alle oversettelser om den ikke lenger brukes. Pass på - det her kan du ikke angre på!",
    },
    {
      id: "461179708527101",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.faresone.tekst",
      value:
        "Here you can delete the text and all its translations if it's no longer used. Be aware - there's no undo for this action!",
    },
    {
      id: "765260223841397",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.faresone.sletteknapp",
      value: "Slett denne teksten",
    },
    {
      id: "6175007497891327",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.faresone.sletteknapp",
      value: "Delete this text",
    },
    {
      id: "1912235619822329",
      appId: "tekststyring",
      environment: "production",
      language: "nb",
      textKey: "tekstSide.faresone.erDuSikker",
      value: "Er du helt sikker på at du vil slette?",
    },
    {
      id: "3092739960418276",
      appId: "tekststyring",
      environment: "production",
      language: "en",
      textKey: "tekstSide.faresone.erDuSikker",
      value: "Are you completely sure you want to delete this?",
    },
  ],
} as DbType;
