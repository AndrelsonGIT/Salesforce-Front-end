interface MPButtonProps{
    name: string;
}

const MPButton: React.FC<MPButtonProps> = ({name}) => {
    return (
        <button className="bg-white text-secondary-color rounded-md border-2 p-2 border-primary-color
         hover:bg-primary-color hover:text-white transition duration-300 ease-in-out">
            {name}
        </button>
    );
};

export default MPButton;