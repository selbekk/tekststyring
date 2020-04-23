import { mockData } from "./mock-data";

// Dette er et fake API enn så lenge, men det kan jo være sånn vi strukturerer det?
type DbTextObjectType = {
  id: string;
  appId: string;
  language: string;
  textKey: string;
  environment: string;
  value: string;
  description?: string;
};

type DbAppObjectType = {
  id: string;
  name: string;
  description: string;
  environments: string[];
  languages: string[];
};

export type DbType = { apps: DbAppObjectType[]; texts: DbTextObjectType[] };

export type AppTextsType = {
  [key: string]: string;
};

if (!localStorage.getItem("db")) {
  localStorage.setItem("db", JSON.stringify(mockData));
}
const fakeDb = JSON.parse(localStorage.getItem("db")!) as DbType;

const fakeGet = async <T>(returnValue: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(returnValue), 500));

/** Henter alle apper */
export const getApps = async () => fakeGet(fakeDb.apps);

/** Henter en app basert på app ID */
export const getApp = async (appId: string) =>
  fakeGet(fakeDb.apps.find((app) => app.id === appId));

/** Henter alle tekstobjekter for en app id */
export const getTextKeysForAppId = async (appId: string) =>
  fakeGet(
    Array.from(
      new Set(
        fakeDb.texts
          .filter((text) => text.appId === appId)
          .map((text) => text.textKey)
      )
    ).sort()
  );

/** Henter tekstobjektet for en gitt nøkkel */
export const getTextObject = async (appId: string, textKey: string) =>
  fakeGet(
    fakeDb.texts.filter(
      (text) => text.appId === appId && text.textKey === textKey
    )
  );

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

/** Legger til eller oppdaterer et tekstobjekt i "databasen" */
export const createOrUpdateTexts = (
  appId: string,
  textKey: string,
  texts: { [key: string]: string }
) => {
  Object.entries(texts).forEach(([languageAndEnvironment, value]) => {
    const [language, environment] = languageAndEnvironment.split("-");
    const existingIndex = fakeDb.texts.findIndex(
      (entry) =>
        entry.appId === appId &&
        entry.textKey === textKey &&
        entry.language === language &&
        entry.environment === environment
    );
    if (existingIndex !== -1) {
      fakeDb.texts[existingIndex].value = value;
    } else {
      fakeDb.texts.push({
        id: String(Math.random()).substring(2), // fattigmanns UUID
        appId,
        environment,
        language,
        textKey,
        value,
      });
    }
  });
  localStorage.setItem("db", JSON.stringify(fakeDb));
};

/** Sletter en tekst og alle dens oversettelser */
export const deleteText = (textKey: string) => {
  fakeDb.texts = fakeDb.texts.filter((text) => text.textKey !== textKey);
  localStorage.setItem("db", JSON.stringify(fakeDb));
};
