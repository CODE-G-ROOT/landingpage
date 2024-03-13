import colombia from "../public/images/colombia.png";
import "../styles/header.css"; // Puedes mantener tu archivo de estilos si es necesario

export const Header = () => {
  return (
    <>
      <div className="header-container bg-yellow-400 p-4 flex justify-between items-center">
        <div className="yellow-rectangle flex-grow">
          <h1 className="text-white">Envíos a toda Colombia</h1>
        </div>
        <img className="colombia-image w-1/5 max-h-full object-contain" src={colombia} alt="Colombia" />
      </div>
    </>
  );
};
