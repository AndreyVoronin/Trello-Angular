export enum Dialog {
    ConfirmationDialogComponent = 'ConfirmationDialogComponent',
    CardDialogComponent = 'CardDialogComponent',
    ColumnDialogComponent = 'ColumnDialogComponent'
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
