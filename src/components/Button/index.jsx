export const Button = ({children, variant = 'primary', isBold = false}) => {
    return ( 
        <button className={`flex items-center justify-center my-2 p-4 rounded-[35px] font-grafik text-xl leading-5 
        ${variant === 'primary' ? 'bg-primary text-white' : 'bg-white text-primary'}
        ${isBold && 'font-grafik-bold'}
        `}
        
        >
            
            {children}
        
        </button>
     );
}