import React, { useState, useRef, useEffect, useContext } from 'react'
import cx from 'classnames'
import styled from 'styled-components'
import { useModal, Text } from '@arcanefinance/uikit'
import { getRuneAddress } from 'utils/addressHelpers'
import history from 'routerHistory'
import TrianglesBox from './TrianglesBox'
import useClickOutside from '../utils/hooks/useClickOutside'
import SoundContext from '../contexts/SoundContext'
import ItemsContext from '../contexts/ItemsContext'

const Container = styled.div`
  user-select: none;

  &:hover {
    cursor: url('/images/cursor3.png'), pointer;
  }
`

enum ModalOptions {
  TRADE = 0,
  CRAFT = 1,
  DETAILS = 2,
  CANCEL = 3,
  EQUIP = 4,
  TRANSFER = 5,
  UNEQUIP = 6,
}

export default ({ name, item, symbol, details, onClose = undefined, style = {} }) => {
  const { closeModal } = useContext(ItemsContext)
  const [selectedOption, setSelectedOption] = useState(ModalOptions.TRADE)
  const modalRef = useRef<HTMLDivElement>(null)
  const { playSelect } = useContext(SoundContext)
  const isRune = name.indexOf('Rune') !== -1

  const handleClose = onClose ? onClose : closeModal

  useClickOutside(modalRef, handleClose)

  const onTrade = () => {
    setSelectedOption(ModalOptions.TRADE)
  }

  const onCraft = () => {
    setSelectedOption(ModalOptions.CRAFT)
    history.push('/crafting')
    // onPresentCraftModal()
  }

  const onEquip = () => {
    setSelectedOption(ModalOptions.EQUIP)
    // onPresentEquipModal()
  }

  const onUnequip = () => {
    setSelectedOption(ModalOptions.UNEQUIP)
    // onPresentUnequipModal()
  }

  const onTransfer = () => {
    setSelectedOption(ModalOptions.TRANSFER)
    // onPresentTransferModal()
  }

  const onDetails = () => {
    setSelectedOption(ModalOptions.DETAILS)
    // onPresentDetailsModal()
  }

  const handleKeyPressed = (event: React.KeyboardEvent) => {
    event.stopPropagation()
    event.preventDefault()
    if (event.key === 'ArrowUp') {
      setSelectedOption(Math.max(selectedOption - 1, 0))
      playSelect()
    } else if (event.key === 'ArrowDown') {
      setSelectedOption(Math.min(selectedOption + 1, 3))
      playSelect()
    } else if (event.key === 'Enter') {
      switch (selectedOption) {
        case ModalOptions.TRADE:
          onTrade()
          break
        case ModalOptions.CRAFT:
          onCraft()
          break
        case ModalOptions.EQUIP:
          onEquip()
          break
        case ModalOptions.UNEQUIP:
          onUnequip()
          break
        case ModalOptions.DETAILS:
          onDetails()
          break
        default:
          closeModal && closeModal()
          break
      }
      closeModal && closeModal()
    }
  }

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [])

  return (
    <Container
      ref={modalRef}
      onKeyDown={handleKeyPressed}
      tabIndex={0}
      className="border border-arcane-darkGray w-32 bg-arcane-bgModal absolute top-0 left-0 z-50 mx-6 my-6 outline-none text-white"
      style={style}
    >
      <div className="flex flex-col p-4" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        {item.isTradeable ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.TRADE,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onTrade}
          >
            {selectedOption === ModalOptions.TRADE && <TrianglesBox />}
            Trade
          </div>
        ) : null}
        {item.isCraftable ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.CRAFT,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onCraft}
          >
            {selectedOption === ModalOptions.CRAFT && <TrianglesBox />}
            Craft
          </div>
        ) : null}
        {item.details ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.DETAILS,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onDetails}
          >
            {selectedOption === ModalOptions.DETAILS && <TrianglesBox />}
            Details
          </div>
        ) : null}
        {item.isEquipable ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.EQUIP,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onEquip}
          >
            {selectedOption === ModalOptions.EQUIP && <TrianglesBox />}
            Equip
          </div>
        ) : null}
        {item.isUnequipable ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.UNEQUIP,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onUnequip}
          >
            {selectedOption === ModalOptions.UNEQUIP && <TrianglesBox />}
            Unequip
          </div>
        ) : null}
        {item.isTransferable ? (
          <div
            className={cx(
              {
                'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.TRANSFER,
              },
              'flex justify-center px-6 py-2 relative border border-arcane-darkGray mb-4',
            )}
            onClick={onTransfer}
          >
            {selectedOption === ModalOptions.TRANSFER && <TrianglesBox />}
            Transfer
          </div>
        ) : null}
        <div
          className={cx(
            {
              'shadow-yellow border-arcane-softYellow border-2': selectedOption === ModalOptions.CANCEL,
            },
            'flex justify-center px-6 py-2 relative border border-arcane-darkGray',
          )}
          onClick={handleClose}
        >
          {selectedOption === ModalOptions.CANCEL && <TrianglesBox />}
          Cancel
        </div>
      </div>
    </Container>
  )
}
