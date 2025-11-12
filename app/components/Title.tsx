interface TitleProps {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="text-amber-500 text-2xl text-center">{title}</h1>
    );
};

export default Title;