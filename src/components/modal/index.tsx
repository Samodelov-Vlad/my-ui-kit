import { Modal as AntdModal, type ModalProps as AntdModalProps } from "antd";
import React, {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import type { DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";
import { Resizable, type ResizeCallbackData } from "react-resizable";
import "./index.css";
import { useModalStoreSettings } from "./use-modal-store-settings";

const BODY_PADDING = 24;
const MIN_HEIGHT = 106; // Минимальная высота модального окна. Сумма шапки и футера

type Size = { width: number; height: number };

// export type BaseModalProps = {
//   modalProps?: Omit<ModalProps, 'open' | 'title'>;
// };

export type ModalProps = Omit<
  AntdModalProps,
  "width" | "height" | "modalRender" | "zIndex"
> & {
  isDraggable?: boolean;
  isResizable?: boolean;
  initialSize?: Size; // TODO обязательное при isResizable true
};

export const BaseModal: React.FC<PropsWithChildren<ModalProps>> = ({
  initialSize = { width: 500, height: 500 }, // Значение по умолчанию
  title,
  children,
  isDraggable = true,
  isResizable = false,
  open,
  ...rest
}) => {
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const [size, setSize] = useState(initialSize); // Начальные размеры
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const draggleRef = useRef<HTMLDivElement>(null!);
  const { maxZIndex, setMaxZIndex } = useModalStoreSettings();
  const [zIndex, setZIndex] = useState(maxZIndex);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    setZIndex(maxZIndex + 1);
    setMaxZIndex(maxZIndex + 1);

    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const onResize = (
    _event: React.SyntheticEvent,
    { size: newSize }: ResizeCallbackData,
  ) => {
    if (draggleRef.current) {
      // Получаем текущее положение модалки на экране
      const rect = draggleRef.current.getBoundingClientRect();

      // Вычисляем максимально возможные размеры до края экрана
      // Используем clientWidth/Height, чтобы не учитывать скроллбары
      const maxWidth = window.innerWidth - rect.left; // -10 для небольшого отступа
      const maxHeight = window.innerHeight - rect.top;

      // Ограничиваем размеры: не меньше начальных и не больше доступного места
      setSize({
        width: Math.min(newSize.width, maxWidth),
        height: Math.min(newSize.height, maxHeight),
      });
    }
  };

  // 3. Обработчик перетаскивания (обязательно обновляем позицию, чтобы она не "прыгала")
  const onDrag = (_e: DraggableEvent, uiData: DraggableData) => {
    setPosition({ x: uiData.x, y: uiData.y });
  };

  // 2. Обновляем расчет при открытии
  useEffect(() => {
    if (open) {
      // Сброс размеров к начальным
      setSize(initialSize);

      // Расчет центра экрана
      const x = (window.innerWidth - initialSize.width) / 2;
      const y = (window.innerHeight - initialSize.height) / 2;
      setPosition({ x, y });

      // Обновляем zIndex только при открытии
      const newZ = maxZIndex + 1;
      setZIndex(newZ);
      setMaxZIndex(newZ);
    }
  }, [open, initialSize]); // Добавьте initialSize в зависимости

  return (
    <AntdModal
      styles={{
        body: { padding: isResizable ? 0 : BODY_PADDING },
      }}
      title={
        isDraggable ? (
          <div
            style={{ width: "100%", cursor: "move" }}
            onMouseOver={() => disabled && setDisabled(false)}
            onMouseOut={() => setDisabled(true)}
          >
            {title}
          </div>
        ) : (
          title
        )
      }
      zIndex={zIndex}
      // getContainer={() => document.getElementById('modals-container')!}
      {...(isDraggable && {
        modalRender: (modal) => {
          return (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              nodeRef={draggleRef}
              position={position}
              onStart={(event, uiData) => onStart(event, uiData)}
              onDrag={onDrag} // Обновляем координаты в стейте при движении
              // defaultPosition={position || { x: 0, y: 0 }} // задаём начальную позицию
            >
              <div
                style={
                  isResizable
                    ? {
                        width: size?.width,
                        height: size?.height,
                        display: "inline-block",
                        position: "absolute", // Чтобы корректно работало позиционирование draggable
                      }
                    : { position: "absolute" }
                }
                ref={draggleRef}
              >
                {modal}
              </div>
            </Draggable>
          );
        },
      })}
      mask={false}
      open={open}
      width={isResizable ? size?.width : initialSize.width}
      style={{
        top: 0,
        paddingBottom: 0,
        margin: isDraggable ? 0 : "auto", // если draggable, убираем авто-отступы
      }}
      wrapClassName={isDraggable ? "no-scroll-wrapper" : ""}
      centered={false}
      {...rest}
    >
      {!isResizable && children}
      {isResizable && (
        <Resizable
          // minConstraints={[initialSize?.width!, initialSize?.height!]}
          // minConstraints={[initialSize?.width!, 115]}
          minConstraints={[initialSize?.width || 200, MIN_HEIGHT]}
          width={size?.width}
          height={size?.height}
          onResize={onResize}
          // @ts-ignore
          style={{ position: "static", overflowX: "hidden" }} // Обязательно для работы Resizable
        >
          {/* возможно нужно добавить overflow: auto  */}
          <div
            className="h-full w-full"
            // style={{ overflow: 'auto' }}
            style={{ padding: `${BODY_PADDING}px` }}
          >
            {children}
          </div>
        </Resizable>
      )}
    </AntdModal>
  );
};
