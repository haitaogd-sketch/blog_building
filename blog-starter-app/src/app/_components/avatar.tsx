type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img 
        src={picture} 
        className="w-14 h-14 border-4 border-neo-black mr-4 shadow-neo-sm" 
        alt={name} 
      />
      <div className="text-xl font-black uppercase tracking-tight">{name}</div>
    </div>
  );
};

export default Avatar;
