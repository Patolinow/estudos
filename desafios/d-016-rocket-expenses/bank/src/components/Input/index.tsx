export const Input = (props: JSX.IntrinsicElements["input"]): JSX.Element => {
  const fillout: string[] = ["text", "number"];
  const classes = fillout.includes(props.type!)
    ? "text-white bg-black p-4 rounded-md placeholder:text-gray focus-within:border-0 focus-within:duration-700"
    : "";

  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      hidden={props.hidden}
      defaultChecked={props.defaultChecked}
      className={`${classes} ${props.className}`}
      ref={props.ref}
    />
  );
};
