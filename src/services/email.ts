import emailjs from '@emailjs/browser';

// EmailJS configuration - à remplacer par vos propres clés
// Créez un compte sur https://www.emailjs.com/
// Créez un service email, un template, et récupérez vos clés

const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Remplacez par votre clé publique EmailJS
const SERVICE_ID = 'service_830mvvq'; // Remplacez par votre service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Remplacez par votre template ID

// Template EmailJS à créer:
// - {{firstName}} - Prénom
// - {{lastName}} - Nom
// - {{email}} - Email
// - {{phone}} - Téléphone
// - {{interest}} - Intérêt
// - {{motivation}} - Motivation
// - {{submissionDate}} - Date de soumission

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  motivation: string;
}

export const sendApplicationEmail = async (data: ApplicationData): Promise<boolean> => {
  try {
    const templateParams = {
      ...data,
      submissionDate: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

// Alternative: Utiliser Formspree (plus simple, pas de configuration)
// Pour utiliser Formspree:
// 1. Créez un compte sur https://formspree.io/
// 2. Créez un nouveau formulaire
// 3. Remplacez l'URL ci-dessous par votre URL Formspree

export const sendApplicationWithFormspree = async (data: ApplicationData): Promise<boolean> => {
  try {
    const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID'; // Remplacez par votre ID de formulaire Formspree
    
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        motivation: data.motivation,
      })
    });

    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error);
    return false;
  }
};
