export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bon travail!', 'Génial', 'Bien joué!']
export const GAME_COPIED_MESSAGE = 'Partie copiée dans le presse papier'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Pas assez de lettres'
export const WORD_NOT_FOUND_MESSAGE = 'Mot non trouvé :('
export const HARD_MODE_ALERT_MESSAGE =
  'Le mode difficile peut seulement être activé en début de partie'
export const HARD_MODE_DESCRIPTION =
  'Toutes les lettres révélées doivent être utilisées dans les essais suivants...'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'Pour une meilleure disctinction des couleurs'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Le mot était ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Vous devez utiliser ${guess} à la position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `La proposition doit contenir ${letter}`
export const ENTER_TEXT = 'Entrée'
export const DELETE_TEXT = 'Supprimer'
export const STATISTICS_TITLE = 'Statistiques'
export const GUESS_DISTRIBUTION_TEXT = 'Ordre des tentatives'
export const NEW_WORD_TEXT = 'Nouveau mot dans'
export const SHARE_TEXT = 'Partager'
export const MIGRATE_BUTTON_TEXT = 'Transférer'
export const MIGRATE_DESCRIPTION_TEXT =
  'Cliquez ici pour transférer vos statistiques sur un nouvel appareil.'
export const TOTAL_TRIES_TEXT = "Nombre d'essais total"
export const SUCCESS_RATE_TEXT = 'Taux de succés'
export const CURRENT_STREAK_TEXT = 'Série actuelle'
export const BEST_STREAK_TEXT = 'Meilleure série'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  'Vous utilisez un navigateur embarqué et pouvez rencontrer des problèmes pour sauvegarder ou transférer vos statistiques. Nous vous encourageons à utiliser votre navigateur par défaut.'
