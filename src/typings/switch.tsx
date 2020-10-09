import { Key, ReactNode } from "react";
export namespace MySwitch {
    export type type = 'right' | 'bottom' | 'scroll' | 'fade'
    
    export interface AnimatedSwitchProps {
        children?: ReactNode
        classNames: string
        primaryKey: Key | null
        timeout?: number
        type?: type
        backClassName?: string
        forwardClassName?: string
        mountOnEnter?: boolean;
        unmountOnExit?: boolean;

    }

}