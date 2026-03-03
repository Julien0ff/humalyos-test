// Service pour envoyer les candidatures via webhook Discord
// Configurez votre webhook Discord dans les variables d'environnement ou directement ici

// Pour créer un webhook Discord :
// 1. Allez dans les paramètres du channel > Intégrations > Webhooks
// 2. Créez un nouveau webhook
// 3. Copiez l'URL ci-dessous

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1478425916119060592/5C9Gv7nZd8XeNcAol0ntKXh3ApfqXuBi1YPIAiL4WKO9IGHRiFR9uu5EjBGqT4onH_RJ'; // Remplacez par votre URL de webhook Discord

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  motivation: string;
}

const interestLabels: Record<string, string> = {
  'responsable-logistique': 'Responsable Logistique',
  'responsable-formations': 'Responsable des formations',
  'responsable-activites': 'Responsable des activités',
  'responsable-unites': 'Responsable des unités',
  'aide-sociale': 'Aide sociale / accompagnement',
  'securite-numerique': 'Sécurité numérique / cyber',
  'communication': 'Communication / réseaux sociaux',
  'logistique': 'Logistique / terrain',
  'formation': 'Formation / sensibilisation',
  'administratif': 'Administratif / coordination',
  'autre': 'Autre',
};

export const sendApplicationToDiscord = async (data: ApplicationData): Promise<boolean> => {
  try {
    const interestLabel = interestLabels[data.interest] || data.interest;
    
    const embed = {
      title: '🎉 Nouvelle candidature - HUMALYOS',
      color: 0x00ff00, // Vert
      fields: [
        {
          name: '👤 Nom complet',
          value: `${data.firstName} ${data.lastName}`,
          inline: true,
        },
        {
          name: '📧 Email',
          value: data.email,
          inline: true,
        },
        {
          name: '📞 Téléphone',
          value: data.phone,
          inline: true,
        },
        {
          name: '💼 Poste souhaité',
          value: interestLabel,
          inline: true,
        },
        {
          name: '📝 Motivation',
          value: data.motivation.length > 1000 ? data.motivation.substring(0, 1000) + '...' : data.motivation,
          inline: false,
        },
      ],
      footer: {
        text: 'HUMALYOS - Formulaire de candidature',
      },
      timestamp: new Date().toISOString(),
    };

    const payload = {
      embeds: [embed],
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.ok;
  } catch (error) {
    console.error('Erreur lors de l\'envoi vers Discord:', error);
    return false;
  }
};
