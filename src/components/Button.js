const Button =({
    onclick =null,
    Children=null
})=> 
(
<button inClinck={onclick} > {Children}</button>
);

export default Button;