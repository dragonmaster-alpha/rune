import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { WindowContent, Cutout, Button, Window as React95Window } from 'react95'
import Draggable from 'react-draggable'

import WindowHeader from '../../components/WindowHeader/WindowHeader'
// import CloseIcon from "../../components/CloseIcon/CloseIcon";

const MinimizeIcon = styled.div`
  image-rendering: pixelated;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  :before,
  :after {
    content: '';
    position: absolute;
  }
  :before {
    height: calc(100% - 7px);
    width: calc(100% - 6px);
    left: 0;
    top: 1px;
  }
  :after {
    height: calc(100% - 7px);
    width: 100%;
    left: 0;
    top: calc(100% - 5px);
    border-top: 4px solid #fff;
  }
`

const MaximizeIcon = styled.div`
  image-rendering: pixelated;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: -1px;
  margin-top: -1px;
  position: relative;
  :before,
  :after {
    content: '';
    position: absolute;
  }
  :before {
    height: calc(100% - 5px);
    width: calc(100% - 4px);
    left: 0;
    top: 1px;
    border: 2px solid #fff;
  }
  :after {
    height: calc(100% - 5px);
    width: 100%;
    left: 0;
    top: 1px;
    border-top: 4px solid #fff;
  }
`

const SWindow = styled(React95Window)`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media ${({ theme }) => theme.MEDIA_MOBILE_ONLY} {
    width: 100%;
    height: 100%;
  }

  ${({ theme }) =>
    theme.name === 'experimental1'
      ? `
      background: rgba(0, 0, 0, 0.3) !important;
      box-shadow: none !important;
      border: 0px none !important;
  `
      : ''}

  ${({ theme }) =>
    theme.name === 'windows'
      ? `
    opacity: 0.92;
    box-shadow: none;
    border-width: 4px;
    border-radius: 8px;
  `
      : ''}

  ${({ opacity }) => (opacity !== undefined ? `opacity: ${opacity};` : '')};

  ${({ fullscreen }) => (fullscreen ? `width: 100%; height: 100%;` : '')}
`

const Window = (props) => {
  const {
    icon,
    position,
    active,
    zIndex,
    opacity,
    onDragStart,
    minimized,
    onDragStop,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    title,
    children,
    toolbar,
    width,
    height,
    minWidth,
    minHeight,
    footer,
    contentCss,
    cutoutCss,
    containerCss,
    headerCss,
    showMinimize = true,
    showMaximize = true,
    showHeader = true,
    fullscreen = false,
    showClose = true,
    tilted = true,
    draggable = true,
    contentDraggable = false,
    contentClassnames = '',
  } = props
  const [maximized, setMaximized] = useState(false)
  const toggleMaximize = () => {
    setMaximized(!maximized)
    onFocus && onFocus()
  }

  const renderInnerWindow = () => {
    return (
      <SWindow
        opacity={opacity}
        fullscreen={fullscreen || maximized}
        style={{
          position: 'absolute',
          top: '0',
          zIndex,
        }}
        css={containerCss}
      >
        <GlobalStyles />
        {showHeader ? (
          <SWindowHeader active={active} className="handle" css={headerCss}>
            {typeof icon === 'string' ? (
              <img
                src={icon}
                style={{
                  height: 24,
                  marginTop: 4,
                  marginRight: '0.5rem',
                  imageRendering: 'pixelated',
                }}
              />
            ) : (
              icon
            )}
            {title}
            {/* <Icon
        src={SwitchToWindows}
        height={43 / 2}
        width={200 / 2}
        style={{
          position: "absolute",
          right: 30,
          top: 3,
          filter: "none",
        }}
      /> */}
            {showMinimize ? (
              <Button
                className="not-draggable"
                square
                size="sm"
                style={{
                  position: 'absolute',
                  right: 73,
                  top: 3,
                  fontWeight: 'bold',
                }}
                goBack
                onClick={() => onMinimize && onMinimize(true)}
              >
                <MinimizeIcon />
              </Button>
            ) : null}
            {showMaximize ? (
              <Button
                className="not-draggable"
                square
                size="sm"
                style={{
                  position: 'absolute',
                  right: 38,
                  top: 3,
                  fontWeight: 'bold',
                }}
                onClick={toggleMaximize}
              >
                <MaximizeIcon />
              </Button>
            ) : null}
            {showClose ? (
              <Button
                className="not-draggable"
                square
                size="sm"
                style={{
                  position: 'absolute',
                  right: 3,
                  top: 3,
                  fontWeight: 'bold',
                }}
                goBack
                onClick={onClose}
              >
                {/* <CloseIcon /> */}
              </Button>
            ) : null}
          </SWindowHeader>
        ) : null}
        {toolbar}
        <SWindowContent
          className={`content ${contentDraggable ? '' : 'not-draggable'} ${contentClassnames}`}
          onMouseDown={onFocus}
          width={width}
          height={height}
          minWidth={minWidth}
          minHeight={minHeight}
          hasToolbar={!!toolbar}
          fullscreen={fullscreen || maximized}
          css={contentCss}
        >
          <SCutout css={cutoutCss}>{children}</SCutout>
        </SWindowContent>
        {footer}
      </SWindow>
    )
  }

  const renderDraggableInnerWindow = () => (
    <Draggable
      handle=".handle"
      bounds="parent"
      cancel=".not-draggable"
      onStart={onDragStart}
      onStop={onDragStop}
      position={fullscreen || maximized ? { x: 0, y: 0 } : position}
    >
      {renderInnerWindow()}
    </Draggable>
  )

  if (draggable) {
    return renderDraggableInnerWindow()
  } else {
    return renderInnerWindow()
  }
}

export default Window

const GlobalStyles = createGlobalStyle`
.react-draggable {
  /* position: relative; */
}
`

let SWindowHeader = styled(WindowHeader)`
  height: 37px;
  position: relative;
`

let SWindowContent = styled(WindowContent)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 0px;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  text-align: center;

  min-height: 100px;
  min-width: 100px;

  height: calc(100% - ${({ hasToolbar }) => (hasToolbar ? 70 + 36 : 36) + 'px'});

  ${({ fullscreen, theme, hasToolbar }) => `
  @media ${theme.MEDIA_TABLET_OR_MORE} {
    height: calc(
      100% - ${({ hasToolbar }) => (hasToolbar ? 70 + 50 : 50) + 'px'}
    );
  }
  `}

  ${({ fullscreen, theme, hasToolbar }) =>
    fullscreen
      ? `
      width: 100% !important;
      height: calc(
        100% - ${(hasToolbar ? 70 + 36 : 36) + 'px'}
      ) !important;

      @media ${theme.MEDIA_TABLET_OR_MORE} {
        height: calc(
          100% - ${(hasToolbar ? 70 + 50 : 50) + 'px'}
        ) !important;
      }
    `
      : `
      @media ${theme.MEDIA_TABLET_OR_MORE} {
        max-height: 700px;
      }
    `}

  ${({ css }) => css}
`

const SCutout = styled(Cutout)`
  width: 100%;
  height: 100%;
  border: 0;
  text-align: left;

  & > div {
    padding: 8px;
  }

  &:before {
    border: 0;
    display: none;
  }
`
