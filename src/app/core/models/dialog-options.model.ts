export enum Dialog {
    ConfirmationDialogComponent = 'ConfirmationDialogComponent',
    CardDialogComponent = 'CardDialogComponent'
}

export interface DialogOptions {
    data?: any;
    type?: Dialog;
    content?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}
