interface Boxprops{
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<Boxprops>=({
    children,
    className
}) => {
    return(
      <div>
        {children}
      </div>
    )
}
export default Box