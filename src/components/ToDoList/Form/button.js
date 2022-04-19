function Button(props) {
    return (
        <button className="
            rounded-md
            p-3
            w-full
            shadow-xl
            bg-blue-500
            text-white
            flex
            items-center
            justify-center"
            type={ props.type }
        >{ props.title }</button>
    );
  }
  
  export default Button;
  