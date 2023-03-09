import { JSXElement } from '@babel/types';
import { ReactElement } from 'react';
import * as S from './Style';

export type Btn  = {
    variant : string,
    shape : string,
    size : string,
    children : string,
    rest: string
 }

function Button({ variant, shape, size, children, ...rest } : Btn) : ReactElement<JSXElement> {
    return (                
        // <S.Button variant={variant} shape={shape} size={size} {...rest}>
        //     {children}
        // </S.Button>
        <div>
            sad
            </div>
    );
}
export default Button;
