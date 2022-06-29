import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal
      title="Comment jouer..."
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Devinez le mot en 6 essais. Après chaque tentative, la couleur des
        tuiles changera pour vous donner des indices.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="I" />
        <Cell value="R" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettre F est dans le mot et au bon endroit.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="N" />
        <Cell value="D" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettre A est dans le mot mais à la mauvaise place.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="C" />
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La lettre U n'est pas dans le mot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Ceci est une version open source du jeu que nous connaissons et aimons
        tous-{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          vous trouverez le code ici.
        </a>{' '}
      </p>
    </BaseModal>
  )
}
