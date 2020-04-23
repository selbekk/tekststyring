// Dette er et fake API enn så lenge, men det kan jo være sånn vi strukturerer det?
type TextObjectType = {
  id: string;
  appId: string;
  language: string;
  textKey: string;
  environment: string;
  value: string;
};

type AppObjectType = {
  id: string;
  name: string;
  description: string;
  environments: string[];
  languages: string[];
};

type DbType = { apps: AppObjectType[]; texts: TextObjectType[] };

export type AppTextsType = {
  [key: string]: string;
};

const fakeDb = {
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
      id: "aaaa",
      appId: "tekststyring",
      language: "nb",
      textKey: "landingPage.heading",
      environment: "production",
      value: `Velkommen til tekststyringsappen`,
    },
    {
      id: "aaab",
      appId: "tekststyring",
      language: "en",
      textKey: "landingPage.heading",
      environment: "production",
      value: `Welcome to the text admin app`,
    },
    {
      id: "aaac",
      appId: "tekststyring",
      language: "nb",
      textKey: "landingPage.description",
      environment: "production",
      value: `Denne appen bruker selvfølgelig seg selv for teksthåndtering`,
    },
    {
      id: "aaad",
      appId: "tekststyring",
      language: "en",
      textKey: "landingPage.description",
      environment: "production",
      value: `This app uses itself for texts, of course`,
    },
    {
      id: "aaae",
      appId: "tekststyring",
      language: "nb",
      textKey: "landingPage.chooseLanguage.button",
      environment: "production",
      value: `Bytt språk`,
    },
    {
      id: "aaaf",
      appId: "tekststyring",
      language: "en",
      textKey: "landingPage.chooseLanguage.button",
      environment: "production",
      value: `Change language`,
    },
    {
      id: "1bcd",
      appId: "tekststyring",
      language: "en",
      textKey: "appPage.description",
      environment: "production",
      value: `Her vil du finne alle tekstene til {appName}. De er sortert etter "nøkkel", men du kan også søke etter teksten du leter etter.`,
    },
    {
      id: "1bcf",
      appId: "tekststyring",
      language: "nb",
      textKey: "appPage.description",
      environment: "production",
      value: `Here you'll find all the texts for {appName}. They are sorted after their "key", but you can also search for the text you're looking for`,
    },
  ],
} as DbType;

const fakeGet = async <T>(returnValue: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(returnValue), 500));

/** Henter alle apper */
export const getApps = async () => fakeGet(fakeDb.apps);

/** Henter alle tekstobjekter for en app id */
export const getTextObjectsForAppId = async (appId: string) =>
  fakeGet(fakeDb.texts.filter((text) => text.appId === appId));

/** Henter tekstobjektet for en gitt nøkkel */
export const getTextObject = async (textKey: string) =>
  fakeGet(fakeDb.texts.find((text) => text.textKey === textKey));

/** Henter alle tekster for en gitt app, miljø og språk */
export const getTexts = async (
  appId: string,
  environment: string,
  language: string
) =>
  fakeGet<AppTextsType>(
    fakeDb.texts
      .filter(
        (textObject) =>
          textObject.appId === appId &&
          textObject.environment === environment &&
          textObject.language === language
      )
      // Denne gjør om en liste med TextObject til et objekt med
      // textKey som key og value som verdi.
      .reduce((acc, next) => ({ ...acc, [next.textKey]: next.value }), {})
  );
