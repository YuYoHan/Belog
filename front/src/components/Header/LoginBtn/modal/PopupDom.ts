import ReactDom from 'react-dom';
 
const PopupDom = ({ children } : any) => {
    const el = document.getElementById('popupDom') as HTMLElement ;
    return ReactDom.createPortal(children, el);
};
 
export default PopupDom;