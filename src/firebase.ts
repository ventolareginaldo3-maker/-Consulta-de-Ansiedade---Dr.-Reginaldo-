import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, addDoc, setDoc, getDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy, limit } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
let app: any;
let db: any;
let auth: any;
let googleProvider: any;

try {
  // Check if config is valid (not placeholders)
  if (firebaseConfig.apiKey && !firebaseConfig.apiKey.includes('TODO')) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
    auth = getAuth(app);
    googleProvider = new GoogleAuthProvider();
    console.log("Firebase conectado com sucesso!");
  } else {
    throw new Error("Configuração do Firebase ainda pendente.");
  }
} catch (error) {
  console.error("Erro ao inicializar Firebase:", error);
  // Fallback para evitar que o app quebre
  app = {} as any;
  db = {} as any;
  auth = { onAuthStateChanged: () => () => {} } as any;
  googleProvider = {} as any;
}

export { app, db, auth, googleProvider };

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Connection test
async function testConnection() {
  if (!db || !db.type) return; // Only test if db is real
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if(error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Por favor, verifique sua configuração do Firebase. ");
    }
  }
}
testConnection();

export const signIn = () => {
  if (!auth || !auth.app) {
    alert("Firebase não configurado corretamente.");
    return Promise.reject("Firebase não configurado");
  }
  return signInWithPopup(auth, googleProvider);
};
export const signOut = () => {
  if (!auth || !auth.signOut) return Promise.resolve();
  return auth.signOut();
};
