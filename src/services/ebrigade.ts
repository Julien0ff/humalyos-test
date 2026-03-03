const EBRIGADE_BASE_URL = '/ebrigade-api';
const EBRIGADE_IMPORT_TOKEN = '0a41fbc3b89a5e5c2e29076d591aa7c7'; // Votre clé d'import

import SparkMD5 from 'spark-md5';

export interface EBrigadeResponse {
  success: boolean;
  message: string;
  data?: any;
}

export const eBrigadeApi = {
  /**
   * Authentification réelle via l'API eBrigade
   */
  login: async (identifier: string, password: string): Promise<EBrigadeResponse> => {
    try {
      const hashedPassword = SparkMD5.hash(password);
      console.log('Tentative de connexion avec MDP hashé (SparkMD5):', hashedPassword);

      // Déterminer quel champ utiliser pour l'identifiant
      const isEmail = identifier.includes('@');
      const personData: any = {
        P_MDP: hashedPassword
      };

      if (isEmail) {
        personData.P_EMAIL = identifier;
      } else {
        personData.P_CODE = identifier; // Peut être le matricule ou l'ID externe
      }

      const response = await fetch(`${EBRIGADE_BASE_URL}/import/people.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: EBRIGADE_IMPORT_TOKEN,
          test_only: "1",
          use_external_id: isEmail ? "0" : "1", // 1 si on utilise P_CODE comme ID externe
          create_if_not_exists: "0",
          people: [personData]
        }),
      });

      // Si eBrigade renvoie 400 ou 500, on veut quand même lire le JSON pour voir l'erreur
      const result = await response.json().catch(() => ({ success: false, message: 'Erreur serveur' }));
      console.log('Résultat validation eBrigade:', result);

      if (result.errors && result.errors.length > 0) {
        console.warn('Détails des erreurs eBrigade:', result.errors.map((e: any) => `${e.field}: ${e.message}`).join(', '));
      }

      // Succès : total_errors est 0 (en mode test_only, cela signifie que les identifiants existent)
      if (result.success && result.total_errors === 0) {
        return { 
          success: true, 
          message: 'Connexion réussie', 
          data: result.results?.[0] 
        };
      }

      // Analyse spécifique de l'erreur MD5 ou identifiants
      if (result.errors) {
        const mdpError = result.errors.find((e: any) => e.field === 'P_MDP');
        if (mdpError) {
          return { success: false, message: 'Erreur de format de mot de passe (MD5 requis).' };
        }
        
        // Si l'erreur est liée aux champs manquants (P_SEXE, etc.), cela signifie 
        // généralement que l'utilisateur N'EXISTE PAS et que l'API tente d'en créer un.
        const hasMissingFields = result.errors.some((e: any) => e.type === 'missing_field');
        if (hasMissingFields) {
          return { success: false, message: 'Identifiant ou mot de passe incorrect.' };
        }
      }

      const firstError = result.errors?.[0]?.message || result.message || 'Identifiants invalides';
      throw new Error(firstError);

    } catch (error: any) {
      console.error('EBrigade Login Error:', error);
      return {
        success: false,
        message: error.message || 'Une erreur est survenue lors de la connexion'
      };
    }
  },

  /**
   * Importation de membres via l'API d'importation eBrigade
   */
  importPeople: async (data: any): Promise<EBrigadeResponse> => {
    try {
      const response = await fetch(`${EBRIGADE_BASE_URL}/api/v1/import/people`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': EBRIGADE_IMPORT_TOKEN
        },
        body: JSON.stringify({
          token: EBRIGADE_IMPORT_TOKEN,
          use_external_id: "1",
          create_if_not_exists: "1",
          ...data
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Erreur lors de l\'importation');
      }

      const result = await response.json();
      return {
        success: true,
        message: 'Importation réussie',
        data: result
      };
    } catch (error: any) {
      console.error('EBrigade Import Error:', error);
      return {
        success: false,
        message: error.message || 'Une erreur est survenue lors de l\'importation'
      };
    }
  }
};
