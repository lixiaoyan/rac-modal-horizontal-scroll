import {
  Button,
  composeRenderProps,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type ButtonProps,
  type DialogProps,
  type ModalOverlayProps,
} from "react-aria-components";

export const App = () => {
  return (
    <div className="grid place-items-center w-[150vw] h-[150vh]">
      <div className="flex flex-col items-center gap-4">
        <DialogTrigger>
          <MyButton>Open Drawer (100%)</MyButton>
          <MyModalOverlay className="h-(--page-height) w-full">
            <MyModal className="h-(--visual-viewport-height) w-full">
              <MyDialog />
            </MyModal>
          </MyModalOverlay>
        </DialogTrigger>
        <DialogTrigger>
          <MyButton>Open Drawer (100vw)</MyButton>
          <MyModalOverlay className="h-(--page-height) w-screen">
            <MyModal className="h-(--visual-viewport-height) w-screen">
              <MyDialog />
            </MyModal>
          </MyModalOverlay>
        </DialogTrigger>
        <DialogTrigger>
          <MyButton>Open Drawer (#9318)</MyButton>
          <MyModalOverlay className="h-(--page-height) w-(--page-width)">
            <MyModal className="h-(--visual-viewport-height) w-(--visual-viewport-width)">
              <MyDialog />
            </MyModal>
          </MyModalOverlay>
        </DialogTrigger>
      </div>
    </div>
  );
};

const MyButton = ({ className = "", ...props }: ButtonProps) => (
  <Button
    className={composeRenderProps(
      className,
      (className) =>
        `bg-blue-50 ring ring-inset ring-blue-700 rounded-sm px-4 py-2 ${className}`,
    )}
    {...props}
  />
);
const MyModalOverlay = ({ className = "", ...props }: ModalOverlayProps) => (
  <ModalOverlay
    className={composeRenderProps(
      className,
      (className) => `absolute top-0 left-0 bg-black/50 ${className}`,
    )}
    {...props}
  />
);
const MyModal = ({ className = "", ...props }: ModalOverlayProps) => (
  <Modal
    className={composeRenderProps(
      className,
      (className) =>
        `grid justify-items-end sticky top-0 left-0 pointer-events-none ${className}`,
    )}
    {...props}
  />
);
const MyDialog = ({ className = "", ...props }: DialogProps) => (
  <Dialog
    className={`h-full w-80 bg-white shadow-2xl ring ring-inset ring-blue-500 outline-10 -outline-offset-20 outline-red-500 pointer-events-auto ${className}`}
    {...props}
  />
);
