export type ModalProps = {
  className?: string;
  onClose?: (ev: any, reason?: any) => void;
  open: boolean;
};

export type MultiStepModalProps = ModalProps & {
  onBack?: (ev: any, reason?: any) => void;
  onNext?: (ev: any, reason?: any) => void;
  onClose?: (ev: any, reason?: any) => void;
};
