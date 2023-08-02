const CustomButton = ({ name, link}) => (
    <a className="button learn-more cursor-pointer" href={link}>
        <span className="circle rounded-lg bg-blue-gradient" aria-hidden="true">
          <span className="bg-primary icon rounded-lg arrow"></span>
        </span>
        <span className="button-text text-gradient">{name}</span>
    </a>
);

export default CustomButton;
